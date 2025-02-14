<template>
  <div class="default-menu main-menu">
    <div class="default-menu__header">
      <div class="default-menu__header-top">
        <span class="default-menu__title"></span>
        <button type="button" class="default-menu__close btn" @click="$emit('close')">
          <IconComponent name="close" />
        </button>
      </div>
    </div>
    <div class="default-menu__body main-menu__body">
      <AsideNavComponent :links="links" no-menu />
      <AsideNavComponent :links="linksCabinet" no-menu />
    </div>
    <div class="default-menu__footer">
      <SocialsComponent small />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const links = [
  {
    title: "Catalog",
    route: { name: "catalog", query: { sort: "price_min" } },
    icon: "category-2",
  },
  {
    title: "About",
    route: { name: "dynamic-id", query: { "positions[]": ["about"] } },
    icon: "cpu-charge",
  },
  {
    title: "Reviews",
    route: { name: "index", hash: "#reviews" },
    icon: "message",
  },
  {
    title: "FAQ",
    route: { name: "index", hash: "#faq" },
    icon: "messages-3",
  },
  {
    title: "Cancellations & Refunds",
    route: { name: "dynamic-id", query: { "positions[]": ["cancellations_refunds"] } },
    icon: "convertshape-2",
  },
  {
    title: "Contacts",
    route: { name: "contacts" },
    icon: "sms-edit",
  },
];

const linksCabinet = computed(() => [
  {
    title: "Favorites",
    route: { name: "cabinet-favorites" },
    icon: "star",
  },
  {
    title: "Cart",
    route: { name: "checkout" },
    icon: "bag-2",
  },
  {
    title: authorized.value ? "Profile" : "Login",
    route: { name: "cabinet-profile" },
    icon: "frame-1",
  },
]);

const authorized = computed(() => {
  return authStore.user && authStore.user.id;
});
</script>

<style lang="stylus">
.main-menu {
	&__body {
		scrollbar-gutter stable
	}
}
</style>
