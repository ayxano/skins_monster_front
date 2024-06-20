<template>
  <div id="app">
    <div class="container-padding">
      <div class="app__inner">
        <AsideComponent />
        <div class="app__content">
          <HeaderComponent />
          <slot />
          <FooterComponent />
        </div>
      </div>
    </div>
  </div>
  <ModalsComponent />
</template>

<script setup>
import { useHead, useRoute } from "#app";
import HeaderComponent from "~/components/header/index.vue";
import FooterComponent from "~/components/footer/index.vue";
import AsideComponent from "~/components/aside/index.vue";
import { onMounted, computed, watch } from "vue";
import { useGlobalStore } from "~/stores/global";
import ModalsComponent from "~/components/modals/index.vue";
import { useAuthStore } from "~/stores/auth";
import { useBasketStore } from "~/stores/basket";
import { useFavoritesStore } from "~/stores/favorites";
import { csrf, getCookie } from "~/utils/global";

useHead({
  title: "Skins Monster - Buy CS2/Dota 2 skins",
  titleTemplate: "%s | Skins Monster",
  meta: [
    {
      name: "description",
      content:
        "Buy skins at a good price in Skins Monster, you can buy CS:GO/CS2/Dota 2 skins quickly and profitably. Skins market with a large number of CS:GO/CS2/Dota 2 items available for buy",
    },
  ],
});

const route = useRoute();
const authStore = useAuthStore();
const globalStore = useGlobalStore();
const basketStore = useBasketStore();
const favoritesStore = useFavoritesStore();

onMounted(() => {
  let token = getCookie("XSRF-TOKEN");
  if (!token) {
    csrf();
  }
  getGlobalData();
});

const fullPage = computed(() => {
  return route.meta.fullPage;
});

watch(
  () => fullPage,
  () => {
    console.log("fullpage changed");
  }
);

function getGlobalData() {
  globalStore.getCurrency();
  authStore.get();
  basketStore.get();
  favoritesStore.get();
  globalStore.getCompany();
  globalStore.getBanners();
  globalStore.getPages();
}
</script>

<style lang="stylus">
//@import "/styles/style.styl";

.app {
	&__inner {
		display grid
		grid-template-columns var(--aside-width) 1fr
		gap: 40px
		height 100%
		+below(1024px) {
			grid-template-columns 1fr
		}
	}

	&__content {
		display flex
		flex-direction column
		flex-grow 1
	}
}
</style>
