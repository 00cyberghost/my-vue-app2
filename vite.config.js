// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.js', // Entry point of your Vue.js application
      name: 'MyApp', // Name of the library (you can customize this)
      fileName: 'my-app', // File name of the bundled library
    },
    rollupOptions: {
      external: ['vue'], // List of external dependencies
      output: {
        globals: {
          vue: 'Vue', // Mapping for external dependencies
        },
      },
    },
  },
});