<template>
  <div v-if="data" class="skin-card-hz" :class="{ 'skin-card-hz--deletable': deletable }">
    <nuxt-link
      v-if="!orderItem"
      :to="{
        name: 'skin-id',
        params: { id: data.id },
        query: { skin_id: data.id, hash_name: data.hash_name, app_id: data.appid },
      }"
      class="skin-card-hz__link"
    ></nuxt-link>
    <button
      @click.prevent="addToFavorites"
      v-if="searchItem"
      class="skin-card-hz__favorite btn btn--sm btn--hollow"
      :class="{ 'skin-card-hz__favorite--active': inFavorites }"
    >
      <LoadingCircleIndicator v-if="favoritesLoading" title="" />
      <IconComponent v-else name="star" />
    </button>
    <button @click.prevent="deleteSkin" v-if="deletable" class="skin-card-hz__delete btn btn--sm btn--hollow">
      <LoadingCircleIndicator v-if="deleteLoading" title="" />
      <IconComponent v-else name="trash" />
    </button>
    <ImgComponent :src="skinImg" class="skin-card-hz__img" />
    <div class="skin-card-hz__info">
      <span class="skin-card-hz__title">{{ skinTitle.name || skinTitle.gun }}</span>
      <span class="skin-card-hz__params" v-if="skinFloat.exterior">{{ skinFloat.exterior }}</span>
      <span class="skin-card-hz__float">
        <span>{{ skinTitle.gun }}</span>
        <template v-if="skinFloat.value">
          <span class="skin-card-hz__float-dot"></span>
          <span>{{ parseFloat(skinFloat.value).toFixed(4) }}</span>
        </template>
        <!--        <span class="skin-card-hz__float-dot"></span>-->
        <!--        <span>Tradable</span>-->
      </span>
      <span v-if="orderItem" :class="[`skin-card-hz__status--${data.status}`, 'skin-card-hz__status']">
        Status: <span class="skin-card-hz__status-tag">{{ items_statuses[data.status] }}</span>
      </span>
    </div>
    <div class="skin-card-hz__right">
      <div class="skin-card-hz__prices">
        <!--      <span class="skin-card-hz__price-old" v-if="data.old_price">{{ data.old_price }}</span>-->
        <span class="skin-card-hz__price">€{{ skinPrice }}</span>
      </div>
      <a
        v-if="data.trade_offer_id"
        :href="`https://steamcommunity.com/tradeoffer/${data.trade_offer_id}`"
        class="skin-card-hz__trade-link no-hover"
        target="_blank"
      >
        Trade
      </a>
    </div>
    <div v-if="searchItem" class="skin-card-hz__actions">
      <button
        @click.prevent="addToBasket"
        class="skin-card-hz__cart btn btn--sm"
        :class="{ 'skin-card-hz__cart--active': inCart }"
      >
        <LoadingCircleIndicator v-if="basketLoading" title="" />
        <IconComponent v-else name="bag-2" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { convertPrice, isCS2, marginPrice, showAuthModal } from "~/utils/global";
import { removeExterior } from "~/utils/skin";
import { useBasketStore } from "~/stores/basket";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { useAuthStore } from "~/stores/auth";
import { useFavoritesStore } from "~/stores/favorites";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  deletable: Boolean,
  orderItem: Boolean,
  searchItem: Boolean,
});

const authStore = useAuthStore();
const basketStore = useBasketStore();
const favoritesStore = useFavoritesStore();
let deleteLoading = ref(false);
let favoritesLoading = ref(false);
let basketLoading = ref(false);

const items_statuses = {
  created: "Waiting for payment",
  trade_creating: "Creating trade",
  wait_accept: "Waiting for confirmation",
  success: "Trade accepted",
  error: "Error",
};

const exteriors = {
  "Factory New": {
    short: "FN",
    range: "",
  },
  "Minimal Wear": {
    short: "MW",
    range: "",
  },
  "Field-Tested": {
    short: "FT",
    range: "",
  },
  "Well-Worn": {
    short: "WW",
    range: "",
  },
  "Battle-Scarred": {
    short: "BS",
    range: "",
  },
};

