<script setup lang="ts">
  import me from "~/assets/img/me.webp";

  const { stackMap } = storeToRefs(useStackStore());
</script>

<template>
  <div class="who">
    <div class="who__me">
      <div class="who__image">
        <MyImage :src="me" loading="lazy" />
      </div>
      <h3 class="who__hello"></h3>
    </div>
    <div class="who__description">
      <p class="who__paragraph">
        Всем привет! Меня зовут Никита, я <span>frontend-разработчик</span>, и
        моя страсть — создание сайтов и интерактивных приложений. Я
        <span> люблю своё дело </span> и поэтому постоянно развиваюсь в нём:
        читаю документации, слушаю подкасты, смотрю обучающие видео и
        <span> постоянно практикуюсь </span>. Во общем стараюсь не стоять на
        месте, ведь как известро, если ты стоишь на месте, то ты движешься
        назад.
      </p>
      <p class="who__paragraph">
        Если вы попали на этот сайт, то скорее всего вы HR IT компании, которому
        (ой) в руки попалось моё резюме. Если это так, то
        <span> вы попали по адресу)</span> Этот сайт позволит вам составить
        полное впечатление обо мне как о разработчике. Здесь вы найдете проекты,
        которыми я горжусь, работа над которыми сделала меня лучше.
        <span> Проекты разнообразные:</span> от проектов на чистых HTML, CSS и
        JavaScript до сложных приложений на фреймворках с использованием
        различных библиотек. Особняком стоят 2-е игры, которые, хотя и, не
        относятся напрямую к повседневной деятельности frontend-разработчика, но
        всё-таки говорят обо мне как о человеке, который умеет не только клипать
        сайты, а знает также ООП и некоторые паттерны проектирования. Поэтому я
        решил включить их сюда.<span> Приятного просмота!</span>
      </p>
    </div>
    <div class="who__stack grid">
      <h3 class="who__stack-title text-[30px] font-semibold">Мой стек</h3>
      <StackList :list="Array.from(stackMap.values())" />
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

      gap: clamp(5px, 2vw, 20px);
    }
    // .who__paragraph
    &__paragraph {
      @apply text-justify font-medium;
      font-size: clamp(16px, 3vw, 24px);

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
