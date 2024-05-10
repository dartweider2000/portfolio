import { Stack, type IStackItem } from "~/types";

import html from "~/assets/icons/html.svg";
import css from "~/assets/icons/css.svg";
import chartjs from "~/assets/icons/chartjs.svg";
import elementPlus from "~/assets/icons/element-plus.svg";
import git from "~/assets/icons/git.svg";
import javascript from "~/assets/icons/javascript.svg";
import jwt from "~/assets/icons/jwt.svg";
import nuxt from "~/assets/icons/nuxt.svg";
import pinia from "~/assets/icons/pinia.svg";
import sass from "~/assets/icons/sass.svg";
import swiper from "~/assets/icons/swiper.svg";
import tailwind from "~/assets/icons/tailwind.svg";
import typescript from "~/assets/icons/typescript.svg";
import vite from "~/assets/icons/vite.svg";
import vueAdvancedCropper from "~/assets/icons/vue-advances-cropper.svg";
import vue from "~/assets/icons/vue.svg";
import vuetify from "~/assets/icons/vuetify.svg";
import webpack from "~/assets/icons/webpack.svg";

export const useStackStore = defineStore("contentStore", () => {
  const stackMap = ref(
    new Map<Stack, IStackItem>([
      [
        Stack.Html,
        {
          borderColor: "#e24e25",
          caption: "HTML",
          icon: html,
          tooltipContent: "Создаёт структура вашего сайта",
        },
      ],
      [
        Stack.Css,
        {
          borderColor: "#264DE4",
          caption: "CSS",
          icon: css,
          tooltipContent: "Привносит щепотку магии в вашу вёрстку",
        },
      ],
      [
        Stack.Sass,
        {
          borderColor: "#f095c0",
          caption: "SCSS",
          icon: sass,
          tooltipContent: "Делает колдовство, более удобным занятием",
        },
      ],
      [
        Stack.Tailwind,
        {
          borderColor: "#19B2B9",
          caption: "TailwindCSS",
          icon: tailwind,
          tooltipContent: "Ускоряет процесс создания стилей",
        },
      ],
      [
        Stack.JavaScript,
        {
          borderColor: "#F7DF1E",
          caption: "JavaScript",
          icon: javascript,
          tooltipContent: "Делает вашу страниу интерактивной",
        },
      ],
      [
        Stack.TypeScript,
        {
          borderColor: "#3178C6",
          caption: "TypeScript",
          icon: typescript,
          tooltipContent: "Делает ваш код более надёжным и поддерживаемым",
        },
      ],
      [
        Stack.Git,
        {
          borderColor: "#e24e25",
          caption: "Git",
          icon: git,
          tooltipContent: "Полный контроль над разработкой",
        },
      ],
      [
        Stack.Vue,
        {
          borderColor: "#41B883",
          caption: "Vue",
          icon: vue,
          tooltipContent: "Ваш интуитивный фреймворк",
        },
      ],
      [
        Stack.Nuxt,
        {
          borderColor: "#00DC82",
          caption: "Nuxt",
          icon: nuxt,
          tooltipContent: "Все возможности Vue и даже больше + SSR",
        },
      ],
      [
        Stack.ElementPlus,
        {
          borderColor: "#409EFF",
          caption: "ElementPlus",
          icon: elementPlus,
          tooltipContent: "UI компоненты для ваших Vue/Nuxt проектов",
        },
      ],
      [
        Stack.Pinia,
        {
          borderColor: "#FFD04B",
          caption: "Pinia",
          icon: pinia,
          tooltipContent: "Лучший state manager для ваших Vue/Nuxt проектов",
        },
      ],
      [
        Stack.Vuetify,
        {
          borderColor: "#1867C0",
          caption: "Vuetify",
          icon: vuetify,
          tooltipContent: "Тоже UI, но больше предпочитаю ElementPlus",
        },
      ],
      [
        Stack.CropperJS,
        {
          borderColor: "#3EB37E",
          caption: "Vue Advanced Cropper",
          icon: vueAdvancedCropper,
          tooltipContent: "Топовая обрезка фотографий",
        },
      ],
      [
        Stack.ChartJS,
        {
          borderColor: "#FE777B",
          caption: "ChartJS",
          icon: chartjs,
          tooltipContent: "Лучшие графики для вашего приложения",
        },
      ],
      [
        Stack.VueRouter,
        {
          borderColor: "#41B883",
          caption: "Vue Router",
          icon: vue,
          tooltipContent: "Навигация по вашему SPA",
        },
      ],
      [
        Stack.Vite,
        {
          borderColor: "#857AFE",
          caption: "Vite",
          icon: vite,
          tooltipContent: "Прогрессивынй сборшик проектов",
        },
      ],
      [
        Stack.Webpack,
        {
          borderColor: "#1C78C0",
          caption: "Webpack",
          icon: webpack,
          tooltipContent: "Всё ещё актуальный сборшик проектов",
        },
      ],
      [
        Stack.JWT,
        {
          borderColor: "#D63AFF",
          caption: "JWT",
          icon: jwt,
          tooltipContent: "Удобная авторизация",
        },
      ],
      [
        Stack.Swiper,
        {
          borderColor: "#0080FF",
          caption: "Swiper",
          icon: swiper,
          tooltipContent: "Лучший слайдер",
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
      [
        Stack.OOP,
        {
          borderColor: "#FFD04B",
          caption: "ООП",
          tooltipContent: "Классная парадигма программирования",
        },
      ],
    ])
  );

  const getStackListByKeys = (keyList: Stack[]): IStackItem[] => {
    return Array.from(stackMap.value.entries())
      .filter(([key, _]) => keyList.includes(key))
      .map(([_, value]) => value);
  };

  return {
    stackMap,
    getStackListByKeys,
  };
});
