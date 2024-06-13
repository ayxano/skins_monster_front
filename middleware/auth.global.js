import { abortNavigation, defineNuxtRouteMiddleware } from "#app";
import { useAuthStore } from "~/stores/auth";
import { useDefaultStore } from "~/stores/default";
import { shallowRef } from "vue";
import { getCookie, query } from "~/utils/global";
import AuthModal from "~/components/modals/components/AuthModal.vue";

function checkRoute(user) {
  if (!user) {
    if (process.client) {
      useDefaultStore().modals.push({
        component: shallowRef(AuthModal),
      });
    }
    return abortNavigation({
      code: 403,
      message: "No access",
    });
  }
}

export default defineNuxtRouteMiddleware(async (to) => {
  if (process.client) {
    let user = useAuthStore().user;
    console.log("user", user);

    if (to.meta?.authRequired) {
      console.log("auth required");
      if (user) {
        return checkRoute(user);
      } else {
        try {
          const { data } = await query("/user");
          useAuthStore().user = data;
          return checkRoute(data);
        } catch (e) {
          console.error("Error while getting user", e);
          return checkRoute(null);
        }
      }
    }
  }
});
