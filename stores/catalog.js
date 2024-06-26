import { defineStore } from "pinia";
import { query } from "~/utils/global";

export const useCatalogStore = defineStore({
  id: "catalog",
  state: () => ({
    skins: {},
    selectedList: [], // список выбранных скинов, нужен для админки
  }),
  actions: {
    async get(params = {}) {
      this.skins = await query("/skins", params);
    },
  },
});
