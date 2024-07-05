<template>
  <div v-if="basket && basket.length" class="checkout-aside">
    <div class="checkout-aside__block checkout-aside__block--divider">
      <div class="checkout-aside__header">
        <div>
          <h3 class="checkout-aside__title">Confirm order</h3>
          <span class="checkout-aside__count">{{ basket.length }} {{ basketItemsPlural }} in cart</span>
        </div>
        <nuxt-link :to="{ name: 'index', hash: '#faq' }" class="checkout-aside__faq btn btn--sm btn--hollow">
          <IconComponent name="messages" />
          <span>FAQ</span>
        </nuxt-link>
      </div>
    </div>
    <div class="checkout-aside__block checkout-aside__block--divider">
      <div class="checkout-aside__payment">
        <span class="checkout-aside__payment-title">Payment method</span>
        <TabsComponent v-model="paymentMethod" :tabs="methods" small same-tabs />
      </div>
      <div class="checkout-aside__prices">
        <div class="checkout-aside__prices-list">
          <div class="checkout-aside__prices-item">
            <span class="checkout-aside__prices-item-title"> Suggested price </span>
            <span class="checkout-aside__prices-item-value"> €{{ basketPrice }} </span>
          </div>
          <!--          <div class="checkout-aside__prices-item">-->
          <!--            <span class="checkout-aside__prices-item-title"> You save </span>-->
          <!--            <span class="checkout-aside__prices-item-value"> -€0.00 </span>-->
          <!--          </div>-->
          <div class="checkout-aside__prices-item checkout-aside__prices-item--total">
            <span class="checkout-aside__prices-item-title"> Total </span>
            <span class="checkout-aside__prices-item-value"> €{{ basketPrice }} </span>
          </div>
          <template v-if="paymentMethod.type === 'balance'">
            <div class="checkout-aside__prices-item">
              <span class="checkout-aside__prices-item-title"> Balance </span>
              <span class="checkout-aside__prices-item-value"> €{{ balance }} </span>
            </div>
            <div
              v-if="balanceDeficit > 0"
              class="checkout-aside__prices-item checkout-aside__prices-item--error"
            >
              <span class="checkout-aside__prices-item-title"> Low balance, You need </span>
              <span class="checkout-aside__prices-item-value"> €{{ balanceDeficit }} </span>
            </div>
          </template>
        </div>
      </div>
      <button
        @click.prevent="refill"
        v-if="balanceDeficit > 0 && paymentMethod.type === 'balance'"
        class="btn btn--lg btn--main"
      >
        <span>Refill the balance</span>
        <LoadingCircleIndicator v-if="refillLoading" title="" />
        <IconComponent v-else name="arrow-right-1" />
      </button>
      <div v-if="!trade_link" class="checkout-aside__trade-link">
        Set your Steam trade link in
        <nuxt-link :to="{ name: 'cabinet-settings' }">Profile settings</nuxt-link>.
      </div>
    </div>
    <div class="checkout-aside__block">
      <div class="checkout-aside__agreement">
        <CheckboxComponent v-model="agreement">
          <span>
            I have read and understood my
            <nuxt-link :to="{ name: 'dynamic-id', query: { 'positions[]': 'cancellations_refunds' } }">
              right of cancellation.
            </nuxt-link>
            I agree to the beginning of the contract execution before the end of the cancellation period. I am
            aware that I thereby lose my right of cancellation.
          </span>
        </CheckboxComponent>
      </div>
    </div>
    <div class="checkout-aside__block">
      <div class="checkout-aside__submit">
        <button @click="submit" class="btn btn--lg btn--main no-hover" :disabled="submitDisabled">
          <span>Proceed to checkout</span>
          <LoadingCircleIndicator v-if="submitLoading" title="" />
          <IconComponent v-else name="arrow-right-1" />
        </button>
        <span class="checkout-aside__terms">
          By clicking Proceed to Checkout, you agree to our
          <nuxt-link :to="{ name: 'dynamic-id', query: { 'positions[]': 'terms_of_service' } }">
            Terms of Service
          </nuxt-link>
          and that you have read our
          <nuxt-link :to="{ name: 'dynamic-id', query: { 'positions[]': 'privacy_policy' } }">
            Privacy Policy </nuxt-link
          >.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, shallowRef } from "vue";
import { useBasketStore } from "~/stores/basket";
import { useDefaultStore } from "~/stores/default";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { useAuthStore } from "~/stores/auth";
import pluralize from "pluralize";
import { useOrdersStore } from "~/stores/orders";
import AlertModal from "~/components/modals/components/AlertModal.vue";
import { useRouter } from "#app";

// const emits = defineEmits(["submit"]);
const props = defineProps({
  basket: Array,
});

const router = useRouter();
const ordersStore = useOrdersStore();
const authStore = useAuthStore();
const defaultStore = useDefaultStore();
const basketStore = useBasketStore();
const agreement = ref(false);
const submitLoading = ref(false);
const refillLoading = ref(false);

