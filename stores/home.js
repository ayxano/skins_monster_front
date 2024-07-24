import { defineStore } from "pinia";

export const useHomeStore = defineStore({
  id: "home",
  state: () => ({
    welcome_banners: [],
    popular_skins: [],
    advantages: [],
    faqCategories: [],
    reviews: [],
    payments: [],
  }),
});
