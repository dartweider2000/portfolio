<script setup lang="ts">
  import { useNavigationStore } from "~/stores/navigationStore";

  const { isMobileResolution, isSidebarOpen } = storeToRefs(
    useNavigationStore()
  );
</script>

<template>
  <header class="py-[10px] bg-[--header-red] relative z-[99999999999999]">
    <MainContainer class="grid grid-cols-[auto,1fr] items-center text-[white]">
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
</template>

<style scoped lang="scss"></style>
