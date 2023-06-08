<template>
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

        <v-checkbox
            v-model="checkbox"
            label="Do you agree?"
            required
        ></v-checkbox>

        <v-btn v-if="!usernameIsValid || !emailIsValid || !checkbox"  disabled>
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
      regexValidEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      valid: false,
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
    }
  },
  methods: {
    validate(){
      // api call
      console.log('API CALL WILL BE MADE')
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