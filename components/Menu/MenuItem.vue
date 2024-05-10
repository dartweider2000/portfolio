<script setup lang="ts">
  const props = defineProps<{
    to?: string;
  }>();
  const { to } = toRefs(props);

  defineSlots<{
    "sub-list": () => any;
    default: () => any;
  }>();

  const { isSidebarOpen, isMobileResolution, hashChange } = storeToRefs(
    useNavigationStore()
  );

  const isSubMenuOpen = ref<boolean>(false);

  watch([isSidebarOpen, isMobileResolution, hashChange], () => {
    isSubMenuOpen.value = false;
  });

  const changeTouchMenuOpen = ({ target }: MouseEvent) => {
    const el = target as HTMLElement;

    if (!el.closest(".menu-item__sub-list"))
      isSubMenuOpen.value = !isSubMenuOpen.value;

    if (to.value) {
      isSidebarOpen.value = false;
      isSubMenuOpen.value = false;
    }
  };
</script>

<template>
  <li
    class="menu-item"
    :class="{
      'sub-menu-item': $slots['sub-list'],
      '_mobile-click': isSubMenuOpen,
    }"
    @click="changeTouchMenuOpen"
  >
    <NuxtLink v-if="to" class="menu-item__link" :to="to">
      <slot />
    </NuxtLink>
    <button
      v-else
      class="menu-item__link grid grid-cols-[1fr,auto] gap-[5px] w-full items-center text-left"
    >
      <slot />
      <IconChevron class="menu-item__chevron" />
    </button>
    <div v-if="$slots['sub-list']" class="menu-item__sub-list">
      <slot name="sub-list"></slot>
    </div>
  </li>
</template>

<style lang="scss">
  .menu-item {
    &.sub-menu-item {
      @apply relative;

      @media (hover: hover) {
        &:hover {
          .menu-item__sub-list {
            @apply opacity-100 pointer-events-auto visible;
          }

          .menu-item__chevron {
            @apply rotate-180;
          }
        }
      }
      @media (hover: none) {
        &._mobile-click {
          .menu-item__sub-list {
            @apply opacity-100 pointer-events-auto visible;

            @media (max-width: 768px) {
              @apply block;
            }
          }

          .menu-item__chevron {
            @apply rotate-180;
          }
        }
      }
    }

    &__link {
      @apply text-[17px];

      @media (max-width: 768px) {
        @apply text-[16px];
      }
    }

    &__chevron {
      @media (min-width: 769px) {
        transition: all 0.3s ease 0s;
      }
    }
    // .menu-item__sub-list
    &__sub-list {
      @apply absolute top-[100%] left-[50%] translate-x-[-50%] w-[180px] p-[10px] bg-black rounded-[10px] opacity-0 invisible pointer-events-none;
      transition: all 0.3s ease 0s;

      @media (max-width: 768px) {
        @apply relative top-0 p-0 hidden;
      }
    }
  }
</style>
