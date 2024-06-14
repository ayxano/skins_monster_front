import { defineStore } from "pinia";
import {query} from "~/utils/global";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  actions: {
    async get() {
      const { data } = await query("/user");
      this.user = data;
    },
  }
});
