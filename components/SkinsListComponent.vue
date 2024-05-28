<template>
  <div class="skins-list">
    <div v-if="title" class="skins-list__header">
      <h3 class="skins-list__title no-margin">{{ title }}</h3>
      <a class="skins-list__more" href="#">Show more</a>
    </div>
    <div class="skins-list__content">
      <SkinCardComponent v-for="(item, i) in list" :key="i" :data="item" />
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
});
</script>

<style lang="stylus">
.skins-list {
	display flex
	flex-direction column
	gap: var(--gap)

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
		gap: var(--gap)
	}
}
</style>
