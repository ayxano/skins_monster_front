import { defineStore } from "pinia";
import { csrf, query } from "~/utils/global";
import { useBasketStore } from "~/stores/basket";
import { useFavoritesStore } from "~/stores/favorites";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  actions: {
    async get() {
      // await csrf();
      const { data } = await query("/user");
      if (data.type === "user") {
        this.user = data;
      } else {
        await this.logout();
        this.user = null;
        useBasketStore().basket_list = [];
        useFavoritesStore().favorites_list = [];
        await csrf();
      }
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
