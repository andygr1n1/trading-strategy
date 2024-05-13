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
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'ru',
    locales: [
     {
        code: 'ru',
        name: 'Russian'
      },
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'pt',
        name: 'Portuguese'
       },
       {
        code: 'ro',
        name: 'Romanian'
      },
      {
        code: 'es',
        name: 'Español'
      },
    ]
  },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@pinia/nuxt',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', { families: { Ubuntu: true }, display: 'swap', prefetch: true }],
    '@nuxtjs/i18n'
  ]
})