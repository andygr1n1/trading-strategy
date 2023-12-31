// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/main.scss'
  },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@pinia/nuxt',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt'
  ]
})
