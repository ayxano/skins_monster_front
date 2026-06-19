import { defineNuxtPlugin } from "#app";
import { useLocaleStore } from "~/stores/locale";
import { useGlobalStore } from "~/stores/global";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      t: (key) => {
        const localeStore = useLocaleStore();
        return localeStore.t(key);
      },
      price: (value) => {
        if (value === undefined || value === null) return "";
        const globalStore = useGlobalStore();
        const symbol = globalStore.currencySymbol;
        if (globalStore.selectedCurrencyCode === "rub" || globalStore.selectedCurrencyCode === "rur") {
          return `${value} ${symbol}`;
        }
        return `${symbol}${value}`;
      },
      currSymbol: () => {
        const globalStore = useGlobalStore();
        return globalStore.currencySymbol;
      },
    },
  };
});
