import { defineStore } from "pinia";
import { convertPrice, marginPrice, query } from "~/utils/global";

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
      parseFloat(
        state.basket
          .reduce((acc, item) => {
            return acc + marginPrice(convertPrice(item.price));
          }, 0)
          .toFixed(2)
      ),
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
