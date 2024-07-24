<template>
  <header class="header" :class="{ 'header--without-search': !showSearch }">
    <nuxt-link :to="{ name: 'index' }" class="header-logo">
      <ImgComponent src="/images/logo-small.svg" class="aside__logo-img" :loader="false" />
    </nuxt-link>
    <div v-click-outside="clickOutside" class="header-search__wrap">
      <InputComponent
        v-if="showSearch"
        class="header-search"
        v-model="search"
        placeholder="Skins search"
        icon-position="right"
        @update:model-value="handleSearchInput"
        @focus="dropdownVisible = true"
      >
        <template #icon>
          <IconComponent name="search-normal-1" />
        </template>
      </InputComponent>
      <HeaderSearchDropdownComponent
        :results="results"
        :title="search"
        :loading="searchLoading"
        :visible="dropdownVisible"
        @get="getSkins"
      />
    </div>
    <SocialsComponent class="header-socials" />
    <HeaderActionsComponent :show-search="showSearch" />
  </header>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "#app";
import { useAuthStore } from "~/stores/auth";
import { useGlobalStore } from "~/stores/global";
import { useBasketStore } from "~/stores/basket";
import { useFavoritesStore } from "~/stores/favorites";
import { query } from "~/utils/global";

const route = useRoute();
const authStore = useAuthStore();
const globalStore = useGlobalStore();
const basketStore = useBasketStore();
const favoritesStore = useFavoritesStore();
const search = ref("");
const results = ref([]);
const searchDebounce = ref({});
const searchLoading = ref(false);
const dropdownVisible = ref(false);

const showSearch = computed(() => {
  return !["catalog"].includes(route.name);
});

onMounted(() => {
  getGlobalData();
});

watch(
  () => route.fullPath,
  () => {
    dropdownVisible.value = false;
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

function clickOutside() {
  dropdownVisible.value = false;
}

function handleSearchInput() {
  searchLoading.value = true;
  clearTimeout(searchDebounce.value);
  searchDebounce.value = setTimeout(() => {
    getSkins();
  }, 500);
}

async function getSkins() {
  const { items } = await query("/skins", {
    limit: 4,
    page: 1,
    query: search.value,
  });
  results.value = items || [];
  searchLoading.value = false;
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

	&-search__wrap {
		position relative
		width 50%
		display flex
		+below(1300px) {
			width	auto
			flex-grow 1
		}
		+below(720px) {
			display none
		}
	}

	&-search.input {
		width 100%
		+below(1024px) {
			width	auto
			flex-grow 1
		}
	}

	&-socials.socials {
		+below(1200px) {
			display none
		}
	}
}
</style>
