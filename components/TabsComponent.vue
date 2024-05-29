<template>
  <div class="tabs" :class="{ 'tabs--small': small }">
    <button
      v-for="(item, i) in tabs"
      :key="i"
      @click="$emit('update:model-value', item)"
      class="tabs__item btn"
      :class="{ 'tabs__item--active': modelValue && modelValue.id === item.id }"
    >
      <IconComponent v-if="item.icon" :name="item.icon.name" :category="item.icon.category" />
      <span>{{ item.title }}</span>
    </button>
  </div>
</template>

<script setup>
defineEmits(["update:model-value"]);
defineProps({
  tabs: Array,
  modelValue: Object,
  small: Boolean,
});
</script>

<style lang="stylus">
main_class = ".tabs"
.tabs {
	border-radius: var(--small-radius)
	border: 1px solid var(--dark-light-2, #1F3B4B);
	background: var(--dark-light, #011D2D);
	display flex
	align-items center
	gap: 5px
	padding: 5px
	align-self flex-start

	&--small {
		height 40px
		padding: 3px

		{ main_class } {
			&__item {
				padding 3px 10px
				gap: 5px
				height 100%

				.icon {
					height 100%
					width auto
				}
			}
		}
	}

	&__item {
		&.btn {
			border-radius: var(--small-radius)
			padding: 15px 30px
			font-size: 0.875rem
			font-weight: 700;
			display flex
			align-items center
			gap: 10px
		}

		&:not(&--active):hover {
			background var(--dark-light-2)
		}

		&--active.btn {
			background var(--main)
			color var(--dark)
		}
	}
}
</style>
