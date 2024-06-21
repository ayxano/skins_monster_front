<template>
  <main class="page catalog-page">
    <div class="page__inner catalog-page__inner">
      <BreadcrumbsComponent title="Catalog" :subtitle="data.total" />
      <div ref="pageBody" class="catalog-page__content">
        <CatalogFiltersComponent />
        <div
          class="catalog-page__content-skins"
          :class="{ 'catalog-page__content-skins--loading': filterLoading }"
          v-if="data.items && data.items.length"
        >
          <SkinsListComponent :list="data.items" />
          <PaginationComponent @change="paginate" :page="meta.page" :meta="meta" :total="data.total" />
          <LoadingCircleIndicator class="catalog-page__filter-loading" v-if="filterLoading" title="" />
        </div>
        <LoadingCircleIndicator v-else-if="pageLoading || filterLoading" />
        <span v-else>No skins...</span>
      </div>
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRoute } from "#app";
import { useCatalogStore } from "~/stores/catalog";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { useDefaultStore } from "~/stores/default";
import { useFiltersStore } from "~/stores/filters";
import { scrollTo } from "~/utils/global";

const meta = ref({
  page: 1,
  first: 16,
});

const filtersStore = useFiltersStore();
const catalogStore = useCatalogStore();
const defaultStore = useDefaultStore();
const route = useRoute();
const pageLoading = ref(true);
const filterLoading = ref(false);
const pageBody = ref(null);

onMounted(() => {
  updateData();
  get();
});

watch(
  () => route.query,
  () => {
    filterLoading.value = true;
    updateData();
    get();
  }
);

const data = computed(() => {
  return catalogStore.skins || {};
});

async function get() {
  filterLoading.value = true;
  try {
    await catalogStore.get({
      page: meta.value.page,
      limit: meta.value.first,
      appid: defaultStore.types.appid.CS2,
      ...route.query,
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

function setParams() {
  filtersStore.setParams({
    page: meta.value.page || 1,
  });
}
</script>

<style lang="stylus">
.catalog-page {
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
}
</style>
