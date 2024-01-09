<script setup lang="ts">

defineProps<{
  action?:() => void
}>()

const route = useRoute()

const websiteConfig = useState('path', () => ({ path: route.path.length === 1 ? '/' : useCompact(route.path.split('/'))[0], subPath: '' }))

watch(
  () => route.fullPath,
  () => {
    // console.log('routePath', routePath)
    const routePath = route.path.length === 1 ? '/' : useCompact(route.path.split('/'))[0]
    websiteConfig.value = { path: routePath, subPath: route.path }
  }
)
</script>

<template>
  <div
    class="md:min-w-[220px] md:fixed flex-col w-full md:w-[220px] border-r border-transparent
    md:border-r-teal-500/50 h-full md:min-h-[calc(100vh-var(--top-bar-height))]">
    <div class="mt-8 uppercase flex flex-col pb-6 text-lg text-center font-bold">
      <span class="-ml-8">trading</span> <span class="text-gradient">strategy</span>
    </div>
    <SideMenuHeader />
    <SideMenuStrategy v-if="websiteConfig.path === 'strategy'" :action="action" />
    <SideMenuBlog v-if="websiteConfig.path === 'blog'" :action="action" />
  </div>
</template>

<style scoped lang="scss">
.menu-item {
  @apply px-5 py-2 mx-4 md:mx-0 cursor-pointer border-l md:border-l-transparent text-xl md:text-base border-l-white/20 hover:text-teal-500 duration-300;
}

.active {
  @apply text-teal-500 duration-300;
}
</style>
