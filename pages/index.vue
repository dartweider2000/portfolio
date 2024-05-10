<script setup lang="ts">
  const { projectsList } = storeToRefs(useProjectsStore());
</script>

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
      <PageSection
        v-for="{
          hash,
          description,
          image,
          link,
          stackList,
          title,
        } in projectsList"
        :id="hash"
      >
        <template #title>{{ title }}</template>
        <template #default>
          <SectionProject
            :description="description"
            :image="image"
            :link="link"
            :stack-list="stackList"
          />
        </template>
      </PageSection>
      <TheFooter id="contacts" />
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
