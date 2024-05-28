<template>
  <main class="page home-page">
		<div class="page__inner">
			<WelcomeBannersComponent />
			<SkinsListComponent title="Popular" :list="popular_skins" />
			<BenefitsComponent />
			<FaqComponent />
			<ReviewsComponent />
			<PaymentsComponent />
			<BottomPageBannerComponent />
		</div>
  </main>
</template>

<script setup>
import { useHead } from "#app";

useHead({
  titleTemplate: "",
});

const popular_skins = [
  {
    id: 1,
    title: "AK-47",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_1.png",
    price: "$778",
    float: 0.34054550528526306,
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
    float: 0.34054550528526306,
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
    float: 0.34054550528526306,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
    banned: true,
  },
  {
    id: 4,
    title: "Chrome Cannon",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_4.png",
    price: "$778",
    float: 0.34054550528526306,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 5,
    title: "Lore",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_5.png",
    price: "$778",
    float: 0.34054550528526306,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 6,
    title: "Doppler",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_6.png",
    price: "$880",
    float: 0.34054550528526306,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 7,
    title: "M-9",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_7.png",
    price: "$778",
    float: 0.34054550528526306,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 8,
    title: "Kilowatt Case",
    img: "/images/tmp/skin_card_8.png",
    price: "$880",
  },
];
</script>

<style lang="stylus">
.home-page {}
</style>
