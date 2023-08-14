<template>
  <div class="login-container">
    <h1 class="login-title"> LOGIN </h1>
    <v-progress-circular v-if="isLoading" indeterminate  size="40" color="primary"></v-progress-circular>
    <v-form v-model="valid">
      <v-container class="login-form">
          <v-text-field
              class="input-field"
              v-model="email"
              label="E-mail"
              required
          ></v-text-field>
          <v-text-field
              class="input-field"
              v-model="password"
              label="password"
              type="password"
              required
          ></v-text-field>
          <v-btn v-if="!password || !email || !checkEmailBeforeSendingRequest" disabled>
            Validate
          </v-btn>
          <v-btn class="validate-btn" v-else @click="validateLogin">
            Validate
          </v-btn>
        <div class="redirect-link">
          <router-link to="/signup">
            <p>you dont have an account yet? Register Now</p>
          </router-link>
        </div>
      </v-container>
    </v-form>
    <div>{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      password: null,
      email: '',
      emailIsValid: false,
      regexValidEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      isLoading: null,
      error: null,
    }
  },
  methods: {
    async validateLogin(){
      this.isLoading = true
      try {
        const payload = {
          email: this.email,
          password: this.password
        }
        await this.$store.dispatch('login', payload)
        this.isLoading = false
        this.$router.push('/home')
      } catch (err){
        this.error = 'Failed to Authenticate' || err.message
      }

    }
  },
  computed: {
    checkEmailBeforeSendingRequest(){
      // return this.email.match(this.regexValidEmail) ? true : false
      return !!this.email.match(this.regexValidEmail)
    }
  }
}
</script>

<style scoped>
.login-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #121112;
  color: white;
}
.login-title {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.login-form {
  color: white;
  background-color: black;
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