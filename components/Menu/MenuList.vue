<script setup lang="ts">
  withDefaults(
    defineProps<{
      isSubMenu?: boolean;
    }>(),
    { isSubMenu: false }
  );

  defineSlots<{
    default: () => any;
  }>();
</script>

<template>
  <ul class="menu-list" :class="{ 'sub-menu': isSubMenu }">
    <slot />
  </ul>
</template>

<style lang="scss">
  .sub-menu {
    & > * {
      @apply p-[5px];
    }
  }
</style>
