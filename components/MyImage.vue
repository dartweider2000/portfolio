<script setup lang="ts">
  withDefaults(
    defineProps<{
      src: string;
      loading?: "preload" | "lazy";
      quality?: number;
    }>(),
    { loading: "lazy", quality: 1 }
  );
</script>

<template>
  <!-- <NuxtImg
    :src="src"
    :preload="loading === 'preload'"
    :loading="loading === 'lazy' ? 'lazy' : 'eager'"
    format="webp"
    :quality="quality"
  /> -->
  <img :src="src" :loading="loading === 'lazy' ? 'lazy' : 'eager'" />
</template>

<style scoped lang="scss"></style>
