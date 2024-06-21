<template>
  <main class="page catalog-page">
    <div class="page__inner catalog-page__inner">
      <BreadcrumbsComponent title="Catalog" subtitle="1,080" />
      <div class="catalog-page__content">
        meta{{ meta }}
        <CatalogFiltersComponent />
        <LoadingCircleIndicator v-if="pageLoading" />
        <SkinsListComponent :list="data.items" />
        <PaginationComponent @change="paginate" :page="meta.page" :meta="meta" :total="data.total" />
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

onMounted(() => {
  updateData();
  get();
});

watch(
  () => route.query,
  () => {
    updateData();
    get();
  }
);

const data = computed(() => {
  return catalogStore.skins || {};
});

async function get() {
  try {
    await catalogStore.get({
      page: meta.value.page,
      limit: meta.value.first,
      appid: defaultStore.types.appid.CS2,
      ...route.query,
    });
  } finally {
    pageLoading.value = false;
  }
}

function paginate(page) {
  meta.value.page = page;
  setParams();
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
	&__content {
		display flex
		flex-direction column
		gap: var(--gap)
	}
}
</style>
