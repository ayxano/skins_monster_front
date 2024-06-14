import { defineStore } from "pinia";
import { query } from "~/utils/global";

/**
 * store для глобальных данных
 */
export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    currencies: [],
  }),
  actions: {
    async getCurrency() {
      this.currencies = await query("/currency");
    },
  },
});
