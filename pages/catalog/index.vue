<template>
  <main class="page catalog-page">
    <div class="page__inner catalog-page__inner">
      <BreadcrumbsComponent title="Catalog" subtitle="1,080" />
      <div class="catalog-page__body">
        <CatalogFiltersComponent />
        <SkinsListComponent :list="list" />
        <PaginationComponent @change="paginate" :page="meta.page" :meta="meta" />
      </div>
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import PaginationComponent from "~/components/Pagination.vue";
import { ref } from "vue";

const meta = ref({
  page: 1,
  total: 100,
  perPage: 16,
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
];

function paginate(page) {
  meta.value.page = page;
}
</script>

<style lang="stylus">
.catalog-page {
	&__body {
		display flex
		flex-direction column
		gap: var(--gap)
	}
}
</style>
