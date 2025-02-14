<template>
  <main class="page skin-page">
    <div class="page__inner">
      <BreadcrumbsComponent :title="routeQuery.hash_name" :links="breadcrumbs" />
      <LoadingCircleIndicator v-if="pageLoading" />
      <div v-else-if="data && data.id" class="skin-page__content">
        <SkinPagePreviewComponent
          :data="data"
          :add-to-favorites="addToFavorites"
          :in-cart="inCart"
          :in-favorites="inFavorites"
          :favorites-loading="favoritesLoading"
          :float="skinFloat"
        />
        <SkinPageAsideComponent
          :data="data"
          :add-to-favorites="addToFavorites"
          :in-cart="inCart"
          :in-favorites="inFavorites"
          :favorites-loading="favoritesLoading"
          :float="skinFloat"
        />
      </div>
      <div v-else class="skin-page__content">Item not found</div>
      <!--      <SkinsListComponent title="Similar items" :list="similar_skins" row />-->
      <!--      <SkinsListComponent title="Recommended Gloves" :list="similar_skins" row />-->
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "#app";
import { isCS2, query, showAuthModal } from "~/utils/global";
import { useAuthStore } from "~/stores/auth";
import { useBasketStore } from "~/stores/basket";
import { useFavoritesStore } from "~/stores/favorites";
// import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { useDefaultStore } from "~/stores/default";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";

const route = useRoute();
let data = ref({});
const defaultStore = useDefaultStore();
const authStore = useAuthStore();
const basketStore = useBasketStore();
const favoritesStore = useFavoritesStore();
const favoritesLoading = ref(false);
const pageLoading = ref(true);

const breadcrumbs = [
  {
    title: "Catalog",
    route: { name: "catalog", query: { sort: "price_min" } },
  },
];

const exteriors = {
  "Factory New": {
    short: "FN",
    range: "",
  },
  "Minimal Wear": {
    short: "MW",
    range: "",
  },
  "Field-Tested": {
    short: "FT",
    range: "",
  },
  "Well-Worn": {
    short: "WW",
    range: "",
  },
  "Battle-Scarred": {
    short: "BS",
    range: "",
  },
};

const inCart = computed(() => {
  return basketStore.basket
    .filter((i) => i)
    .map((i) => i.id)
    .includes(data.value.id);
});

const inFavorites = computed(() => {
  return favoritesStore.favorites.map((i) => i.id).includes(data.value.id);
});

const skinFloat = computed(() => {
  if (isCS2(data.value)) {
    const exterior = data.value.tags.find((item) => item.category === "Exterior")?.name;
    return { value: data.value?.extra?.paintwear, shortName: exterior ? exteriors[exterior].short : "" };
  }
  return {};
});

async function addToFavorites() {
  if (authStore.user) {
    favoritesLoading.value = true;
    if (!inFavorites.value) {
      await favoritesStore.add(data.value);
    } else {
      await favoritesStore.delete(data.value.id);
    }
    favoritesLoading.value = false;
  } else {
    showAuthModal();
  }
}

onMounted(() => {
  get();
});

const routeQuery = computed(() => {
  return route.query || {};
});

async function get() {
  try {
    data.value = await query("/skin", {
      ...routeQuery.value,
      hash_name: decodeURIComponent(routeQuery.value.hash_name),
    });
  } finally {
    pageLoading.value = false;
  }
}
</script>

<style lang="stylus">
.skin-page {
	&__content {
		display grid
		grid-template-columns 6fr minmax(300px, 4fr)
		grid-gap var(--gap)
		+below(720px) {
			grid-template-columns 1fr
		}
	}
}
</style>
