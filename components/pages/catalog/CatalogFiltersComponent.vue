<template>
  <ClientOnly>
    <div class="filters">
      <div class="filters-row">
        <InputComponent
          @update:model-value="queryUpdate"
          v-model="form.query"
          class="filters-search"
          placeholder="Search skins..."
          small
        >
          <template #icon>
            <IconComponent name="search-normal-1" />
          </template>
        </InputComponent>
      </div>
      <div class="filters-row">
        <TabsComponent v-model="form.appid" :tabs="tabs" @update:model-value="appidUpdate" small />
        <!--        <SelectComponent-->
        <!--          class="filters-item"-->
        <!--          placeholder="Category"-->
        <!--          v-model="form.sort"-->
        <!--          :options="categories"-->
        <!--          :icon-rotate="false"-->
        <!--          clearable-->
        <!--        >-->
        <!--          <template #icon>-->
        <!--            <IconComponent name="category-2" />-->
        <!--          </template>-->
        <!--        </SelectComponent>-->
        <button @click.prevent="showFilters" class="filters-item btn btn--md btn--hollow">
          <span>Filters</span>
          <span v-if="filtersCount" class="filters-item__count">{{ filtersCount }}</span>
          <IconComponent name="setting-4" />
        </button>
        <SelectComponent
          class="filters-item"
          placeholder="Sort"
          v-model="form.sort"
          :options="sortOptions"
          :icon-rotate="false"
          clearable
          @update:model-value="setParams({})"
        >
          <template #icon>
            <IconComponent name="sort" />
          </template>
        </SelectComponent>
        <nuxt-link
          :to="{ name: 'catalog' }"
          class="filters-item filters-item--clear btn btn--md btn--dark-light no-hover"
        >
          <span>Clear</span>
          <IconComponent name="broom" />
        </nuxt-link>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, shallowRef, onMounted, watch, computed } from "vue";
import SelectComponent from "~/components/inputs/select/index.vue";
import { useDefaultStore } from "~/stores/default";
import FiltersMenu from "~/components/menus/components/FiltersMenu.vue";
import { useFiltersStore } from "~/stores/filters";
import { useRoute } from "#app";

const filtersStore = useFiltersStore();
const defaultStore = useDefaultStore();
const route = useRoute();

const tabs = [
  {
    id: 1,
    title: "CS2",
    code: defaultStore.types.appid.CS2,
    icon: {
      name: "cs2",
      category: "default",
    },
  },
  {
    id: 2,
    title: "DOTA 2",
    code: defaultStore.types.appid.DOTA2,
    icon: {
      name: "dota2",
      category: "default",
    },
  },
];

const sortOptions = [
  {
    title: "Price: Min",
    by: "price_min",
  },
  {
    title: "Price: Max",
    by: "price_max",
  },
];

let form = ref({
  sort: null,
  appid: tabs[0],
  query: null,
});

onMounted(() => {
  updateData();
});

watch(
  () => route.query,
  () => {
    updateData();
  },
  { deep: true }
);

const filtersCount = computed(() => {
  const filters = filtersStore.queryParams.filters;
  if (filters) {
    return Object.keys(filters).length;
  }
  return 0;
});

function showFilters() {
  useDefaultStore().menus.push({
    component: shallowRef(FiltersMenu),
    keepAlive: true,
  });
}

const queryDebounce = ref({});

function queryUpdate() {
  clearTimeout(queryDebounce.value);
  queryDebounce.value = setTimeout(() => {
    setParams({ query: form.value.query || null });
  }, 500);
}

function appidUpdate() {
  setParams({ filters: null, query: null, page: 1 });
  updateData();
}

function setParams(params = {}) {
  filtersStore.setParams({
    appid: form.value.appid ? form.value.appid.code : defaultStore.types.appid.CS2,
    sort: form.value.sort ? form.value.sort.by : null,
    ...params,
  });
}

function updateData() {
  const query = filtersStore.queryParams;
  form.value.appid = tabs.find((i) => i.code === query.appid) || tabs[0];
  form.value.sort = sortOptions.find((i) => i.by === query.sort) || null;
  form.value.query = query.query || undefined;
}
</script>

<style lang="stylus">
.filters {
	display flex
	flex-direction column
	gap: 20px

	&-row {
		display flex
		flex-wrap wrap
		gap: 20px

		.tabs {
			+below(440px) {
				width 100%

				&__item.btn {
					flex 1
				}
			}
		}
	}

	&-item {
		position relative

		&.btn {
			padding: 0 15px

			.icon {
				margin-left auto
			}
		}

		&.select {
			width 160px
		}

		&:not(&--clear) {
			gap: 50px
			+below(480px) {
				flex-grow 1
			}
		}

		&--clear {
			margin-left auto
			align-self flex-end
		}

		&__count {
			position absolute
			top 2px
			right 2px
			display: flex;
			width: 16px;
			height: 16px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 0.625rem
			line-height: normal;
			border-radius: 100px;
			//background: var(--gray-dark-3);
			background: var(--green-dark);
		}
	}

	&-search {
		width 100%
		max-width 536px
		+below(860px) {
			max-width 100%
		}
	}
}
</style>
