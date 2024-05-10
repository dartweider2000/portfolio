export const useNavigationStore = defineStore("navigationStore", () => {
  const isMobileResolution = ref<boolean>(false);
  const isSidebarOpen = ref<boolean>(false);
  const hashChange = ref<number>(0);

  onMounted(() => {
    // const mobileMatchMedia = matchMedia("(max-width: 768px)");
    // const matchMediaChangeHandler = () => {
    //   isMobileResolution.value = mobileMatchMedia.matches;
    //   if (!isMobileResolution.value) isSidebarOpen.value = false;
    // };
    // matchMediaChangeHandler();
    // mobileMatchMedia.addEventListener("change", matchMediaChangeHandler);
  });

  return {
    isMobileResolution,
    isSidebarOpen,
    hashChange,
  };
});
