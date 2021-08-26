import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCyMDfXJWkPddHNO9rzDAaZst3eI7-VA44",
    authDomain: "vue-auth-19d85.firebaseapp.com",
    projectId: "vue-auth-19d85",
    storageBucket: "vue-auth-19d85.appspot.com",
    messagingSenderId: "73246830980",
    appId: "1:73246830980:web:3a28bd93e70cf9f31cedd1"
};
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
