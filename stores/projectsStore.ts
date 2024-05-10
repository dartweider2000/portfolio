import { Stack, type IProject } from "~/types";

export const useProjectsStore = defineStore("projectsStore", () => {
  const { getStackListByKeys } = useStackStore();

  const projectsList = ref<IProject[]>([
    {
      title: "Funiro",
      description:
        "Данный landing примечателен большим количеством слайдеров на нём. Первый слайдер имеет достаточно необычную форму и было непросто установить его в данное положение. Второй и третий более стандартные и не вызвали затруднений, а вот с галлереей пришлось повозиться.",
      hash: "landing-funiro",
      link: "https://dartweider2000.github.io/Funiro/",
      image: "funiro.png",
      stackList: getStackListByKeys([
        Stack.BAM,
        Stack.Html,
        Stack.Css,
        Stack.Sass,
        Stack.JavaScript,
        Stack.Webpack,
        Stack.Git,
        Stack.Swiper,
      ]),
    },
    {
      title: "Relives",
      description:
        "Данный landing содержит множество колонок, а также интересный header, который изменяет свой размер при движении.",
      hash: "landing-relives",
      link: "https://dartweider2000.github.io/relives/",
      image: "relives.png",
      stackList: getStackListByKeys([
        Stack.BAM,
        Stack.Html,
        Stack.Css,
        Stack.Sass,
        Stack.JavaScript,
        Stack.Webpack,
        Stack.Git,
      ]),
    },
    {
      title: "Змейка",
      description:
        "Данная программа была сделана мной просто так, для души) Игра написана полностью на TypeScript, а проект я собирал с помощью Webpack. Вся графика в игре реализуется в элементе Canvas. В данной игре нет меню, есть только сам gameplay за змейку, а также подсчёт очков. После смерти приходится самому обновлять страницу. Но в целом игра классная.",
      hash: "snake",
      link: "https://dartweider2000.github.io/Snake/dist",
      image: "snake.png",
      stackList: getStackListByKeys([
        Stack.Html,
        Stack.Css,
        Stack.Sass,
        Stack.TypeScript,
        Stack.OOP,
        Stack.Webpack,
        Stack.Git,
      ]),
    },
    {
      title: "World of Танчики",
      description:
        "Эта игра, в отличии от змейки, полная. В игре доступен однопользовательскай режим, а также можно играть вместе с боевым товарищем. Доступен 31 уровень. Каждый игрок в бою может подбирать бонусы и прокачивать свой танк (как и в оригинальной игре доступно 4 уровня прокачки). После боя выводится статистика, сколько танков уничтожил каждый из игроков. Также стоит отметить, что в данной игре есть музыкальное сопровождение, что благоприятно сказывается на боевом духе игрока). ",
      hash: "tanks",
      link: "https://dartweider2000.github.io/Tanks_TS/dist",
      image: "tanks.png",
      stackList: getStackListByKeys([
        Stack.Html,
        Stack.Css,
        Stack.Sass,
        Stack.TypeScript,
        Stack.OOP,
        Stack.Webpack,
        Stack.Git,
      ]),
    },
    {
      title: "Диф. ураввнения",
      description:
        "В программе заданы несколько диф. уравнений, и программа предлагает нам фнукционал для численного решения данных уравнений (решение задачи Коши, где заданы начальные условия). В результате, после того как программа посчитает все точки, на экран будет выведен график. Как показано на картинке, есть возможность навести курсор на график и узнать координаты конкретной точки. Что интересно, так это то, что график адаптивный и вся программа полностью адаптивна, вне зависимости от размеров экрана всё отображается корректно. Отмечу, что в проекте не было использовано библиотек для работы с графиками, всё делалось 'ручками' прямо на канвасе.",
      hash: "dif",
      link: "https://dartweider2000.github.io/dif-methods/dist",
      image: "dif.png",
      stackList: getStackListByKeys([
        Stack.Html,
        Stack.Css,
        Stack.Sass,
        Stack.TypeScript,
        Stack.OOP,
        Stack.Webpack,
        Stack.Git,
      ]),
    },
    {
      title: "Binance App",
      description:
        "Приложение для любителей криптобирж)Здесь на главной странице вы можете выбрать валютную пару, по которой ходите получить биржевой стакан. После выбора, высветиться лог, о том, что вы поменяли валютную пару, в нём буде: дата(когда поменяли) и сами пары, которые учавствовали в обене. Затем вы можжете отслживать изменения биржевого стакана. Данные обновляются по WebSocket.",
      hash: "binance-app",
      link: "https://dartweider2000.github.io/binance-app/",
      image: "binance-app.png",
      stackList: getStackListByKeys([
        Stack.Html,
        Stack.Css,
        Stack.Sass,
        Stack.TypeScript,
        Stack.Vue,
        Stack.Vite,
        Stack.VueRouter,
        Stack.Vuetify,
        Stack.WebSocket,
        Stack.Pinia,
        Stack.Tailwind,
        Stack.RestAPI,
        Stack.BAM,
        Stack.Git,
      ]),
    },
    {
      title: "Video Recording",
      description:
        "В данном приложениии вы можете снимать себя на веб-камеру. Обязательно дайте разрешение на использование видеокамры, иначе ничего не выйдет. Можете делать это на ноутбуке или на телефоне. Несмотря на название, вы также можете делать и фотографии. После того как сделано фото, вы можете его обрезать до нужного размера. Фото и видео можно скачать.",
      hash: "video-recording",
      link: "https://dartweider2000.github.io/video-recording/",
      image: "video-recording.png",
      stackList: getStackListByKeys([
        Stack.Html,
        Stack.Css,
        Stack.Sass,
        Stack.TypeScript,
        Stack.Vue,
        Stack.Vite,
        Stack.VueRouter,
        Stack.ElementPlus,
        Stack.Pinia,
        Stack.Tailwind,
        Stack.Git,
        Stack.CropperJS,
      ]),
    },
    {
      title: "Лендинг 3/2",
      description:
        "Лендинг для концерта рок-группы. Здесь особую сложность вызвал блок с видео. Так как нужно было сделать так, чтобы оно нормально загружалось во всех браузерах, а с этим были проблемы)",
      hash: "32band",
      link: "https://32band.ru/",
      image: "32band.png",
      stackList: getStackListByKeys([
        Stack.Html,
        Stack.Css,
        Stack.Sass,
        Stack.JavaScript,
        Stack.Webpack,
        Stack.Git,
      ]),
    },
    {
      title: "Involta IQ",
      description:
        "Приложения, в котором люди могут проходить тесты. Сайт написал на Nuxt 3 с использованием SSR-mode. Можете попробовать окунуться в мир увлекательных тесто",
      hash: "involta-iq",
      link: "https://involta.ru/iq/",
      image: "involta-iq.png",
      stackList: getStackListByKeys([
        Stack.Html,
        Stack.Css,
        Stack.Sass,
        Stack.TypeScript,
        Stack.Tailwind,
        Stack.Nuxt,
        Stack.Pinia,
        Stack.Vite,
        Stack.Git,
        Stack.BAM,
        Stack.ChartJS,
        Stack.CropperJS,
        Stack.ElementPlus,
        Stack.JWT,
        Stack.RestAPI,
      ]),
    },
  ]);

  return {
    projectsList,
  };
});
