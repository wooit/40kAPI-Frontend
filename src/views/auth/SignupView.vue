<template>
  <div>
    <v-progress-circular v-if="isLoading" indeterminate  size="40" color="primary"></v-progress-circular>
    <h1> SIGNUP </h1>
    <v-form v-model="valid">
      <v-container>
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="username"
              :rules="usernameRules"
              :counter="20"
              label="Username"
              required
          ></v-text-field>

          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>

          <v-text-field
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

          <v-btn v-if="!usernameIsValid || !emailIsValid || !checkbox"  disabled>
            Validate
          </v-btn>
          <v-btn  v-else @click="validateSignup">
            Validate
          </v-btn>
        </v-col>
        <div class="redirect-section">
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