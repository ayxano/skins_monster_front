import { useRoute, useRouter } from "#app";
import { defineStore } from "pinia";

export const useFiltersStore = defineStore({
  id: "filters",
  state: () => ({
    filters: {},
  }),
  getters: {
    queryParams() {
      const filters = {};
      const query = useRoute().query || {};
      Object.keys(query).forEach((key) => {
        try {
          filters[key] = JSON.parse(query[key]);
        } catch (e) {
          filters[key] = query[key];
        }
        // строковые фильтры, исключения
        // чтобы число "47" например было строкой, а не числом
        if (["query"].includes(key)) {
          filters[key] = filters[key].toString();
        }
      });
      return filters;
    },
  },
  actions: {
    setParams(params) {
      let modifiedParams = {};
      Object.keys(params).forEach((key) => {
        modifiedParams[key] = this.stringifyParam(params[key]);
      });
      useRouter().push({
        name: useRoute().name,
        params: { ...useRoute().params },
        query: { ...useRoute().query, ...modifiedParams },
      });
    },
    stringifyParam(param) {
      if (param || param === 0) {
        if (Array.isArray(param)) {
          return param.length ? JSON.stringify(param) : undefined;
        } else if (typeof param === "object") {
          return Object.keys(param).length ? JSON.stringify(param) : undefined;
        } else {
          return param;
        }
      } else {
        return undefined; // чтобы очистить поле
      }
    },
  },
});
