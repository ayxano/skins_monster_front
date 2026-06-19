import { defineStore } from "pinia";
import { query } from "~/utils/global";
import { useLocaleStore } from "./locale";

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
    selectedCurrencyCode: "eur",
  }),
  getters: {
    currencySymbol(state) {
      const symbols = {
        eur: "€",
        rub: "₽",
        rur: "₽",
      };
      return symbols[state.selectedCurrencyCode] || "€";
    },
  },
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
    setCurrency(code) {
      if (["eur", "rub"].includes(code)) {
        this.selectedCurrencyCode = code;
        const cookie = useCookie("currency", { maxAge: 60 * 60 * 24 * 365 });
        cookie.value = code;
      }
    },
    initCurrency() {
      const savedCurrency = useCookie("currency").value;
      if (["eur", "rub"].includes(savedCurrency)) {
        this.selectedCurrencyCode = savedCurrency;
        return;
      }

      const localeStore = useLocaleStore();
      if (localeStore.currentLocale === "ru") {
        this.selectedCurrencyCode = "rub";
      } else {
        this.selectedCurrencyCode = "eur";
      }
    },
  },
});
