import { defineStore } from "pinia";
// import { getCookie } from "~/utils/global";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // token: getCookie("XSRF-TOKEN"),
    user: null,
  }),
});
