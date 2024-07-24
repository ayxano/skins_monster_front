<template>
  <div class="aside-categories">
    <TabsComponent v-model="activeIndex" :tabs="games" small same-tabs label-by="index" />
    <PerfectScrollbar tag="ul" class="aside-categories__list">
      <li v-for="(item, i) in activeGame.categories" :key="i" class="aside-categories__item">
        <nuxt-link
          :to="{
            name: 'catalog',
            query: { filters: JSON.stringify({ type: [item] }), appid: appidTypes[activeGame.title] },
          }"
          class="aside-categories__item-link"
        >
          {{ item }}
        </nuxt-link>
      </li>
    </PerfectScrollbar>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useDefaultStore } from "~/stores/default";
import { useFiltersStore } from "~/stores/filters";

const defaultStore = useDefaultStore();
const filtersStore = useFiltersStore();
const activeIndex = ref(0);

onMounted(() => {
  filtersStore.get();
});

const appidTypes = computed(() => {
  return defaultStore.types.appid;
});

const games = computed(() => [
  {
    id: 1,
    title: "CS2",
    icon: {
      name: "cs2",
      category: "default",
    },
    categories: getTypes(filtersStore.filters[appidTypes.value.CS2]),
  },
  {
    id: 2,
    title: "DOTA2",
    icon: {
      name: "dota2",
      category: "default",
    },
    categories: getTypes(filtersStore.filters[appidTypes.value.DOTA2]),
  },
]);

const activeGame = computed(() => games.value[activeIndex.value]);

function getTypes(list) {
  return list && list.length ? list.find((item) => item.name === "type")?.values : [];
}
</script>

<style lang="stylus">
.aside-categories {
	padding: 15px
	width 240px
	display flex
	flex-direction column
	gap: 5px
	border-radius: var(--small-radius)
	border: 1px solid var(--gray-dark-2, #516D7D);
	background: var(--dark-light-2, #1F3B4B);
	box-shadow: 0 15px 40px 0 var(--black-o3)
	user-select: none

	.tabs {
		width 100%
	}

	&__list {
		display flex
		flex-direction column
		max-height 256px
		overflow auto
	}

	&__item {
		flex-shrink 0

		&-link {
			display flex
			padding: 5px 10px
			border-radius var(--small-radius)
			font-size: 0.875rem

			&:hover {
				background: var(--dark-light, #011D2D);
				color var(--white)
			}
		}
	}
}
</style>
