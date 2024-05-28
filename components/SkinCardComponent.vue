<template>
  <div class="skin-card">
    <nuxt-link :to="{ name: 'skin' }" class="skin-card__link"></nuxt-link>
    <div class="skin-card__header">
      <ImgComponent :src="data.img" class="skin-card__img" :loader="false" />
      <div class="skin-card__header-cover">
        <button
          @click="addToFavorites"
          class="skin-card__favorite btn btn--md"
          :class="{ 'skin-card__favorite--active': inFavorites }"
        >
          <IconComponent name="star" />
        </button>
      </div>
    </div>
    <div class="skin-card__body">
      <div class="skin-card__info">
        <span class="skin-card__title">{{ data.title }}</span>
        <span class="skin-card__subtitle">{{ data.subtitle }}</span>
        <div v-if="data.float" class="skin-card__float">
          <span class="skin-card__float-title">FT</span>
          <span class="skin-card__float-dot"></span>
          <span class="skin-card__float-value">{{ data.float }}</span>
        </div>
      </div>
      <span class="skin-card__price">{{ data.price }}</span>
      <div
        class="skin-card__actions"
        :class="{
          'skin-card__actions--default': !(data.banned || inCart),
          'skin-card__actions--banned': data.banned,
          'skin-card__actions--in-cart': inCart,
        }"
      >
        <button @click="addToCart" class="skin-card__action-cart btn">
          <IconComponent name="bag-2" />
        </button>
        <button class="skin-card__action-more btn">
          <IconComponent name="dots-menu" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "~/stores/cart";
import { useFavoritesStore } from "~/stores/favorites";

const props = defineProps({
  data: Object,
});

const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();

const inCart = computed(() => {
  return cartStore.cart_items.map((i) => i.id).includes(props.data.id);
});

const inFavorites = computed(() => {
  return favoritesStore.favorites.map((i) => i.id).includes(props.data.id);
});

function addToCart() {
  if (!inCart.value) {
    cartStore.cart_items.push(props.data);
  }
}

function addToFavorites() {
  if (!inFavorites.value) {
    favoritesStore.favorites.push(props.data);
  }
}
</script>

<style lang="stylus">
.skin-card {
	position relative
	display flex
	flex-direction column
	border-radius: var(--main-radius)
	border: 1px solid var(--dark-light-2, #1F3B4B);
	background: var(--dark-light, #011D2D);
	transition var(--transition)

	&:hover {
		border-color var(--main)
		background var(--dark-light-2)

		main_class = ".skin-card"
		{ main_class }__price {
			background var(--gray-dark-2)
		}

		{ main_class }__actions--default .btn:not(:hover) {
			background var(--gray-dark-2)
		}

		{ main_class }__favorite {
			border-color var(--gray-dark-2)
		}
	}

	&__link {
		position absolute
		left 0
		right 0
		top 0
		bottom 0
	}

	&__header {
		height 184px
		padding: 10px

		&-cover {
			position absolute
			top 0
			left 0
			right 0
			z-index 1
		}
	}

	&__favorite {
		position absolute
		right 15px
		top 15px
		width 40px
		height 40px
		border-radius: var(--small-radius)
		border: 1px solid var(--dark-light-2, #1F3B4B);
		background: var(--dark-light, #011D2D);

		&:hover {
			background var(--gray-dark-2)
		}

		.icon {
			width 20px
			height 20px
			color var(--gray-dark)
		}

		&--active {
			.icon svg path {
				fill var(--main)
			}
		}
	}

	&__img {
		object-fit contain
	}

	&__body {
		flex-grow 1
		padding: 20px
		display flex
		flex-direction column
		gap: 10px
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

	&__subtitle {
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
		text-transform uppercase

		&-dot {
			width 2px
			height 2px
			border-radius 50%
			background var(--white-o5)
		}
	}

	&__price {
		font-size: 0.875rem
		font-weight: 700;
		border-radius: var(--small-radius)
		background: var(--dark-light-2, #1F3B4B);
		align-self flex-start
		padding 3px 5px
		transition var(--transition)
	}

	&__actions {
		display flex
		gap: 1px
		z-index 1

		.btn {
			background: var(--dark-light-2, #1F3B4B);
			height 40px

			.icon {
				width 20px
				height 20px
			}
		}

		&--default {
			.btn:hover {
				background var(--dark-light)
			}
		}

		&--banned {
			.btn {
				background: var(--red-o3)
				color var(--red)
			}
		}

		&--in-cart {
			box-shadow: 0 10px 20px 0 var(--green-2-o3)

			.btn {
				background: var(--main, #88E876);

				.icon {
					color var(--dark)
				}
			}
		}
	}

	&__action-cart {
		flex-grow 1
		border-radius: var(--small-radius) 0 0 var(--small-radius)
	}

	&__action-more {
		width 50px
		border-radius: 0 var(--small-radius) var(--small-radius) 0
	}
}
</style>
