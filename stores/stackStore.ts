import IconGit from "~/components/Icon/IconGit.vue";
import IconStackChartJS from "~/components/Icon/Stack/IconStackChartJS.vue";
import IconStackCss from "~/components/Icon/Stack/IconStackCss.vue";
import IconStackElementPlus from "~/components/Icon/Stack/IconStackElementPlus.vue";
import IconStackHtml from "~/components/Icon/Stack/IconStackHtml.vue";
import IconStackJWT from "~/components/Icon/Stack/IconStackJWT.vue";
import IconStackJavaScript from "~/components/Icon/Stack/IconStackJavaScript.vue";
import IconStackNuxt from "~/components/Icon/Stack/IconStackNuxt.vue";
import IconStackPinia from "~/components/Icon/Stack/IconStackPinia.vue";
import IconStackSass from "~/components/Icon/Stack/IconStackSass.vue";
import IconStackTailwind from "~/components/Icon/Stack/IconStackTailwind.vue";
import IconStackTypeScript from "~/components/Icon/Stack/IconStackTypeScript.vue";
import IconStackVite from "~/components/Icon/Stack/IconStackVite.vue";
import IconStackVue from "~/components/Icon/Stack/IconStackVue.vue";
import IconStackVueAdvancedCropper from "~/components/Icon/Stack/IconStackVueAdvancedCropper.vue";
import IconStackVuetify from "~/components/Icon/Stack/IconStackVuetify.vue";
import IconStackWebpack from "~/components/Icon/Stack/IconStackWebpack.vue";
import { Stack, type IStackItem } from "~/types";

export const useStackStore = defineStore("contentStore", () => {
  const stackMap = ref<Map<Stack, IStackItem>>(
    new Map<Stack, IStackItem>([
      [
        Stack.Html,
        {
          borderColor: "#e24e25",
          caption: "HTML",
          component: IconStackHtml,
          tooltipContent: "Создаёт структура вашего сайта",
        },
      ],
      [
        Stack.Css,
        {
          borderColor: "#264DE4",
          caption: "CSS",
          component: IconStackCss,
          tooltipContent: "Привносит щепотку магии в вашу вёрстку",
        },
      ],
      [
        Stack.Sass,
        {
          borderColor: "#f095c0",
          caption: "SCSS",
          component: IconStackSass,
          tooltipContent: "Делает колдовство, более удобным занятием",
        },
      ],
      [
        Stack.Tailwind,
        {
          borderColor: "#19B2B9",
          caption: "TailwindCSS",
          component: IconStackTailwind,
          tooltipContent: "Ускоряет процесс создания стилей",
        },
      ],
      [
        Stack.JavaScript,
        {
          borderColor: "#F7DF1E",
          caption: "JavaScript",
          component: IconStackJavaScript,
          tooltipContent: "Делает вашу страниу интерактивной",
        },
      ],
      [
        Stack.TypeScript,
        {
          borderColor: "#3178C6",
          caption: "TypeScript",
          component: IconStackTypeScript,
          tooltipContent: "Делает ваш код более надёжным и поддерживаемым",
        },
      ],
      [
        Stack.Git,
        {
          borderColor: "#e24e25",
          caption: "Git",
          component: IconGit,
          tooltipContent: "Полный контроль над разработкой",
        },
      ],
      [
        Stack.Vue,
        {
          borderColor: "#41B883",
          caption: "Vue",
          component: IconStackVue,
          tooltipContent: "Ваш интуитивный фреймворк",
        },
      ],
      [
        Stack.Nuxt,
        {
          borderColor: "#00DC82",
          caption: "Nuxt",
          component: IconStackNuxt,
          tooltipContent: "Все возможности Vue и даже больше + SSR",
        },
      ],
      [
        Stack.ElementPlus,
        {
          borderColor: "#409EFF",
          caption: "ElementPlus",
          component: IconStackElementPlus,
          tooltipContent: "UI компоненты для ваших Vue/Nuxt проектов",
        },
      ],
      [
        Stack.Pinia,
        {
          borderColor: "#FFD04B",
          caption: "Pinia",
          component: IconStackPinia,
          tooltipContent: "Лучший state manager для ваших Vue/Nuxt проектов",
        },
      ],
      [
        Stack.Vuetify,
        {
          borderColor: "#1867C0",
          caption: "Vuetify",
          component: IconStackVuetify,
          tooltipContent: "Тоже UI, но больше предпочитаю ElementPlus",
        },
      ],
      [
        Stack.CropperJS,
        {
          borderColor: "#3EB37E",
          caption: "Vue Advanced Cropper",
          component: IconStackVueAdvancedCropper,
          tooltipContent: "Топовая обрезка фотографий",
        },
      ],
      [
        Stack.ChartJS,
        {
          borderColor: "#FE777B",
          caption: "ChartJS",
          component: IconStackChartJS,
          tooltipContent: "Лучшие графики для вашего приложения",
        },
      ],
      [
        Stack.VueRouter,
        {
          borderColor: "#41B883",
          caption: "Vue Router",
          component: IconStackVue,
          tooltipContent: "Навигация по вашему SPA",
        },
      ],
      [
        Stack.Vite,
        {
          borderColor: "#857AFE",
          caption: "Vite",
          component: IconStackVite,
          tooltipContent: "Прогрессивынй сборшик проектов",
        },
      ],
      [
        Stack.Webpack,
        {
          borderColor: "#1C78C0",
          caption: "Webpack",
          component: IconStackWebpack,
          tooltipContent: "Всё ещё актуальный сборшик проектов",
        },
      ],
      [
        Stack.JWT,
        {
          borderColor: "#D63AFF",
          caption: "JWT",
          component: IconStackJWT,
          tooltipContent: "Удобная авторизация",
        },
      ],
      [
        Stack.WebSocket,
        {
          borderColor: "white",
          caption: "WebSocket",
          tooltipContent: "Динамическое обновление данных",
        },
      ],
      [
        Stack.RestAPI,
        {
          borderColor: "red",
          caption: "RestAPI",
          tooltipContent: "HTTP запросы во всей красе",
        },
      ],
      [
        Stack.BAM,
        {
          borderColor: "#1C78C0",
          caption: "БЭМ",
          tooltipContent: "Методология для удобной вёрстки",
        },
      ],
    ])
  );

  return {
    stackMap,
  };
});
