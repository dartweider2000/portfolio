<script setup lang="ts">
  const isOpen = defineModel<boolean>();
  const clickHandler = () => {
    isOpen.value = !isOpen.value;
  };
</script>

<template>
  <button class="burger z-[99999999999]" @click="clickHandler">
    <div class="burger__element" :class="{ _active: isOpen }">
      <span></span>
    </div>
  </button>
</template>

<style scoped lang="scss">
  .burger {
    // .burger__element
    &__element {
      @apply relative w-[30px] h-[20px];

      &::before,
      &::after {
        content: "";
      }

      &::before,
      &::after,
      & > span {
        @apply absolute w-full h-[2px] bg-white left-0;

        transition: all 0.25s ease 0s;
      }

      &::before {
        @apply top-0;
      }

      & > span {
        @apply top-[50%] translate-y-[-50%];
      }

      &::after {
        @apply bottom-0;
      }

      &._active {
        &::before {
          @apply top-[50%] translate-y-[-50%] rotate-[45deg];
        }

        & > span {
          @apply top-[50%] translate-y-[-50%] scale-0;
        }

        &::after {
          @apply bottom-[50%] translate-y-[50%] rotate-[-45deg];
        }
      }
    }
  }
</style>
