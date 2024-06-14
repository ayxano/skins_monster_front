<template>
  <main class="page cabinet-page">
    <div class="page__inner">
      <BreadcrumbsComponent :title="activePage.title" />
      <div class="cabinet-page__content">
        <NuxtPage />
        <AsideNavComponent :links="pages" no-menu />
      </div>
      <SkinsListComponent v-if="activePage.favorites" title="Favorites" :list="favorites.slice(0, 4)" row />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "#app";
import { useFavoritesStore } from "~/stores/favorites";

// eslint-disable-next-line no-undef
definePageMeta({
  authRequired: true,
});

const route = useRoute();
const favoritesStore = useFavoritesStore();

const pages = [
  {
    title: "Profile",
    icon: "3d-rotate",
    route: { name: "cabinet-profile" },
    favorites: true,
    banner: true,
  },
  {
    title: "Settings",
    icon: "money-send",
    route: { name: "cabinet-settings" },
    favorites: false,
    banner: true,
  },
  {
    title: "Orders",
    icon: "receipt-item",
    route: { name: "cabinet-orders" },
    favorites: false,
    banner: true,
  },
  {
    title: "Favorites",
    icon: "messages-3",
    route: { name: "cabinet-favorites" },
    favorites: false,
    banner: true,
  },
];

const activePage = computed(() => {
  return pages.find((item) => route.name.includes(item.route.name)) || pages[0];
});

const favorites = computed(() => favoritesStore.favorites || []);
</script>

<style lang="stylus">
.cabinet-page {
	&__content {
		display grid
		//grid-template-columns 820fr minmax(220px, 246px)
		grid-template-columns 820fr minmax(220px, 246fr)
		grid-gap var(--gap)
		+below(900px) {
			display flex
			flex-direction column-reverse
		}
	}
}
</style>
