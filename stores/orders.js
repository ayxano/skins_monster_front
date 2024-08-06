import { defineStore } from "pinia";
import { query } from "~/utils/global";

export const useOrdersStore = defineStore({
  id: "orders",
  state: () => ({
    orders: [],
    payouts: [],
  }),
  actions: {
    async get(params = {}) {
      const { data } = await query("/orders", params);
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
    async getPayouts(params = {}) {
      const { data } = await query("/payout-orders", params);
      this.payouts = data || [];
    },
    async createPayout(variables) {
      return await query(
        "/guavapay/payout",
        {},
        {
          method: "POST",
          body: JSON.stringify(variables),
        }
      );
    },
  },
});
