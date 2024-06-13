<template>
  <div class="skin-card-hz" :class="{ 'skin-card-hz--deletable': deletable }">
    <nuxt-link :to="{ name: 'skin' }" class="skin-card-hz__link"></nuxt-link>
    <button v-if="deletable" class="skin-card-hz__delete btn btn--sm btn--hollow">
      <IconComponent name="trash" />
    </button>
    <ImgComponent :src="data.img" class="skin-card-hz__img" />
    <div class="skin-card-hz__info">
      <span class="skin-card-hz__title">Desert Hydra</span>
      <span class="skin-card-hz__params">Field-Tested Covert Sniper Rifle</span>
      <span class="skin-card-hz__float">
        <span>AWP</span>
        <span class="skin-card-hz__float-dot"></span>
        <span>{{ data.float }}</span>
        <span class="skin-card-hz__float-dot"></span>
        <span>Tradable</span>
      </span>
    </div>
    <div class="skin-card-hz__prices">
      <span class="skin-card-hz__price-old" v-if="data.old_price">{{ data.old_price }}</span>
      <span class="skin-card-hz__price">{{ data.price }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  deletable: Boolean,
});
</script>

<style lang="stylus">
main_class = ".skin-card-hz"
.skin-card-hz {
	position relative
	display flex
	align-items center
	gap: 15px
	border-radius: var(--main-radius)
	border: 1px solid var(--dark-light-2, #1F3B4B);
	background: var(--dark-light, #011D2D);
	padding: 10px 20px
	transition var(--transition)
	+below(540px) {
		flex-direction column
		align-items center
		text-align center
	}

	&:hover {
		background var(--dark-light-2, #1F3B4B);

		{ main_class }__delete {
			border-color var(--gray-dark-2)
			color var(--gray-dark-2)
		}

		{ main_class }__prices {
			background var(--gray-dark-2)
		}
	}

	&__link {
		position absolute
		left 0
		right 0
		top 0
		bottom 0
	}

	&__delete.btn {
		width 30px
		height 30px
		flex-shrink 0
		color var(--gray-dark-2, #516D7D)
		z-index 1
		+below(1150px) {
			position absolute
			top 0
			right 0
			z-index 1
			background var(--dark-light, #011D2D)
		}
		+below(540px) {
			top: 10px
			right 10px
		}

		&:hover {
			border-color var(--red)
			color var(--red)
		}
	}

	&__img {
		width 60px
		height 60px
		flex-shrink 0
		background: var(--dark, #00141F);
		border-radius var(--small-radius)
		padding: 5px
		object-fit contain
		object-position center
	}

	&__info {
		display flex
		flex-direction column
		gap: 3px
		flex-grow 1
	}

	&__title {
		padding-bottom 2px
		font-size: 0.875rem
		font-weight: 700;
	}

	&__params {
		font-size: 0.75rem
		line-height: normal;
	}

	&__float {
		color var(--white-o5)
		font-size: 0.75rem
		line-height normal
		display flex
		align-items center
		gap: 5px

		&-dot {
			width 2px
			height 2px
			border-radius 50%
			background var(--white-o5)
		}
	}

	&__prices {
		border-radius: var(--small-radius)
		background: var(--dark-light-2, #1F3B4B);
		padding: 3px 7px
		display flex
		flex-direction column
		align-items flex-end
		text-align right
		font-size: 0.875rem
		transition background-color var(--transition)
		flex-shrink 0
		+below(540px) {
			flex-direction row
			gap: 15px
		}
	}

	&__price {
		font-weight: 700;

		&-old {
			color var(--white-o5)
			text-decoration-line: line-through;
		}
	}
}
</style>
