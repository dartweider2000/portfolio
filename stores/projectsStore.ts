import type { IProject } from "~/types";

export const useProjectsStore = defineStore("projectsStore", () => {
  const projectsList = reactive<IProject[]>([]);

  return {
    projectsList,
  };
});
