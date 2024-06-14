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
      @click.prevent="clickHandle($event, item, i)"
      class="tabs__item btn"
      :class="{ 'tabs__item--active': isActive(item, i) }"
    >
      <IconComponent v-if="item.icon" :name="item.icon.name" :category="item.icon.category" />
      <span>{{ item[labelField] }}</span>
    </button>
  </div>
</template>

<script setup>
const emits = defineEmits(["update:model-value"]);
const props = defineProps({
  tabs: Array,
  modelValue: [Object, Number],
  small: Boolean,
  dark: Boolean,
  sameTabs: Boolean,
  labelField: {
    type: String,
    default: "title",
  },
  labelBy: {
    type: String,
    default: "item",
  },
});

function clickHandle(e, item, index) {
  e.target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  if (props.labelBy === "index") {
    emits("update:model-value", index);
  } else {
    emits("update:model-value", item);
  }
}

function isActive(item, index) {
  if (props.labelBy === "index") {
    return props.modelValue === index;
  }
  return props.modelValue && props.modelValue.id === item.id;
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
	max-width 100%
	scrollbar-width none

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
