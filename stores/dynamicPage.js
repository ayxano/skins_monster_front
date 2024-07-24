import { defineStore } from "pinia";

export const useDynamicPageStore = defineStore({
  id: "dynamic-page",
  state: () => ({
    page: {},
    advantages: [],
    payments: [],
  }),
});
