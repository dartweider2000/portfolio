import type { ComponentOptionsMixin, DefineComponent, PublicProps } from "vue";

export interface IStackItem {
  borderColor: string;
  caption: string;
  component?: DefineComponent<
    {},
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    PublicProps,
    Readonly<globalThis.ExtractPropTypes<{}>>,
    {},
    {}
  >;
  tooltipContent: string;
}

export interface IProject {
  image: string;
  stackList: IStackItem[];
  description: string;
  title: string;
  link: string;
  hash: string;
}

export enum Stack {
  Html = "Html",
  Css = "Css",
  Sass = "Sass",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  Vue = "Vu3",
  Nuxt = "Nuxt",
  Tailwind = "Tailwind",
  CropperJS = "CropperJS",
  Git = "Git",
  ElementPlus = "ElementPlus",
  ChartJS = "ChartJS",
  RestAPI = "RestAPI",
  WebSocket = "WebSocket",
  Webpack = "Webpack",
  Vite = "Vite",
  Pinia = "Pinia",
  VueRouter = "Vue Router",
  JWT = "JWT",
  BAM = "BAM",
  Vuetify = "Vuetify",
}

export interface ITab {
  index: number;
  text: string;
}
