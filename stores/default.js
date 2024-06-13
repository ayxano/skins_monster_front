import { defineStore } from "pinia";

export const useDefaultStore = defineStore({
  id: "default",
  state: () => ({
    HOST_ENDPOINT: process.env.HOST_ENDPOINT,
    MEDIA_ENDPOINT: process.env.MEDIA_ENDPOINT,
    modals: [],
    types: {
      appid: {
        CS2: 730,
        DOTA2: 570,
      },
    },
    loading: [],
  }),
});
