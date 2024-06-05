<template>
  <div class="checkout-game">
    <div class="checkout-game__header">
      <IconComponent class="checkout-game__icon" :name="data.icon.name" :category="data.icon.category" />
      <span class="checkout-game__title">{{ data.title }}</span>
      <span class="checkout-game__count">{{ data.skins.length }} items</span>
    </div>
    <div class="checkout-game__body">
      <div class="checkout-game__skins">
        <SkinCardHorizontalComponent v-for="(item, i) in data.skins" :key="i" :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style lang="stylus">
.checkout-game {
	background: var(--dark-light, #011D2D);
	border-radius var(--main-radius)

	&__header {
		display flex
		align-items center
		gap: 10px
		padding: 10px 50px
		border-bottom: 1px solid var(--dark-light-2, #1F3B4B);
		height 75px
	}

	&__icon {
		padding: 5px
		width auto
		height 100%
		max-width 70px
		max-height 50px
	}

	&__title {
		flex-grow 1
		font-size: 0.875rem
		font-weight: 700;
	}

	&__count {
		color: var(--gray-dark-2, #516D7D);
		font-size: 0.875rem
	}

	&__body {
		padding: 40px
	}

	&__skins {
		display flex
		flex-direction column
		gap: 5px
	}
}
</style>
