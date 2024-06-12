<template>
  <div
    v-if="tabs"
    class="tabs"
    :class="{
      'tabs--small': small,
      'tabs--dark': dark,
      'tabs--same-tabs': sameTabs,
    }"
  >
    <button
      v-for="(item, i) in tabs"
      :key="i"
      @click.prevent="clickHandle($event, item)"
      class="tabs__item btn"
      :class="{ 'tabs__item--active': modelValue && modelValue.id === item.id }"
    >
      <IconComponent v-if="item.icon" :name="item.icon.name" :category="item.icon.category" />
      <span>{{ item.title }}</span>
    </button>
  </div>
</template>

<script setup>
const emits = defineEmits(["update:model-value"]);
defineProps({
  tabs: Array,
  modelValue: Object,
  small: Boolean,
  dark: Boolean,
  sameTabs: Boolean,
});

function clickHandle(e, item) {
  e.target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  emits("update:model-value", item);
}
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
	overflow auto hidden

	&--small {
		height 40px
		padding: 3px
		flex-shrink 0

		{ main_class } {
			&__item.btn {
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

	&--dark {
		width 100%
		height 62px
		border none
		background: var(--dark, #00141F);

		{ main_class } {
			&__item {
				&.btn {
					flex 1
					padding: 15px
				}

				&--active.btn {
					background var(--dark-light)
					color var(--main)
				}
			}
		}
	}

	&--same-tabs {
		{ main_class } {
			&__item {
				flex 1
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
			height 100%
			flex-shrink 0
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
