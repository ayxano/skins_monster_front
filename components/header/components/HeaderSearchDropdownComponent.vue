<template>
  <div v-if="visible && title" class="search-dropdown">
    <LoadingCircleIndicator v-if="loading" />
    <div v-else-if="results && results.length" class="search-dropdown__list">
      <SkinCardHorizontalComponent
        v-for="(item, i) in results"
        :key="`${i}_${item.id}`"
        :data="item"
        search-item
      />
    </div>
    <span v-else>Nothing found</span>
  </div>
</template>

<script setup>
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";

defineProps({
  results: Object,
  category: Object,
  history: Array,
  title: String,
  loading: Boolean,
  visible: Boolean,
});
</script>

<style lang="stylus">
.search-dropdown {
	position: absolute
	top: 100%
	left: 0
	right: 0
	z-index: 3
	padding: 15px
	border-radius: 0 0 10px 10px;
	border: 1px solid var(--dark-light-2, #1F3B4B);
	background: var(--dark-light, #011D2D);
	box-shadow: 0 15px 30px 0 rgba(0, 20, 31, 0.30);
	+below(768px) {
		padding: 5px
	}

	&__list {
		display flex
		flex-direction column
		flex-shrink: 0
		gap: 5px
		transition opacity var(--transition)

		&--loading {
			opacity 0.7
		}
	}
}
</style>
