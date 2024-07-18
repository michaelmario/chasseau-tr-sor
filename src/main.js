import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from "./plugins/vuetify.js";
import { projectAuth } from './firebase/config'
// import { store } from './store/store'

let app 
projectAuth.onAuthStateChanged(() => {
    if (!app) {
      app = createApp(App)
        .use(vuetify)
        // .use(store)
        .use(router)
        .mount('#app')
    }
  })

