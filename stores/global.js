import { defineStore } from "pinia";
import { query } from "~/utils/global";

/**
 * store для глобальных данных
 */
export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    currencies: [],
    company: {},
    bottomBanner: null,
    pages: [],
  }),
  actions: {
    async getCurrency() {
      this.currencies = await query("/currency");
    },
    async getCompany() {
      const { data } = await query("/misc/company");
      this.company = data;
    },
    async getBanners() {
      const { data } = await query("/banners", {
        first: 1,
        positions: ["bottom_page"],
      });
      if (data && data.length) {
        this.bottomBanner = data[0];
      }
    },
    async getPages() {
      const { data } = await query("/pages", {
        first: 5,
        positions: ["cancellations_refunds", "terms_of_service", "privacy_policy"],
      });
      this.pages = data;
    },
  },
});
