<template>
  <div class="checkout-aside">
    <div class="checkout-aside__block checkout-aside__block--divider">
      <div class="checkout-aside__header">
        <div>
          <h3 class="checkout-aside__title">Confirm order</h3>
          <span class="checkout-aside__count">2 items in cart</span>
        </div>
        <nuxt-link :to="{ name: 'index', hash: '#faq' }" class="checkout-aside__faq btn btn--sm btn--hollow">
          <IconComponent name="messages" />
          <span>FAQ</span>
        </nuxt-link>
      </div>
    </div>
    <div class="checkout-aside__block checkout-aside__block--divider">
      <div class="checkout-aside__prices">
        <div class="checkout-aside__prices-list">
          <div class="checkout-aside__prices-item">
            <span class="checkout-aside__prices-item-title"> Suggested price </span>
            <span class="checkout-aside__prices-item-value"> $4274.69 </span>
          </div>
          <div class="checkout-aside__prices-item">
            <span class="checkout-aside__prices-item-title"> You save </span>
            <span class="checkout-aside__prices-item-value"> -$625.69 </span>
          </div>
          <div class="checkout-aside__prices-item checkout-aside__prices-item--total">
            <span class="checkout-aside__prices-item-title"> Total </span>
            <span class="checkout-aside__prices-item-value"> €3,649.00 </span>
          </div>
        </div>
      </div>
    </div>
    <div class="checkout-aside__block">
      <div class="checkout-aside__agreement">
        <CheckboxComponent v-model="agreement">
          <span>
            I have read and understood my <a href="#">right of cancellation</a>. I agree to the beginning of
            the contract execution before the end of the cancellation period. I am aware that I thereby lose
            my right of cancellation.
          </span>
        </CheckboxComponent>
      </div>
    </div>
    <div class="checkout-aside__block">
      <div class="checkout-aside__submit">
        <button class="btn btn--lg btn--main">
          <span>Proceed to checkout</span>
          <IconComponent name="arrow-right-1" />
        </button>
        <span class="checkout-aside__terms">
          By clicking Proceed to Checkout, you agree to our <a href="#">Terms</a> of Service and that you have
          read our Privacy Policy.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const agreement = ref(false);
</script>

<style lang="stylus">
.checkout-aside {
	background var(--dark-light)
	border-radius var(--main-radius)
	position sticky
	top: 20px

	&__block {
		display flex
		flex-direction column
		padding: 20px 30px;

		&--divider {
			border-bottom: 1px solid var(--dark-light-2, #1F3B4B);
		}
	}

	&__header {
		display flex
		align-items center
		justify-content space-between
		gap: 30px
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

		.icon {
			width 30px
			height 30px
			padding: 5px
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

			&-title {
				flex-grow 1
				color var(--white-o5)
			}

			&-value {
				text-align right
			}
		}
	}

	&__agreement {
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
	}
}
</style>
