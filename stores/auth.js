import { defineStore } from "pinia";
import { csrf, query } from "~/utils/global";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  actions: {
    async get() {
      await csrf();
      const { data } = await query("/user");
      this.user = data;
      return data;
    },
    async refill() {
      return await query("/skinpay/trade-link");
    },
    async logout() {
      return await query(
        "/logout",
        {},
        {
          method: "POST",
        }
      );
    },
  },
});
