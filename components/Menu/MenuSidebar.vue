<script setup lang="ts">
  const isOpen = defineModel<boolean>();
</script>

<template>
  <ElDrawer
    v-model="isOpen"
    class="fixed top-0 left-0 h-full"
    direction="ltr"
    :with-header="false"
    size="220px"
  >
    <MenuNavigation :horizontal="false" />
  </ElDrawer>
</template>

<style lang="scss">
  .el-drawer__body {
    @apply p-[20px] bg-black;

    padding-top: calc(var(--header-height) + 10px);
  }
</style>
