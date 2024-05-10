<script setup lang="ts">
  import type { ITab } from "~/types";

  const { stackMap } = storeToRefs(useStackStore());

  const tabs = ref<ITab[]>([
    {
      index: 1,
      text: "Описание",
    },
    {
      index: 2,
      text: "Стек",
    },
    {
      index: 3,
      text: "Ссылка",
    },
  ]);
  const activeTab = ref<number>(1);

  const changeTab = (index: number) => {
    activeTab.value = index;
  };
</script>

<template>
  <div class="project">
    <NuxtLink to="/" class="project__image">
      <MyImage src="/spider-man.jpg" :quality="50" />
    </NuxtLink>
    <div class="project__tabs tabs">
      <div class="tabs__title-area">
        <button
          v-for="{ index, text } in tabs"
          :class="{ _active: index === activeTab }"
          @click="changeTab(index)"
        >
          {{ text }}
        </button>
      </div>
      <div class="tabs__body-area">
        <div v-if="activeTab === 1" class="tabs__description">
          Это был мой самый ахуенный проект
        </div>
        <StackList v-else-if="activeTab === 2" :list="stackMap.values()" />
        <div v-else class="tab__link">Ссылка: https://....</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .project {
    @apply grid;

    gap: clamp(5px, 2vw, 20px);

    @media (min-width: 1001px) {
      @apply grid-cols-[1fr,1fr] h-[500px];
    }

    @media (max-width: 1000px) {
      @apply grid-rows-[auto,auto];
    }
    // .project__image
    &__image {
      @apply relative rounded-[20px] overflow-hidden;
      & > * {
        @apply absolute top-0 left-0 w-full h-full object-cover;
      }

      @media (max-width: 1000px) {
        @apply pb-[50%];
      }
    }
    // .project__tabs
    &__tabs {
    }
  }
  .tabs {
    @apply grid grid-rows-[auto,1fr];
    // .tabs__title-area
    &__title-area {
      @apply flex;
      & > * {
        &._active {
          @apply text-red-600 border-b-red-600;
        }
        @apply flex-1 basis-auto border-b-[1px] font-semibold;

        font-size: clamp(18px, 3vw, 26px);
        padding: clamp(5px, 2vw, 10px);
      }
    }
    // .tabs__body-area
    &__body-area {
      padding-top: clamp(10px, 2vw, 20px);

      & > * {
        font-size: clamp(16px, 3vw, 25px);
      }
    }
    // .tabs__description
    &__description {
    }
    // .tabs__link
    &__link {
    }
  }
</style>
