import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'
//import router from './router'
//import { createPinia } from 'pinia'

const app = createApp(App)

//app.use(createPinia())
//app.use(router)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDdek47qprJ2uacq6OC1_zAb3RWGJmNIzQ'
    }
})

app.mount('#app')