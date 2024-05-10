<script setup lang="ts">
  import type { IStackItem } from "~/types";

  const props = defineProps<IStackItem>();
  const { borderColor, caption, component, tooltipContent } = toRefs(props);

  const visible = ref<boolean>(false);

  defineSlots<{
    default?: () => any;
  }>();
</script>

<template>
  <ElTooltip placement="top" :content="tooltipContent" :visible="visible">
    <div
      class="stack inline-flex gap-[5px] items-center border-[1px] rounded-[50px]"
      :style="{ 'border-color': borderColor }"
      @mouseenter="visible = true"
      @mouseleave="visible = false"
    >
      <div v-if="component" class="stack__icon">
        <slot />
      </div>
      <div class="stack__caption font-medium">{{ caption }}</div>
    </div>
  </ElTooltip>
</template>

<style lang="scss">
  .el-popper {
    @apply text-[14px] p-[10px] font-medium;
  }

  .stack {
    font-size: clamp(14px, 2vw, 20px);
    padding: 5px clamp(20px, 4vw, 30px);
    // .stack__icon
    &__icon {
      @apply relative;
      width: clamp(16px, 3vw, 30px);
      height: clamp(16px, 3vw, 30px);

      & > * {
        @apply absolute w-full h-full;
      }
    }
    // .stack__caption
    &__caption {
    }
  }
</style>
