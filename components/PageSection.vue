<script setup lang="ts">
  defineSlots<{
    title: () => any;
    default: () => any;
  }>();
</script>

<template>
  <section class="section">
    <MainContainer class="container">
      <h2 class="section__title">
        <slot name="title" />
      </h2>
      <div class="section__content">
        <slot />
      </div>
    </MainContainer>
  </section>
</template>

<style scoped lang="scss">
  .section {
    padding: clamp(10px, 4vw, 30px) 0;

    @apply text-white;
    // .section__title
    &__title {
      @apply font-bold text-center;

      font-size: clamp(25px, 4vw, 40px);
    }
    // .section__content
    &__content {
    }
  }

  .container {
    @apply grid gap-[20px];

    gap: clamp(10px, 3vw, 20px);
  }
</style>
