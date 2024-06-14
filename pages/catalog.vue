<template>
  <main class="page catalog-page">
    <div class="page__inner catalog-page__inner">
      <BreadcrumbsComponent title="Catalog" subtitle="1,080" />
      <div class="catalog-page__content">
        <CatalogFiltersComponent />
        <SkinsListComponent :list="data" />
        <PaginationComponent @change="paginate" :page="meta.page" :meta="meta" />
      </div>
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { query } from "~/utils/global";
import { useRoute } from "#app";

const meta = ref({
  page: 1,
  total: 100,
  perPage: 16,
});

const route = useRoute();
const data = ref({});

onMounted(() => {
  get();
});

const routeQuery = computed(() => {
  return route.query || {};
});

async function get() {
  const { items } = await query("/skins", {
    ...routeQuery.value,
    limit: meta.value.perPage,
    page: meta.value.page,
  });
  data.value = items;
}

function paginate(page) {
  meta.value.page = page;
  get();
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
