import { skipHydrate } from "pinia";

export const useNavigationStore = defineStore("navigationStore", () => {
  const isMobileResolution = ref<boolean>(false);
  const isSidebarOpen = ref<boolean>(false);
  const hashChange = ref<number>(0);

  watch(isMobileResolution, () => {
    console.log(isMobileResolution.value, "mobred");
  });

  //onMounted(() => {
  const mobileMatchMedia = matchMedia("(max-width: 768px)");
  const matchMediaChangeHandler = () => {
    isMobileResolution.value = mobileMatchMedia.matches;
    if (!isMobileResolution.value) isSidebarOpen.value = false;
  };
  matchMediaChangeHandler();
  mobileMatchMedia.addEventListener("change", matchMediaChangeHandler);

  console.log("mounted");
  // });

  return {
    isMobileResolution,
    isSidebarOpen,
    hashChange,
  };
});
