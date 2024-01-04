<script setup lang="ts">
import { ref } from 'vue'

const open = ref<boolean>(false)

const afterOpenChange = (bool: boolean) => {
  console.info('open', bool)
}

const toggleShowDrawer = (value: boolean) => {
  open.value = value
}
</script>

<template>
  <button @click="toggleShowDrawer(true)">
    <slot name="button" />
  </button>
  <a-drawer
    v-model:open="open" close-icon="" height="600" class="mobile-m-drawer" root-class-name="mobile-m-drawer-root"
    :root-style="{ color: 'inherit', background: '' }" style="" :header-style="{ display: 'none' }" placement="bottom"
    @after-open-change="afterOpenChange"
  >
    <div class="flex flex-col flex-auto h-[calc(100%-64px)] overflow-auto mb-8">
      <slot name="content" :action="() =>toggleShowDrawer(false)" />
    </div>

    <!-- footer -->
    <div class="fixed w-[calc(100%-50px)] z-10 ">
      <div class="h-8 flex items-center justify-center">
        <CloseCircleFilled
          class="flex items-center justify-center w-fit cursor-pointer hover:text-teal-500"
          style="font-size: 24px;" @click="toggleShowDrawer(false)" />
      </div>
    </div>
  </a-drawer>
</template>

<style lang="scss">
.mobile-m-drawer-root {
  @apply text-white md:hidden;

  .ant-drawer-content {
    @apply bg-slate-900;
  }

  .ant-drawer-close,
  .ant-drawer-title {
    @apply text-white #{!important};
  }
}
</style>
