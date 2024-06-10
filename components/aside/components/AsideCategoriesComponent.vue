<template>
  <div class="aside-categories">
    <TabsComponent v-model="activeGame" :tabs="games" small same-tabs />
    <PerfectScrollbar tag="ul" class="aside-categories__list">
      <li v-for="(item, i) in activeGame.categories" :key="i" class="aside-categories__item">
        <nuxt-link :to="{ name: 'catalog' }" class="aside-categories__item-link">{{ item.title }}</nuxt-link>
      </li>
    </PerfectScrollbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const games = [
  {
    id: 1,
    title: "CS2",
    icon: {
      name: "cs2",
      category: "default",
    },
    categories: [
      {
        title: "Gloves",
      },
      {
        title: "Heavy",
      },
      {
        title: "Knife",
      },
      {
        title: "Pistol",
      },
      {
        title: "Rifle",
      },
      {
        title: "SMG",
      },
      {
        title: "Sticker",
      },
      {
        title: "Other",
      },
    ],
  },
  {
    id: 2,
    title: "DOTA2",
    icon: {
      name: "dota2",
      category: "default",
    },
    categories: [
      {
        title: "Knife",
      },
      {
        title: "Gloves",
      },
      {
        title: "Rifle",
      },
      {
        title: "Heavy",
      },
      {
        title: "Pistol",
      },
      {
        title: "SMG",
      },
      {
        title: "Sticker",
      },
      {
        title: "Other",
      },
      {
        title: "Rifle",
      },
      {
        title: "Heavy",
      },
      {
        title: "Pistol",
      },
      {
        title: "Knife",
      },

      {
        title: "Gloves",
      },
      {
        title: "Rifle",
      },
    ],
  },
];
const activeGame = ref(games[0]);
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
