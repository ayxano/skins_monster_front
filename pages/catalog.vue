<template>
  <main class="page catalog-page">
    <div class="page__inner catalog-page__inner">
      <BreadcrumbsComponent title="Catalog" subtitle="1,080" />
      <div class="catalog-page__content">
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
import { useRoute, useRouter } from "#app";
import { useCatalogStore } from "~/stores/catalog";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
// import queryString from "query-string";

const meta = ref({
  page: 1,
  first: 16,
});

const catalogStore = useCatalogStore();
const route = useRoute();
const router = useRouter();
const pageLoading = ref(true);
const filterLoading = ref(false);

onMounted(() => {
  parseParams();
  get();
});

watch(
  () => route.query,
  () => {
    console.log("watch query changed", route.query);
    // parseParams();
    get();
  }
);

const routeQuery = computed(() => {
  if (process.client) {
    // console.log("routeQuery", queryString.parse(location.search));
    // return queryString.parse(location.search);
    return route.query;
  }
  return {};
});

const data = computed(() => {
  return catalogStore.skins || {};
});

async function get() {
  // const qs = queryString.stringify({
  //   page: meta.value.page,
  //   limit: meta.value.first,
  //   filters: { type: ["Agent"] },
  // });
  //
  // console.log("qs", qs);
  // console.log("routeQuery.value", routeQuery.value);

  try {
    await catalogStore.get({
      ...routeQuery.value,
      page: meta.value.page,
      limit: meta.value.first,
    });
  } finally {
    pageLoading.value = false;
  }
}

function paginate(page) {
  meta.value.page = page;
  setParams();
}

function parseParams() {
  meta.value.page = routeQuery.value.page || 1;
}

function setParams() {
  const params = {
    // appid: 730,
    // query: "redline",
    filters: [{ filter: "value" }],
    page: meta.value.page,
  };
  router.push({ name: "catalog", query: params });
  console.log("setParams", params);
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
