<template>
  <div class="skin-aside">
    <div class="skin-aside__info skin-aside-block">
      <div class="skin-aside__category">
        <span>{{ skinTitle.gun }}</span>
        <span>{{ float.exterior }}</span>
      </div>
      <span class="skin-aside-block__title">{{ skinTitle.name }}</span>
      <div class="skin-aside__prices">
        <span class="skin-aside__price">€{{ skinPrice }}</span>
        <!--        <span class="skin-aside__price-steam"> Steam price: <span>$1,178.68</span> </span>-->
      </div>
    </div>
    <div class="skin-aside__actions">
      <button @click="addToBasket" class="btn btn--lg btn--main">
        <span v-if="inCart">Added to cart</span>
        <span v-else>Add to cart</span>
        <LoadingCircleIndicator v-if="basketLoading" title="" />
        <IconComponent v-else name="bag-2" />
      </button>
      <button
        @click="addToFavorites"
        :class="{ 'skin-aside__action--active': inFavorites }"
        class="btn btn--lg btn--hollow"
      >
        <LoadingCircleIndicator v-if="favoritesLoading" title="" />
        <IconComponent v-else name="star" />
      </button>
    </div>
    <div v-if="float && float.value" class="skin-aside__float skin-aside-block">
      <span class="skin-aside-block__title skin-aside__float-title">
        <span>Wear Range</span>
        <!--        <IconComponent name="info-circle" />-->
      </span>
      <SkinFloatComponent :float="float" />
    </div>
    <div v-if="tags && tags.length" class="skin-aside__details skin-aside-block">
      <div class="skin-aside-block__title skin-aside__details-title">
        <span>Summary</span>
        <!--        <IconComponent name="info-circle" />-->
      </div>
      <ul class="skin-aside__details-list">
        <li v-if="float && float.value" class="skin-aside__details-item">
          <span>Float</span>
          <span>{{ float.value }}</span>
        </li>
        <li v-if="data.extra && data.extra.paintseed" class="skin-aside__details-item">
          <span>Paint seed</span>
          <span>{{ data.extra.paintseed }}</span>
        </li>
        <li v-if="data.extra && data.extra.paintindex" class="skin-aside__details-item">
          <span>Paint index</span>
          <span>{{ data.extra.paintindex }}</span>
        </li>
        <li v-for="(item, i) in tags" :key="i" class="skin-aside__details-item">
          <span>{{ item.category }}</span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <ShareComponent class="skin-aside__share" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { convertPrice, isCS2, showAuthModal } from "~/utils/global";
import { useAuthStore } from "~/stores/auth";
import { useBasketStore } from "~/stores/basket";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { removeExterior } from "~/utils/skin";

const props = defineProps({
  data: Object,
  addToFavorites: Function,
  inCart: Boolean,
  inFavorites: Boolean,
  favoritesLoading: Boolean,
  float: Object,
});

const authStore = useAuthStore();
const basketStore = useBasketStore();
const availableTags = ["Tournament", "TournamentTeam", "ProPlayer"];
let basketLoading = ref(false);

const tags = computed(() => {
  if (props.data && props.data.tags && props.data.tags.length) {
    return props.data.tags.filter((item) => !availableTags.includes(item.category));
  }
  return [];
});

const skinPrice = computed(() => {
  return convertPrice(props.data.price);
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

async function addToBasket() {
  if (authStore.user) {
    basketLoading.value = true;
    if (!props.inCart) {
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
.skin-aside {
	display flex
	flex-direction column
	gap: 20px

	&-block {
		padding: 10px
		border-radius: var(--main-radius)
		border: 1px solid var(--dark-light-2, #1F3B4B);
		background: var(--dark-light, #011D2D);
		display flex
		flex-direction column
		gap: 5px

		&__title {
			color: var(--white, #FFF);
			font-weight: 700;
			padding: 5px
			display flex
			align-items center
			gap: 5px

			.icon {
				width 20px
				height 20px
				color var(--gray-dark-2)
			}
		}
	}

	&__category {
		display flex
		align-items center
		gap: 5px
		color: var(--gray-dark-2, #516D7D);
		font-size: 0.875rem

		span {
			padding: 5px
			flex 1
		}
	}

	&__prices {
		display flex
		align-items center
		gap: 20px
		padding: 5px
	}

	&__price {
		color: var(--main, #88E876);
		font-size: 1.375rem
		font-weight: 700;
		line-height: normal;
	}

	&__price-steam {
		color: var(--gray-dark-2, #516D7D);
		font-size: 0.875rem

		span {
			color var(--gray-dark)
		}
	}

	&__actions {
		display flex
		gap: 20px

		.btn {
			height 60px
			font-size: 1.125rem
			font-weight: 700;
			line-height: normal;
			text-transform uppercase

			&:first-child {
				flex-grow 1
				box-shadow 0 10px 20px 0 var(--green-o3)
				padding: 0 10px

				&:hover {
					background-color var(--green-o8)
					color var(--dark)
				}
			}

			&:last-child {
				padding: 10px
				width 60px
			}

			.icon {
				width 24px
				height 24px
			}
		}
	}

	&__action {
		&--active.btn {
			color var(--main)
			border-color var(--main)
		}
	}

	&__details {
		&-list {
			display flex
			flex-direction column
			gap: 5px
		}

		&-item {
			display flex
			align-items center
			justify-content space-between
			gap: 15px
			color: var(--gray-dark, #D4F0FF);
			font-size: 0.875rem
			padding: 5px

			span:first-child {
				flex-grow 1
			}

			span:last-child {
				text-align right
			}
		}
	}

	&__share {
		+below(540px) {
			justify-content flex-end
		}
	}
}
</style>
