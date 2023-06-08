<template>
  <h1> LOGIN </h1>
  <v-form v-model="valid">
    <v-container>
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="username"
              label="First name"
              required
          ></v-text-field>
        </v-col>

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
      <v-btn v-if="!username || !email || !checkEmailBeforeSendingRequest" disabled>
        Validate
      </v-btn>
      <v-btn  v-else @click="validate">
        Validate
      </v-btn>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      username: '',
      email: '',
      emailIsValid: false,
      regexValidEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    }
  },
  methods: {
    validate(){
      // api call
      console.log('API CALL WILL BE MADE')
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