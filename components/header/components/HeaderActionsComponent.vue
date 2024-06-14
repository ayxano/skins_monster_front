<template>
  <div class="header-actions">
    <nuxt-link
      :to="{ name: 'catalog' }"
      class="header-actions__item header-actions__item--search btn btn--lg btn--dark-light"
    >
      <IconComponent class="icon--lg" name="search-normal-1" />
    </nuxt-link>
    <nuxt-link :to="{ name: 'checkout' }" class="header-actions__item header-actions__item--cart btn">
      <div class="header-actions__item-inner">
        <IconComponent class="icon--lg" name="bag-2" />
        <span v-if="basketLength" class="header-actions__item-count">{{ basketLength }}</span>
      </div>
    </nuxt-link>
    <nuxt-link
      to="/cabinet/profile"
      class="header-actions__item header-actions__item--profile btn btn--lg btn--dark-light"
    >
      <IconComponent class="icon--lg" name="frame-1" />
    </nuxt-link>
    <button class="header-actions__item header-actions__item--menu btn">
      <IconComponent class="icon--lg" name="menu-burger" />
    </button>
  </div>
</template>

<script setup>
import { useBasketStore } from "~/stores/basket";
import { computed } from "vue";

const basketStore = useBasketStore();

const basketLength = computed(() => {
  return basketStore.basket?.length || 0;
});
</script>

<style lang="stylus">
.header-actions {
	display flex
	gap: 15px

	&__item {
		&-inner {
			display flex
			align-items center
			justify-content center
			position relative
		}

		&-count {
			position absolute
			top -5px
			right -5px
			display: flex;
			width: 15px;
			height: 15px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 0.625rem
			line-height: normal;
			border-radius: 100px;
			background: var(--red, #DC2626);
		}
	}

	.btn&__item {
		display flex
		width 50px
		height 50px
		border-radius 50%
		flex-shrink 0
		padding: 10px

		.icon {
			width 24px
			height 24px
			color var(--white)
		}

		&--cart,
		&--menu {
			&:hover {
				background var(--dark-light-2)

				.icon {
					color var(--main)
				}
			}
		}

		&--search {
			+above(721px) {
				display none
			}

			.icon {
				width 20px
				height 20px
			}
		}

		&--profile {
			+below(580px) {
				display none
			}
		}

		&--menu {
			+above(1025px) {
				display none
			}

			.icon {
				width 30px
			}
		}
	}
}
</style>
