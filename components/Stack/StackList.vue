<script setup lang="ts">
  import type { IStackItem } from "~/types";

  defineProps<{
    list: IStackItem[];
  }>();
</script>

<template>
  <div class="who__stack-body flex flex-wrap gap-[10px]">
    <StackItem
      v-for="{ borderColor, caption, icon, tooltipContent } in list"
      :border-color="borderColor"
      :caption="caption"
      :tooltip-content="tooltipContent"
      :icon="icon"
    />
  </div>
</template>

<style scoped lang="scss"></style>
