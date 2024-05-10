<script setup lang="ts"></script>

<template>
  <div class="grid grid-rows-[auto,1fr] min-h-dvh overflow-hidden">
    <TheHeader />
    <div class="content">
      <TheFullscreen id="greeting" />
      <PageSection id="who-am-i">
        <template #title>Кто я</template>
        <template #default>
          <SectionWhoAmI />
        </template>
      </PageSection>
      <PageSection id="who-am-i">
        <template #title>Мой первый проект</template>
        <template #default>
          <SectionProject />
        </template>
      </PageSection>
      <TheFooter />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    & > *:nth-child(even) {
      @apply bg-[--dark-block-bg];
    }

    & > *:nth-child(odd) {
      @apply bg-[--light-block-bg];
    }
  }
</style>
