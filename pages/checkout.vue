<template>
  <main class="page checkout-page">
    <div class="page__inner">
      <BreadcrumbsComponent title="Checkout" />
      <div class="checkout-page__content">
        <div class="checkout-page__body">
          <CheckoutGameComponent v-for="(item, i) in checkout" :key="i" :data="item" />
        </div>
        <CheckoutAsideComponent />
      </div>
    </div>
  </main>
</template>

<script setup>
// eslint-disable-next-line no-undef
definePageMeta({
  authRequired: true,
});

const checkout = [
  {
    title: "Counter-Strike 2",
    icon: {
      name: "cs2",
      category: "default",
    },
    skins: [
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
        old_price: "$2395.16",
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
        old_price: "$2395.16",
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
        old_price: "$1020.56",
        float: 0.34054558,
        exterior: "Field-Tested",
        rarity: "Covert",
        paintIndex: "707",
      },
    ],
  },
  {
    title: "DOTA2",
    icon: {
      name: "dota2",
      category: "default",
    },
    skins: [
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
        old_price: "$2395.16",
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
        old_price: "$2395.16",
        float: 0.34054558,
        exterior: "Field-Tested",
        rarity: "Covert",
        paintIndex: "707",
      },
    ],
  },
];
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
