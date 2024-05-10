<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <MainContainer class="footer__container">
      <div class="footer__column">
        <p>Разработано Никитой Ивановым.</p>
        <p>Все права не защищены.</p>
      </div>
      <div class="footer__column">
        <p>Можете найти меня в</p>
        <div class="flex justify-center gap-[25px]">
          <a target="_blank" href="https://t.me/dartweider2000">
            <IconTelegram />
          </a>
          <a target="_blank" href="https://github.com/dartweider2000">
            <IconGit />
          </a>
        </div>
      </div>
      <div class="footer__column footer__column_3">
        <p>
          email:
          <a
            target="_blank"
            href="mailto:nikita.ivanov574477333@gmail.com&body:Добрый день, Никита!&subject=По поводу вашего портфолио"
            >nikita.ivanov574477333@gmail.com</a
          >
        </p>
        <p>
          Телефон:
          <a target="_blank" href="tel:+79621660797">8-962-166-07-97</a>
        </p>
      </div>
    </MainContainer>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    padding: clamp(10px, 3vw, 20px) 0;
    @apply text-white;
    font-size: clamp(16px, 3vw, 18px);
    // .footer__container
    &__container {
      @apply grid;

      gap: clamp(15px, 2vw, 25px);

      @media (min-width: 1001px) {
        @apply grid-flow-col justify-between;
      }

      @media (max-width: 1000px) {
        @apply justify-items-center text-center;
      }
    }
    // .footer__column
    &__column {
      @apply grid content-start;
      gap: clamp(0px, 1vw, 10px);
      // .footer__column_3
      &_3 {
        a {
          @apply text-blue-600;
        }
      }
    }
  }
</style>
