<script setup lang="ts">
  import type { IProject, ITab } from "~/types";

  const props = defineProps<Omit<IProject, "hash" | "title">>();
  const { description, image, link, stackList } = toRefs(props);

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
    <a target="_blank" :href="link" class="project__image">
      <MyImage :src="image" loading="lazy" />
    </a>
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
      <div class="tabs__body-area overflow-hidden grid content-start">
        <div v-if="activeTab === 1" class="tabs__description">
          {{ description }}
        </div>
        <StackList v-else-if="activeTab === 2" :list="stackList" />
        <ElScrollbar v-else class="tab__link pb-[15px]">
          <a
            target="_blank"
            class="p-[10px] inline-block bg-green-500 font-bold rounded-[5px] overflow-ellipsis whitespace-nowrap"
            :href="link"
            >{{ link }}</a
          >
        </ElScrollbar>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .project {
    @apply grid;

    gap: clamp(5px, 2vw, 20px);

    @media (min-width: 1201px) {
      @apply grid-cols-[1fr,650px] h-[600px];
    }

    @media (max-width: 1200px) {
      @apply grid-rows-[auto,auto];
    }
    // .project__image
    &__image {
      @apply relative rounded-[20px] overflow-hidden;
      & > * {
        @apply absolute top-0 left-0 w-full h-full object-cover;
      }

      @media (max-width: 1200px) {
        @apply pb-[50%];
      }

      @media (max-width: 768px) {
        @apply pb-[70%];
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
        font-size: clamp(16px, 3vw, 23px);
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
