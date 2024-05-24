import { defineStore } from "pinia";

export const useFavoritesStore = defineStore({
  id: "favorites",
  state: () => ({
    favorites: [],
  }),
});
