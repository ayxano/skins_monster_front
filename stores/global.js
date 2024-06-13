import { defineStore } from "pinia";

/**
 * store для глобальных данных
 */
export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    currencies: [],
  }),
});
