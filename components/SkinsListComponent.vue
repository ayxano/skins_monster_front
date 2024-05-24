<template>
  <div class="skins-list">
    <div v-if="title" class="skins-list__header">
      <h3 class="skins-list__title no-margin">{{ title }}</h3>
      <a class="skins-list__more" href="#">Show more</a>
    </div>
    <div class="skins-list__content">
      <SkinCardComponent v-for="(item, i) in skins" :key="i" :data="item" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});

const skins = [
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
.skins-list {
	display flex
	flex-direction column
	gap: var(--gap)

	&__header {
		display flex
		align-items center
		gap: 20px
		justify-content space-between
	}

	&__more {
		font-size 0.875rem
		color var(--main)
		line-height 1.1
		border-bottom 1px solid transparent

		&:hover {
			border-color var(--main)
		}
	}

	&__content {
		display grid
		grid-template-columns repeat(auto-fit, minmax(200px, auto))
		grid-template-rows 2
		gap: var(--gap)
	}
}
</style>
