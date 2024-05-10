<script setup lang="ts">
  import { useNavigationStore } from "~/stores/navigationStore";

  const { isMobileResolution, isSidebarOpen } = storeToRefs(
    useNavigationStore()
  );

  const show = ref<boolean>(false);

  onMounted(() => {
    show.value = true;
  });
</script>

<template>
  <Transition name="header" appear>
    <header
      v-show="show"
      class="fixed top-0 left-0 w-full py-[10px] bg-[--header-red] z-[99999999999999]"
    >
      <MainContainer
        class="grid grid-cols-[auto,1fr] items-center text-[white]"
      >
        <NuxtLink to="#greeting" class="text-[25px] font-bold">Nekit</NuxtLink>
        <MenuBurger
          v-if="isMobileResolution"
          v-model="isSidebarOpen"
          class="justify-self-end"
        />
        <MenuNavigation v-else />
      </MainContainer>
      <Teleport v-if="isMobileResolution" to="body">
        <MenuSidebar v-model="isSidebarOpen" />
      </Teleport>
    </header>
  </Transition>
</template>

<style scoped lang="scss">
  .header-enter-from {
    opacity: 0;
  }

  .header-enter-active {
    transition: all 0.4s ease 0s;
  }
</style>