const methods = [
  {
    id: 1,
    title: "Debit card",
    type: defaultStore.types.payment_type.GUAVAPAY,
    icon: {
      name: "card-pos",
      category: "icons",
    },
  },
  {
    id: 2,
    title: "Account balance",
    type: defaultStore.types.payment_type.BALANCE,
    icon: {
      name: "empty-wallet",
      category: "icons",
    },
  },
];

const paymentMethod = ref(methods[0]);

const basketPrice = computed(() => {
  return basketStore.price;
});

const trade_link = computed(() => {
  return authStore.user?.trade_link;
});

const basketItemsPlural = computed(() => {
  return pluralize("item", props.basket.length);
});

const balance = computed(() => {
  return parseFloat(authStore.user?.eur_balance) || 0;
});

const balanceDeficit = computed(() => {
  return basketPrice.value - balance.value;
});

const submitDisabled = computed(() => {
  const disabled = !agreement.value || !trade_link.value;
  if (paymentMethod.value.type === "balance") {
    return disabled || balanceDeficit.value > 0;
  }
  return disabled;
});

async function submit() {
  submitLoading.value = true;
  let variables = {};
  variables.payment_type = paymentMethod.value.type;
  try {
    const { data } = await ordersStore.add(variables);
    if (data && data.guavapay_payment_url) {
      let link = document.createElement("a");
      link.href = data.guavapay_payment_url;
      link.click();
    } else {
      showAlertModal({
        title: "SUCCESS",
        text: "Your order has been successfully created.",
        confirmBtnTitle: "Orders",
        callback: () => {
          router.push({ name: "cabinet-orders" });
        },
      });
    }

    await basketStore.get();
  } catch (e) {
    if (e.message) {
      showAlertModal({
        title: "ERROR",
        text: e.message,
        confirmBtnTitle: "Orders",
        callback: () => {
          router.push({ name: "cabinet-orders" });
        },
      });
    }
  } finally {
    submitLoading.value = false;
  }
}

async function refill() {
  refillLoading.value = true;
  try {
    const { link } = await authStore.refill();
    let el = document.createElement("a");
    el.href = link;
    el.click();
  } catch (e) {
    console.log("Refill error", e);
  } finally {
    refillLoading.value = false;
  }
}

function showAlertModal(options) {
  defaultStore.modals.push({
    component: shallowRef(AlertModal),
    options,
  });
}
</script>

<style lang="stylus">
.checkout-aside {
	background var(--dark-light)
	border-radius var(--main-radius)
	+above(901px) {
		position sticky
		top: 20px
	}

	&__block {
		display flex
		flex-direction column
		gap: 10px
		padding: 20px 30px;

		&--divider {
			border-bottom: 1px solid var(--dark-light-2, #1F3B4B);
		}
	}

	&__header {
		display flex
		flex-wrap wrap
		align-items center
		justify-content space-between
		gap: 15px 30px
		+below(1024px) {
			gap: 15px
		}
	}

	&__title {
		margin 0
	}

	&__count {
		color: var(--gray-dark-2, #516D7D);
		font-size: 0.75rem
		line-height: normal;
	}

	&__faq.btn {
		padding: 2px 4px
		height 36px
		color: var(--gray-dark-2, #516D7D);
		font-size: 0.875rem
		font-weight: 400;
		line-height: 22px;
		flex-shrink 0

		.icon {
			width 30px
			height 30px
			padding: 5px
			color var(--white)
		}
	}

	&__payment {
		display flex
		flex-direction column
		gap 5px

		&-title {
			font-size 0.875rem
			line-height 1
		}

		.tabs {
			width 100%
			height 50px

			&__item.btn {
				padding: 3px 5px

				.icon {
					width 25px
					height 25px
					+below(400px) {
						width 20px
						height 20px
					}
				}
			}
		}
	}

	&__prices {
		&-list {
			display flex
			flex-direction column
		}

		&-item {
			padding: 5px 0
			font-size: 0.875rem
			display flex
			align-items center
			justify-content space-between
			gap: 15px

			&--total {
				font-size: 1.375rem
				font-weight 700
			}

			&--error {
				color var(--red)
			}

			&--error &-title {
				color var(--red)
			}

			&-title {
				flex-grow 1
				color var(--white-o5)
			}

			&-value {
				text-align right
			}
		}
	}

	&__trade-link {
		color var(--red)
		font-size 0.875rem

		a {
			border-bottom 1px solid
		}
	}

	&__agreement {
		span {
			font-size 0.75rem
		}
		a {
			border-bottom 1px solid
			transition none
		}
	}

	&__submit {
		display flex
		flex-direction column
		gap: 10px
	}

	&__terms {
		color: var(--white-o5)
		font-size: 0.75rem
		line-height: normal;

		a {
			text-decoration underline
		}
	}
}
</style>
