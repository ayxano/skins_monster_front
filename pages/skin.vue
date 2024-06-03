<template>
  <main class="page skin-page">
    <div class="page__inner">
      <BreadcrumbsComponent title="Doppler Phase 1" :links="breadcrumbs" />
      <div class="skin-page__content">
        <SkinPagePreviewComponent />
        <SkinPageAsideComponent />
      </div>
      <SkinsListComponent title="Similar items" :list="similar_skins" />
      <SkinsListComponent title="Recommended Gloves" :list="similar_skins" />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
const breadcrumbs = [
  {
    title: "Catalog",
    route: { name: "catalog" },
  },
  {
    title: "Knife",
  },
];

const similar_skins = [
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
.skin-page {
	&__content {
		display grid
		grid-template-columns 6fr 4fr
		grid-gap var(--gap)
	}
}
</style>
