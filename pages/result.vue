<template>
  <main class="page result-page">
    <div class="page__inner">
      <BreadcrumbsComponent :title="success ? 'Success' : 'Not Success'" />
      <div class="result-page__content">
        <template v-if="success">
          <div class="result-page__header">
            <ImgComponent class="result-page__img" src="/images/logo-small.svg" :loader="false" />
            <h2 class="result-page__title">Success!</h2>
          </div>
          <span class="result-page__text">Your order number: 568</span>
          <span class="result-page__message">
            Your skins have been purchased and will be available on Steam soon. You can download them and
            enjoy the game!
          </span>
          <nuxt-link :to="{ name: 'cabinet-orders' }" class="btn btn--lg btn--hollow">
            <span>My orders</span>
            <IconComponent name="arrow-right-1" />
          </nuxt-link>
        </template>
        <template v-else>
          <div class="result-page__header">
            <ImgComponent class="result-page__img" src="/images/logo-small-red.svg" :loader="false" />
            <h2 class="result-page__title">Oh, Not Success!</h2>
          </div>
          <span class="result-page__text">
            There were problems with the purchase, there may not be enough funds or there was a failure on the
            bank's side. Please come back and try again.
          </span>
          <nuxt-link :to="{ name: 'checkout' }" class="btn btn--lg btn--hollow">
            <span>Try again</span>
            <IconComponent name="arrow-right-1" />
          </nuxt-link>
        </template>
      </div>
      <SkinsListComponent title="Check others" :list="list" row />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { useRoute } from "#app";

const route = useRoute();

const success = route.query?.success ? JSON.parse(route.query.success) : false;

const list = [
  {
    id: 1,
    title: "AK-47",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_1.png",
    price: "$778",
    float: 0.34054558,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 2,
    title: "MAC-10 | Heat",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_2.png",
    price: "$778",
    float: 0.34054558,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 3,
    title: "Blue Steel",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_3.png",
    price: "$880",
    float: 0.34054558,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 4,
    title: "Chrome Cannon",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_4.png",
    price: "$778",
    float: 0.34054558,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
];
</script>

<style lang="stylus">
.result-page {
	&__content {
		display flex
		flex-direction column
		align-items flex-start
		gap: 20px

		.btn {
			color var(--main)

			.icon {
				color var(--main)
			}
		}
	}

	&__header {
		display flex
		align-items center
		gap: 20px
	}

	&__img {
		width 48px
		height 58px
	}

	&__title {
		margin 0
	}

	&__text {
		font-size: 1.375rem
		font-weight: 700;
		line-height: normal;
	}

	&__message {
		font-size: 0.875rem
	}
}
</style>
