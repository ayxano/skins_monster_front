<template>
  <main class="page catalog-page" :class="{ 'catalog-page--fullpage': fullpage }">
    <div class="page__inner catalog-page__inner">
      <BreadcrumbsComponent v-if="!fullpage" title="Catalog" :subtitle="data.total" />
      <div ref="pageBody" class="catalog-page__content">
        <CatalogFiltersComponent />
        <div
          class="catalog-page__content-skins"
          :class="{ 'catalog-page__content-skins--loading': filterLoading }"
          v-if="data.items && data.items.length"
        >
          <SkinsListComponent :list="data.items" />
          <LoadingCircleIndicator class="catalog-page__filter-loading" v-if="filterLoading" title="" />
        </div>
        <LoadingCircleIndicator v-else-if="pageLoading || filterLoading" />
        <span v-else>No skins...</span>
        <PaginationComponent @change="paginate" :page="meta.page" :meta="meta" :total="data.total" />
      </div>
      <BottomPageBannerComponent v-if="!fullpage" />
    </div>
  </main>
</template>

<script setup>
import { computed, ref, onMounted, watch, provide } from "vue";
import { useRoute } from "#app";
import { useCatalogStore } from "~/stores/catalog";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { useDefaultStore } from "~/stores/default";
import { useFiltersStore } from "~/stores/filters";
import { convertPrice, unmarginPrice, scrollTo } from "~/utils/global";
import { useGlobalStore } from "~/stores/global";

// страница открыта через админку
const fullpage = computed(() => !!route.query.fullpage);
provide("fullpage", fullpage);

const meta = ref({
  page: 1,
  first: 16,
});

const globalStore = useGlobalStore();
const filtersStore = useFiltersStore();
const catalogStore = useCatalogStore();
const defaultStore = useDefaultStore();
const route = useRoute();
const pageLoading = ref(true);
const filterLoading = ref(false);
const pageBody = ref(null);

onMounted(async () => {
  updateData();
  if (route.query.fullpage) {
    getFilters();
  }
  await globalStore.getCurrency();
  await get();
  window.addEventListener("message", ({ data }) => {
    try {
      catalogStore.selectedList = JSON.parse(data);
    } catch (e) {
      catalogStore.selectedList = [];
    }
  });
});

watch(
  () => route.query,
  () => {
    filterLoading.value = true;
    updateData();
    get();
  },
  { deep: true }
);

watch(
  () => catalogStore.selectedList,
  (val) => {
    parent.postMessage(JSON.stringify(val));
  },
  { deep: true }
);

const data = computed(() => {
  return catalogStore.skins || {};
});

async function get() {
  filterLoading.value = true;
  try {
    await catalogStore.get({
      limit: meta.value.first,
      appid: defaultStore.types.appid.CS2,
      ...getModifiedQuery(),
      page: route.query.page ? parseInt(route.query.page) - 1 : 0,
      fullpage: undefined,
    });
  } finally {
    pageLoading.value = false;
    filterLoading.value = false;
  }
}

function paginate(page) {
  filterLoading.value = true;
  meta.value.page = page;
  setParams();
  setTimeout(() => {
    scrollTo(pageBody.value);
  }, 0);
}

function updateData() {
  const query = filtersStore.queryParams;
  meta.value.page = query.page || 1;
}

function getFilters() {
  filtersStore.get();
}

function setParams() {
  filtersStore.setParams({
    page: meta.value.page || 1,
  });
}

function getModifiedQuery() {
  const filters = JSON.parse(JSON.stringify(filtersStore.queryParams?.filters || {}));
  let price = filters?.price;
  if (price) {
    // почему то цену нужно указывать в копейках, даже не в рублях
    price.min = price.min ? convertPrice(unmarginPrice(price.min), "rub", "eur") * 100 : 0;
    price.max = price.max ? convertPrice(unmarginPrice(price.max), "rub", "eur") * 100 : 999999999;

    return {
      ...route.query,
      filters: JSON.stringify({ ...filters, price }),
    };
  }
  return route.query;
}
</script>

<style lang="stylus">
.catalog-page {
	&--fullpage {
		padding: 20px 0
	}

	&__content,
	&__content-skins {
		display flex
		flex-direction column
		gap: var(--gap)
		position relative
		transition opacity var(--transition)

		&--loading {
			opacity 0.7
		}
	}

	&__filter-loading {
		position absolute
		top 20px
		left 0
		right 0
		z-index 1
		justify-content center

		svg {
			width 60px
			height 60px
		}
	}

	//&__selected-list {
	//	display none
	//}
}
</style>
