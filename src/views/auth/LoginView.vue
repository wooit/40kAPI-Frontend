<template>
  <h1> LOGIN </h1>
  <v-progress-circular v-if="isLoading" indeterminate  size="40" color="primary"></v-progress-circular>
  <v-form v-model="valid">
    <v-container>
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="email"
              label="E-mail"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="password"
              label="password"
              type="password"
              required
          ></v-text-field>
        </v-col>
      <v-col
          cols="12"
          md="4"
      >
      <v-btn v-if="!password || !email || !checkEmailBeforeSendingRequest" disabled>
        Validate
      </v-btn>
      <v-btn  v-else @click="validateLogin">
        Validate
      </v-btn>
      </v-col>
      <div class="redirect-section">
        <router-link to="/signup">
          <p>you dont have an account yet? Register Now</p>
        </router-link>
      </div>
    </v-container>
  </v-form>
  <div>{{ error }}</div>
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