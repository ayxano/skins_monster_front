import { defineStore } from "pinia";
import { query } from "~/utils/global";

export const useBasketStore = defineStore({
  id: "basket",
  state: () => ({
    basket_list: [],
  }),
  getters: {
    basket(state) {
      return state.basket_list.filter((i) => i && i.id);
    },
    price: (state) =>
      state.basket
        .filter((i) => i)
        .reduce((acc, item) => {
          return acc + item.price;
        }, 0),
  },
  actions: {
    async get() {
      const { items } = await query("/basket");
      this.basket_list = items || [];
    },
    async add(data) {
      let variables = {};
      variables.skin_id = data.id;
      variables.app_id = data.appid;
      variables.hash_name = data.hash_name;
      await query(
        "/basket",
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
        "/basket/" + id,
        {},
        {
          method: "DELETE",
        }
      );
      await this.get();
    },
  },
});
