import { defineStore } from "pinia";
import { query } from "~/utils/global";

export const useOrdersStore = defineStore({
  id: "orders",
  state: () => ({
    orders: [],
  }),
  actions: {
    async get() {
      const { data } = await query("/orders");
      this.orders = data || [];
    },
    async add(variables) {
      return await query(
        "/orders",
        {},
        {
          method: "POST",
          body: JSON.stringify(variables),
        }
      );
    },
  },
});
