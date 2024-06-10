<template>
  <div class="skin-float">
    <div class="skin-float__line">
      <span class="skin-float__line--fn"></span>
      <span class="skin-float__line--mw"></span>
      <span class="skin-float__line--ft"></span>
      <span class="skin-float__line--ww"></span>
      <span class="skin-float__line--bs"></span>
      <IconComponent category="default" name="indicator" />
    </div>
    <div class="skin-float__list">
      <span @mouseenter="activeFloat = item" v-for="(item, i) in floats" :key="i" class="skin-float__item">
        {{ item.abbreviation }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeFloat = ref({});

const floats = [
  {
    abbreviation: "FN",
    title: "Factory New",
  },
  {
    abbreviation: "MW",
    title: "",
  },
  {
    abbreviation: "FT",
    title: "Field-Tested",
  },
  {
    abbreviation: "WW",
    title: "Well-Worn",
  },
  {
    abbreviation: "BS",
    title: "Battle-Scarred",
  },
];
</script>

<style lang="stylus">
.skin-float {
	display flex
	flex-direction column
	gap: 5px

	&__line {
		position relative
		height 5px
		display flex

		span {
			display inline-block
			height 100%
		}

		&--fn {
			background-color var(--green-dark)
			width 7%
			//border-radius 2px 0 0 2px
		}

		&--mw {
			background-color var(--green)
			width 8%
		}

		&--ft {
			background-color var(--yellow)
			width 23%
		}

		&--ww {
			background-color var(--orange)
			width 7%
		}

		&--bs {
			background-color var(--red)
			width 55%
			//border-radius 0 2px 2px 0
		}

		.icon {
			position absolute
			top 0
			left 33%
			transform translateY(-100%)
			color var(--gray-2)
			width: auto;
			height: 7px;
			min-width: 0;
			min-height: 0;
		}
	}

	&__list {
		display flex
		gap 1px

		span {
			text-align center
			flex 1
			font-size: 0.75rem
			line-height normal
			text-transform uppercase
			padding 5px
			background: var(--dark-light, #011D2D);
			transition background var(--transition)

			//&:hover {
			//	background var(--dark-light-2)
			//	cursor: default;
			//}
		}
	}
}
</style>
