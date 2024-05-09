<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      horizontal?: boolean;
    }>(),
    { horizontal: true }
  );

  const { horizontal } = toRefs(props);
</script>

<template>
  <MenuList
    class="text-[white]"
    :class="{
      'flex justify-end items-center gap-[20px]': horizontal,
      'grid gap-[20px]': !horizontal,
    }"
  >
    <MenuItem to="#greeting">Приветствие</MenuItem>
    <MenuItem to="#who-am-i">Кто я</MenuItem>
    <MenuItem>
      <template #default> Pet проекты </template>
      <template #sub-list>
        <MenuList :is-sub-menu="true">
          <MenuItem to="#landing-funiro">Лендинг Funiro</MenuItem>
          <MenuItem to="#landing-relives">Лендинг Relives</MenuItem>
          <MenuItem to="#snake">Игра змейка</MenuItem>
          <MenuItem to="#tanks">Игра танчики</MenuItem>
          <MenuItem to="#binance-app">Binance App</MenuItem>
          <MenuItem to="#video-recording">Video Recording</MenuItem>
        </MenuList>
      </template>
    </MenuItem>
    <MenuItem>
      <template #default> Рабочие проекты </template>
      <template #sub-list>
        <MenuList :is-sub-menu="true">
          <MenuItem to="#involta-iq">Involta IQ</MenuItem>
          <MenuItem to="#32band">Лендинг 3/2</MenuItem>
        </MenuList>
      </template>
    </MenuItem>
    <MenuItem to="#contacts">Контакты</MenuItem>
  </MenuList>
</template>

<style lang="scss">
  // .menu-list {
  //   @apply;
  // }
</style>
