<template>
  <header class="header" :class="{ 'header--without-search': !showSearch }">
    <nuxt-link :to="{ name: 'index' }" class="header-logo">
      <ImgComponent src="/images/logo-small.svg" class="aside__logo-img" :loader="false" />
    </nuxt-link>
    <InputComponent
      v-if="showSearch"
      class="header-search"
      v-model="search"
      placeholder="Skins search"
      icon-position="right"
    >
      <template #icon>
        <IconComponent name="search-normal-1" />
      </template>
    </InputComponent>
    <SocialsComponent class="header-socials" />
    <HeaderActionsComponent :show-search="showSearch" />
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "#app";
import { useAuthStore } from "~/stores/auth";
import { useGlobalStore } from "~/stores/global";
import { useBasketStore } from "~/stores/basket";
import { useFavoritesStore } from "~/stores/favorites";

const route = useRoute();
const search = ref("");
const authStore = useAuthStore();
const globalStore = useGlobalStore();
const basketStore = useBasketStore();
const favoritesStore = useFavoritesStore();

const showSearch = computed(() => {
  return !["catalog"].includes(route.name);
});

onMounted(() => {
  getGlobalData();
});

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
.header {
	display flex
	align-items center
	gap: 30px
	justify-content space-between
	padding: 40px 0
	+below(1024px) {
		padding: 30px 0
	}

	&--without-search {
		justify-content flex-end
	}

	&-logo {
		height 50px
		width auto
		display flex
		margin-right auto
		+above(1025px) {
			display none
		}
	}

	&-search.input {
		width 50%
		+below(1024px) {
			width	auto
			flex-grow 1
		}
		+below(720px) {
			display none
		}
	}

	&-socials.socials {
		+below(1100px) {
			display none
		}
	}
}
</style>
