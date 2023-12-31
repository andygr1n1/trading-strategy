<script setup lang="ts">
const route = useRoute()

const isActive = (path: string) => {
  return route.path.split('/')[1] === path
}
</script>

<template>
  <ul class="flex gap-2  items-center h-[var(--top-bar-height)]">
    <li>
      <NuxtLink to="/" :class="{ active: isActive('') }">
        <HomeFilled class="icon" style="font-size: 24px;" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/check-list" :class="{ active: isActive('check-list') }">
        <SafetyCertificateFilled class="icon" style="font-size: 24px;" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/strategy" :class="{ active: isActive('strategy') }">
        <SignalFilled class="icon" style="font-size: 24px;" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/risk-management" :class="{ active: isActive('risk-management') }">
        <ThunderboltFilled class="icon" style="font-size: 24px;" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/book" :class="{ active: isActive('book') }">
        <BookFilled class="icon" style="font-size: 24px;" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
li {
  @apply p-2 flex flex-auto md:flex-initial items-center justify-center;

}

li>a {
  @apply p-2 rounded-md;
}

li>a>.icon {
  @apply h-8 flex items-center justify-center;
}

.active {
  @apply bg-teal-500 duration-300;
}
</style>
