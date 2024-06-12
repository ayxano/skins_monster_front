<template>
  <div class="filters">
    <div class="filters-row">
      <InputComponent class="filters-search" placeholder="Search skins..." small>
        <template #icon>
          <IconComponent name="search-normal-1" />
        </template>
      </InputComponent>
    </div>
    <div class="filters-row">
      <TabsComponent v-model="activeTab" :tabs="tabs" small />
      <button class="filters-item btn btn--md btn--hollow">
        <span>Category</span>
        <IconComponent name="category-2" />
      </button>
      <button class="filters-item btn btn--md btn--hollow">
        <span>Filters</span>
        <IconComponent name="setting-4" />
      </button>
      <button class="filters-item btn btn--md btn--hollow">
        <span>Sort</span>
        <IconComponent name="sort" />
      </button>
      <button class="filters-item filters-item--clear btn btn--md btn--dark-light">
        <span>Clear</span>
        <IconComponent name="broom" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

const activeTab = ref(tabs[0]);
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
		padding: 0 15px

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
