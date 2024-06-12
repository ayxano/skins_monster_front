<template>
  <div class="benefits">
    <div v-for="(item, i) in list" :key="i" class="benefits-item">
      <IconComponent class="benefits-item__icon" :name="item.icon" />
      <span class="benefits-item__title">{{ item.title }}</span>
      <span class="benefits-item__subtitle">{{ item.subtitle }}</span>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    title: "Trade skins",
    subtitle: "Upgrade your skins to the latest collections easily and safely.",
    icon: "convert-3d-cube",
  },
  {
    title: "Buy skins",
    subtitle: "Explore our CS2 marketplace for the best deals.",
    icon: "money-recive",
  },
  {
    title: "Sell skins",
    subtitle: "Sell your skins quickly for instant cash or list them for sale.",
    icon: "money-send",
  },
  {
    title: "Free giveaways",
    subtitle: "Join us and free giveaways to win exclusive CS2 skins.",
    icon: "discount-shape",
  },
];
</script>

<style lang="stylus">
.benefits {
	display grid
	grid-template-columns repeat(4, 1fr)
	gap: var(--gap)
	+below(768px) {
		grid-template-columns repeat(2, 1fr)
	}

	&-item {
		padding: 20px 15px
		display flex
		flex-direction column
		gap: 15px
		align-items center
		text-align center

		&__icon {
			width 60px
			height 60px
			color var(--main)
			+below(540px) {
				width 40px
				height 40px
			}
		}

		&__title {
			font-weight: 700;
			+below(480px) {
				font-size 0.875rem
			}
		}

		&__subtitle {
			color var(--gray-dark)
			font-size 0.75rem
			line-height normal
		}
	}
}
</style>
