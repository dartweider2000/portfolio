<script setup lang="ts">
  import bg from "~/assets/img/full-screen_bg.png";
</script>

<template>
  <div class="full-screen">
    <MainContainer>
      <div class="full-screen__content">
        <h1 class="full-screen__title">
          Приветствую вас на моём сайте - портфолио
        </h1>
        <p class="full-screen__text">Frontend developer</p>
        <NuxtLink to="#who-am-i" class="full-screen__chevron">
          <IconChevron class="w-[50px] h-[50px]" />
        </NuxtLink>
      </div>
    </MainContainer>
    <div class="full-screen__bg full">
      <MyImage class="full" src="full-screen_bg.png" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .full {
    @apply absolute top-0 left-0 w-full h-full;
  }

  .full-screen {
    @apply relative min-h-dvh min-w-[100dvw] flex justify-center items-center;
    // .full-screen__content
    &__content {
      @apply relative grid gap-[10px] z-[3] text-white text-center justify-items-center;
    }
    // .full-screen__title
    &__title {
      @apply font-bold;
      font-size: clamp(30px, 8vw, 50px);
    }
    // .full-screen__text
    &__text {
      font-size: clamp(20px, 8vw, 35px);
    }
    // .full-screen__chevron
    &__chevron {
      @apply relative;
      @keyframes arrow {
        0% {
          top: 0;
        }
        100% {
          top: 50px;
        }
      }

      animation: arrow 1s linear alternate infinite 0s;
    }
    // .full-screen__bg
    &__bg {
      &::before {
        content: "";
        @apply full bg-black bg-opacity-70 z-[2];
      }

      & > * {
        @apply object-cover object-center;
      }
    }
  }
</style>
