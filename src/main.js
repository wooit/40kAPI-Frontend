import { createApp } from 'vue';
import router from "@/router";
import store from "@/store/index";
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
