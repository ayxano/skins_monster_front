<template>
  <main class="page checkout-page">
    <div class="page__inner">
      <BreadcrumbsComponent title="Checkout" />
      <div class="checkout-page__content">
        <LoadingCircleIndicator v-if="pageLoading" />
        <template v-else>
          <div class="checkout-page__body">
            <CheckoutGameComponent v-for="(item, i) in checkout" :key="i" :data="item" />
          </div>
          <CheckoutAsideComponent :basket="basket" />
        </template>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useBasketStore } from "~/stores/basket";
import { computed } from "vue";
import { useDefaultStore } from "~/stores/default";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";

// eslint-disable-next-line no-undef
definePageMeta({
  authRequired: true,
});

const basketStore = useBasketStore();
const defaultStore = useDefaultStore();

const appidTypes = computed(() => {
  return defaultStore.types.appid;
});

const basket = computed(() => {
  return basketStore.basket || [];
});

const pageLoading = computed(() => {
  return defaultStore.loading.length && !(basket.value && basket.value.length);
});

const checkout = computed(() => {
  return [
    {
      title: "Counter-Strike 2",
      icon: {
        name: "cs2",
        category: "default",
      },
      list: basket.value.filter((i) => i && i.appid === appidTypes.value.CS2),
    },
    {
      title: "DOTA2",
      icon: {
        name: "dota2",
        category: "default",
      },
      list: basket.value.filter((i) => i && i.appid === appidTypes.value.DOTA2),
    },
  ];
});
</script>

<style lang="stylus">
.checkout-page {
	&__content {
		display grid
		grid-template-columns 676fr minmax(300px, 390fr)
		grid-gap var(--gap)
		align-items flex-start
		+below(900px) {
			grid-template-columns 1fr
		}
	}

	&__body {
		display flex
		flex-direction column
		gap: 20px
		width 100%
	}
}
</style>
