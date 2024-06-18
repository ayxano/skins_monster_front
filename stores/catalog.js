import { defineStore } from "pinia";
import { query } from "~/utils/global";

export const useCatalogStore = defineStore({
  id: "catalog",
  state: () => ({
    skins: {},
  }),
  actions: {
    async get(params = {}) {
      this.skins = await query("/skins", params);
    },
  },
});
