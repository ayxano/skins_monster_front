<template>
  <main class="page cabinet-page">
    <div class="page__inner">
      <BreadcrumbsComponent :title="activePage.title" />
      <div class="cabinet-page__content">
        <NuxtPage />
        <AsideNavComponent :links="pages" />
      </div>
      <SkinsListComponent v-if="activePage.favorites" title="Favorites" :list="list" />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "#app";

const route = useRoute();

const pages = [
  {
    title: "Profile",
    icon: "3d-rotate",
    route: { name: "cabinet-profile" },
    favorites: true,
    banner: true,
  },
  {
    title: "Settings",
    icon: "money-send",
    route: { name: "cabinet-settings" },
    favorites: false,
    banner: true,
  },
  {
    title: "Orders",
    icon: "receipt-item",
    route: { name: "cabinet-orders" },
    favorites: false,
    banner: true,
  },
  {
    title: "Favorites",
    icon: "messages-3",
    route: { name: "cabinet-favorites" },
    favorites: false,
    banner: true,
  },
];

const activePage = computed(() => {
  return pages.find((item) => route.name.includes(item.route.name)) || pages[0];
});

const list = [
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
];
</script>

<style lang="stylus">
.cabinet-page {
	&__content {
		display grid
		grid-template-columns 820fr 246fr
		grid-gap var(--gap)
	}
}
</style>
