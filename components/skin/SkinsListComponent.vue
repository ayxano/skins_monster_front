<template>
  <div class="skins-list" :class="{ 'skins-list--row': row }">
    <div v-if="title" class="skins-list__header">
      <h3 class="skins-list__title no-margin">{{ title }}</h3>
      <nuxt-link v-if="route" :to="route" class="skins-list__more">Show more</nuxt-link>
    </div>
    <div class="skins-list__content">
      <SkinCardComponent v-for="(item, i) in list" :key="i" :data="item" :in-row="row" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  list: {
    type: Array,
    default: () => [],
  },
  route: Object,
  row: Boolean,
});
</script>

<style lang="stylus">
main_class = '.skins-list'
.skins-list {
	display flex
	flex-direction column
	gap: var(--gap)

	&--row {
		{ main_class }__content {
			+below(540px) {
				display flex
				overflow auto
				margin: 0 calc(var(--sides-padding) * -1)
				padding: 0 var(--sides-padding)
			}
		}
	}

	&__header {
		display flex
		align-items center
		gap: 20px
		justify-content space-between
	}

	&__more {
		font-size 0.875rem
		color var(--main)
		line-height 1.1
		border-bottom 1px solid transparent

		&:hover {
			border-color var(--main)
		}
	}

	&__content {
		display grid
		grid-template-columns repeat(auto-fit, minmax(200px, auto))
		grid-template-rows 2
		//justify-content start
		gap: var(--gap)
		+below(500px) {
			grid-template-columns repeat(auto-fit, minmax(140px, auto))
			gap: 15px
		}
	}
}
</style>
