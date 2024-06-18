<template>
  <ClientOnly>
    <div class="filters">
      <div class="filters-row">
        <InputComponent v-model="form.query" class="filters-search" placeholder="Search skins..." small>
          <template #icon>
            <IconComponent name="search-normal-1" />
          </template>
        </InputComponent>
      </div>
      <div class="filters-row">
        <TabsComponent v-model="form.appid" :tabs="tabs" small />
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
        <button class="filters-item btn btn--md btn--hollow">
          <span>Filters</span>
          <IconComponent name="setting-4" />
        </button>
        <SelectComponent
          class="filters-item"
          placeholder="Sort"
          v-model="form.sort"
          :options="sortOptions"
          :icon-rotate="false"
          clearable
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
import { ref, computed } from "vue";
import SelectComponent from "~/components/inputs/select/index.vue";

const tabs = [
  {
    id: 1,
    title: "CS2",
    icon: {
      name: "cs2",
      category: "default",
    },
  },
  {
    id: 2,
    title: "DOTA 2",
    icon: {
      name: "dota2",
      category: "default",
    },
  },
];

const sortOptions = [
  {
    title: "Price asc",
    sort: "price_min",
  },
  {
    title: "Price desc",
    sort: "price_max",
  },
];

let form = ref({
  sort: null,
  appid: tabs[0],
  query: null,
});

const categories = computed(() => {
  return [];
});
</script>

<style lang="stylus">
.filters {
	display flex
	flex-direction column
	gap: 20px

	&-row {
		display flex
		gap: 20px
	}

	&-item {
		&.btn {
			padding: 0 15px
		}

		&:not(&--clear) {
			gap: 50px
		}

		&--clear {
			margin-left auto
			align-self flex-end
		}
	}

	&-search {
		width 100%
		max-width 536px
	}
}
</style>
