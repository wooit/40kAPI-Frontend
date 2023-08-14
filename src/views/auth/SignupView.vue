<template>
  <div class="signup-container">
    <h1 class="signup-title">Signup now !</h1>
    <v-progress-circular v-if="isLoading" indeterminate  size="40" color="primary"></v-progress-circular>
    <div class="signup-message"> By signing up, you may use advanced features such as organising your own library of books, grade them and use custom filters </div>
    <v-form class="full-form" v-model="valid">
      <v-container class="signup-form">
          <v-text-field
              v-model="username"
              :rules="usernameRules"
              :counter="20"
              label="Username"
              required
              outlined
              class="input-field"
          ></v-text-field>

          <v-text-field class="input-field"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>

          <v-text-field class="input-field"
              v-model="password"
              :rules="passwordRules"
              label="password"
              type="password"
              required
          ></v-text-field>

          <v-checkbox
              v-model="checkbox"
              label="Do you agree?"
              required
          ></v-checkbox>

          <v-btn  v-if="!usernameIsValid || !emailIsValid || !checkbox"  disabled>
            Validate
          </v-btn>
          <v-btn color="warning" class="validate-btn" v-else @click="validateSignup">
            Validate
          </v-btn>
        <div class="redirect-link">
          <router-link to="/login">
            <p>you already have an account? Login Now</p>
          </router-link>
        </div>
      </v-container>
    </v-form>
    <div>{{ error }}</div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      regexValidEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      valid: false,
      isLoading: null,
      error: null,
      username: '',
      checkbox: false,
      usernameRules: [
        value => {
          if (value) {
            return true
          }
          return 'Username is required.'
        },
        value => {
          if (value?.length >= 3){
            return true
          }
          return 'Username must be at least 3 characters.'
        },
        value => {
          if (value?.length <= 20){
            return true
          }
          return 'Username must be less than 20 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value){
            return true
          }
          return 'E-mail is required.'
        },
        value => {
          if (this.regexValidEmail.test(value)) {
            return true
          }
          return 'E-mail must be valid.'
        },
      ],
      password: null,
      passwordRules: [
        value => {
          if (value) {
            return true
          }
          return 'Password is required.'
        },
        value => {
          if (value?.length >= 5){
            return true
          }
          return 'Password must be at least 5 characters.'
        },
      ],
    }
  },
  methods: {
    async validateSignup(){
      this.isLoading = true
      await axios.post('http://localhost:5000/auth/signup', {
        username: this.username,
        email: this.email,
        password: this.password})
          //if successful i auto login the user
          .then(response => {
            console.log(response.data);
            const payload = {
              email: this.email,
              password: this.password
            }
            try {
              this.$store.dispatch('login', payload)
              this.isLoading = false;
              // i need a poppin message success with redirect after 2 sec
              this.$router.push('/home')
            } catch (err) {
              console.log(err)
            }

      }).catch(error =>{
        this.error = error.message || 'Failed to register'
        console.log(error);
      })
    }
  },
  computed: {
    usernameIsValid(){
      return this.username.length >= 3 && this.username.length <= 20;
    },
    emailIsValid(){
      return !!this.email.match(this.regexValidEmail);
    },
  }
}
</script>

<style scoped>
.signup-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #121112;
  color: white;
}
.signup-title {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.signup-message {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1.3rem;
}
.full-form {
  /*width: 30%;*/
  /*height: 45%;*/
}
.signup-form {
  color: white;
  background-color: black;

  /*display: flex;*/
  /*flex-direction: column;*/
  /*background-color: lightgreen;*/
  /*gap: 2em;*/
}
.input-field {
  background-color: chocolate;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.v-text-field >>> input{
  font-size: 2vh;
}
 v-messages {
  font-size: 2em;
}
.redirect-link {
  margin-top: 2rem;
}
.validate-btn{
  background-color: orange;
}
a {
  color: white;
  text-decoration: none
}
a:hover{
  color: orange;
}
</style>