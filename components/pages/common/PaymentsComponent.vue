<template>
  <div class="payments">
    <div v-for="(item, i) in list" :key="i" class="payments__item">
      <img :src="item.img" alt="" :title="item.title" />
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    title: "visa",
    img: "/svg/default/visa.svg",
  },
  {
    title: "mastercard",
    img: "/svg/default/mastercard.svg",
  },
  {
    title: "G2A",
    img: "/svg/default/g2a.svg",
  },
  {
    title: "Bitcoin",
    img: "/svg/default/bitcoin.svg",
  },
  {
    title: "ethereum",
    img: "/svg/default/ethereum.svg",
  },
];
</script>

<style lang="stylus">
.payments {
	display flex
	align-items center
	gap: 30px
	justify-content center
	padding: 30px
	border-radius: var(--main-radius)
	border: 1px solid var(--dark-light-2, #1F3B4B);
	background: var(--dark-light, #011D2D);
	+below(640px) {
		padding: 10px
		gap 10px
	}
	+below(540px) {
		display none
	}

	&__item {
		width 100px
		height 50px
	}
}
</style>
