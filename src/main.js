// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
 import './assets/main.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router'

const app = createApp(App);
app.use(createPinia())
app.use(router)


// Mount the app if running in the browser
if (import.meta.env.DEV) {
  app.mount('#app');
}

// Export the app instance for library mode
export default app;