const skinImg = computed(() => {
  return `https://steamcommunity-a.akamaihd.net/economy/image/${props.data.icon_url}`;
});

const skinTitle = computed(() => {
  if (isCS2(props.data)) {
    let [gun, ...name] = props.data.hash_name.split(" | ");
    name = name.join(" | ");
    name = removeExterior(name);
    return { gun, name };
  }
  return { name: props.data.hash_name };
});

const skinFloat = computed(() => {
  if (isCS2(props.data)) {
    const exterior = props.data.tags.find((item) => item.category === "Exterior")?.name;
    return {
      value: props.data?.extra?.paintwear,
      shortName: exterior ? exteriors[exterior].short : "",
      exterior,
    };
  }
  return {};
});

const skinPrice = computed(() => {
  if (props.orderItem) {
    return props.data.price;
  }
  return marginPrice(convertPrice(props.data.price));
});

const inFavorites = computed(() => {
  return favoritesStore.favorites.map((i) => i.id).includes(props.data.id);
});

const inCart = computed(() => {
  return basketStore.basket
    .filter((i) => i)
    .map((i) => i.id)
    .includes(props.data.id);
});

async function deleteSkin() {
  deleteLoading.value = true;
  await basketStore.delete(props.data.id);
  deleteLoading.value = false;
}

async function addToFavorites() {
  if (authStore.user) {
    favoritesLoading.value = true;
    if (!inFavorites.value) {
      await favoritesStore.add(props.data);
    } else {
      await favoritesStore.delete(props.data.id);
    }
    favoritesLoading.value = false;
  } else {
    showAuthModal();
  }
}

async function addToBasket() {
  if (authStore.user) {
    basketLoading.value = true;
    if (!inCart.value) {
      await basketStore.add(props.data);
    } else {
      await basketStore.delete(props.data.id);
    }
    basketLoading.value = false;
  } else {
    showAuthModal();
  }
}
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

		{ main_class }__cart {
			&:not(&:hover):not({ main_class }__cart--active) {
				background var(--gray-dark-2)
			}
		}

		{ main_class }__favorite {
			&:not(&:hover):not({ main_class }__favorite--active) {
				border-color var(--gray-dark-2)
			}
		}
	}

	&__link {
		position absolute
		left 0
		right 0
		top 0
		bottom 0
		z-index 1
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

	&__favorite {
		z-index 2

		&.btn {
			width 30px
			height 30px
			+below(800px) {
				display none
			}
		}

		&:not(&--active):hover.btn {
			background var(--gray-dark-2)
		}

		&--active.btn {
			border-color var(--main)

			.icon svg path {
				fill var(--main)
			}
		}

		.icon {
			pointer-events none
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
		+below(540px) {
			align-items center
		}
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

	&__status {
		font-size 0.875rem

		&-tag {
			padding: 3px 7px
			border-radius var(--small-radius)
		}

		&--created,
		&--trade_creating {
			span {
				background var(--gray-dark-2)
			}
		}

		&--wait_accept span {
			background var(--main)
			color var(--black)
		}

		&--success span {
			background var(--gray-dark-3)
		}

		&--error span {
			background var(--red)
		}
	}

	&__right {
		display flex
		flex-direction column
		gap: 4px
		+below(540px) {
			flex-direction row
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

	&__trade-link {
		border-radius: var(--small-radius)
		padding: 3px 7px
		background-color var(--main)
		color var(--dark)
		font-weight 700

		&:hover {
			text-decoration underline
		}
	}

	&__actions {
		display flex
		position relative
		z-index 2
	}

	&__cart {
		&.btn {
			width 60px
			height 30px
			background: var(--dark-light-2, #1F3B4B);
		}

		&:not(&--active):hover {
			background var(--dark-light)
		}

		&--active.btn {
			background var(--main)
		}

		.icon {
			pointer-events none
		}
	}
}
</style>
