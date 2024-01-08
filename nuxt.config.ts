// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/strategy': { redirect: '/strategy/menu/strategy' },
    '/': { redirect: '/blog/menu/blog' },
    '/blog': { redirect: '/blog/menu/blog' }
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/main.scss'
    // config: {
    //   plugins: [require('tailwind-scrollbar')]
    // }

  },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@pinia/nuxt',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', { families: { Ubuntu: true }, display: 'swap', prefetch: true }]
  ]
})
