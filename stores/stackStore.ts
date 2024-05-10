import IconStackHtml from "~/components/Icon/Stack/IconStackHtml.vue";
import { Stack, type IStackItem } from "~/types";

export const useStackStore = defineStore("contentStore", () => {
  const stackMap = ref<Map<Stack, IStackItem>>(
    new Map<Stack, IStackItem>([
      [
        Stack.Html,
        {
          borderColor: "red",
          caption: "HTML",
          component: IconStackHtml,
          tooltipContent: "Создаёт структура вашего сайта",
        },
      ],
      [
        Stack.Css,
        {
          borderColor: "red",
          caption: "HTML",
          component: IconStackHtml,
          tooltipContent: "Создаёт структура вашего сайта",
        },
      ],
    ])
  );

  return {
    stackMap,
  };
});
