import { defineStore } from "pinia";
import { query } from "~/utils/global";

export const useFavoritesStore = defineStore({
  id: "favorites",
  state: () => ({
    favorites_list: [],
  }),
  getters: {
    favorites(state) {
      return state.favorites_list.filter((i) => i && i.id);
    },
  },
  actions: {
    async get() {
      const { items } = await query("/favorite");
      this.favorites_list = items;
    },
    async add(data) {
      let variables = {};
      variables.skin_id = data.id;
      variables.app_id = data.appid;
      variables.hash_name = data.hash_name;
      await query(
        "/favorite",
        {},
        {
          method: "POST",
          body: JSON.stringify(variables),
        }
      );
      await this.get();
    },
    async delete(id) {
      await query(
        "/favorite/" + id,
        {},
        {
          method: "DELETE",
        }
      );
      await this.get();
    },
  },
});
