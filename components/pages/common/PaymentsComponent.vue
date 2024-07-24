<template>
  <div class="payments">
    <div v-for="(item, i) in list" :key="i" class="payments__item" :title="item.title">
      <figure class="icon" v-html="item.icon"></figure>
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: Array,
});
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

		.icon {
			width 100%
			height 100%

			svg path {
				fill var(--white)
			}
		}
	}
}
</style>
