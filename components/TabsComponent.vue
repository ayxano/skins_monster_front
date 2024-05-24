<template>
  <div class="tabs">
    <button
      v-for="(item, i) in tabs"
      :key="i"
      @click="$emit('update:model-value', item)"
      class="tabs__item btn"
      :class="{ 'tabs__item--active': modelValue && modelValue.id === item.id }"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script setup>
defineEmits(["update:model-value"]);
defineProps({
  tabs: Array,
  modelValue: Object,
});
</script>

<style lang="stylus">
.tabs {
	border-radius: var(--small-radius)
	border: 1px solid var(--dark-light-2, #1F3B4B);
	background: var(--dark-light, #011D2D);
	display flex
	align-items center
	gap: 5px
	padding: 5px
	align-self flex-start

	&__item {
		border-radius: var(--small-radius)
		padding: 15px 30px
		font-size: 0.875rem
		font-weight: 700;

		&:not(&--active):hover {
			background var(--dark-light-2)
		}

		&--active {
			background var(--main)
			color var(--dark)
		}
	}
}
</style>
