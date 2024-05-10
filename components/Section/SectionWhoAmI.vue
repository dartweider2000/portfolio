<script setup lang="ts">
  const { stackMap } = storeToRefs(useStackStore());
</script>

<template>
  <div class="who">
    <div class="who__me">
      <div class="who__image">
        <MyImage src="me.png" :quality="70" />
      </div>
      <h3 class="who__hello"></h3>
    </div>
    <div class="who__description">
      <p class="who__paragraph">
        Всем привет! Меня зовут Никита, я <span>frontend-разработчик</span>, и
        моя страсть — создание сайтов и интерактивных приложений.
        Профессиональное <span>стремление к знаниям</span> и новым высотам
        движет мной каждый день. Я постоянно ищу
        <span> новые возможности</span> для совершенствования, активно работаю с
        Vue 3 и Nuxt 3, но <span> открыт к изучению новых инструментов</span>,
        если проект требует этого.
      </p>
      <p class="who__paragraph">
        Здесь вы найдете проекты, которые особенно меня вдохновили и помогли
        <span>стать лучше </span>. Разнообразие моих работ впечатляет: от
        проектов на чистых HTML, CSS и JavaScript до
        <span> сложных приложений </span> на фреймворках с использованием
        различных библиотек. Я работал над чистой вёрсткой лендингов и
        разрабатывал сложные игры с применением
        <span> паттернов проектирования </span>, а также создавал приложения с
        <span> интеграцией API </span> и авторизацией.
      </p>
    </div>
    <div class="who__stack grid">
      <h3 class="who__stack-title text-[30px] font-semibold">Мой стек</h3>
      <StackList :list="stackMap.values()" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .who {
    @apply grid items-center;

    @media (min-width: 1441px) {
      @apply grid-rows-[auto,auto] grid-cols-[600px,1fr];
    }

    @media (max-width: 1440px) {
    }

    gap: clamp(10px, 2.7vw, 40px);
    // .who__me
    &__me {
      @media (max-width: 1440px) {
        @apply justify-self-center;
      }
    }
    // .who__image
    &__image {
      @apply rounded-full overflow-hidden h-[600px] relative;

      @media (max-width: 1440px) {
        @apply justify-items-center;

        width: clamp(280px, 50vw, 500px);
        height: clamp(280px, 50vw, 500px);
      }

      & > * {
        @apply absolute top-0 left-0 w-full h-full object-cover;
        object-position: 90% center;
      }
    }
    // .who__hello
    &__hello {
    }
    // .who__description
    &__description {
      @apply grid content-start;

      gap: clamp(10px, 3vw, 20px);
    }
    // .who__paragraph
    &__paragraph {
      @apply text-justify font-medium;
      font-size: clamp(16px, 3vw, 26px);

      // &::first-line {
      text-indent: 30px;
      // }

      span {
        @apply bg-green-600 px-[5px] py-[1px];
      }
    }
    // .who__stack
    &__stack {
      @media (min-width: 1441px) {
        @apply col-span-2;
      }

      gap: clamp(5px, 2vw, 10px);
    }
    &__stack-title {
      font-size: clamp(22px, 4vw, 30px);
    }
  }
</style>
