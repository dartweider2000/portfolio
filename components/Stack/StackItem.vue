<script setup lang="ts">
  defineProps<{
    borderColor: string;
    tooltipContent: string;
    caption: string;
  }>();

  defineSlots<{
    default: () => any;
  }>();
</script>

<template>
  <ElTooltip :content="tooltipContent">
    <div
      class="stack inline-flex gap-[5px] items-center border-[1px] rounded-[50px]"
      :style="{ 'border-color': borderColor }"
    >
      <div v-if="$slots.default" class="stack__icon">
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
