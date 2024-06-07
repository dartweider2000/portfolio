<script setup lang="ts">
  const show = ref<boolean>(false);

  if (process.client) {
    window.addEventListener("load", () => (show.value = true));
  }
</script>

<template>
  <NuxtLayout :style="{ opacity: show ? '1' : '0' }">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss"></style>
