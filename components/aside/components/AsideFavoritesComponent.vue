<template>
  <div class="aside-favorites">
    <a href="#" class="aside-favorites__header">
      <span class="aside-favorites__header-title">Favorites</span>
      <button class="aside-favorites__header-btn btn btn--sm btn--hollow">
        <IconComponent class="icon--sm" name="arrow-right-3" />
      </button>
    </a>
    <div class="aside-favorites__list">
      <a href="#" v-for="(item, i) in skins" :key="i" class="aside-favorites__item">
        <ImgComponent class="aside-favorites__item-img" :src="item.img" :loader="false" />
        <span class="aside-favorites__item-title">{{ item.title }}</span>
        <IconComponent class="aside-favorites__item-icon" name="arrow-right-1" />
      </a>
    </div>
  </div>
</template>

<script setup>
const skins = [
  {
    title: "MAC-10 | Propaganda",
    img: "/images/tmp/skin_1.png",
  },
  {
    title: "★ Kukri Knife | Case Hardened",
    img: "/images/tmp/skin_2.png",
  },
  {
    title: "AK-47 | Inheritance",
    img: "/images/tmp/skin_3.png",
  },
  {
    title: "StatTrak™ MAC-10 | Heat (Factory New)",
    img: "/images/tmp/skin_4.png",
  },
  {
    title: "★ Bayonet | Doppler",
    img: "/images/tmp/skin_5.png",
  },
];
</script>

<style lang="stylus">
@import "../styles/mixins/maxlines.styl"
.aside-favorites {
	&__header {
		display flex
		align-items center
		gap 15px
		padding 10px
		padding-left 20px
		color var(--gray)

		&-title {
			text-transform uppercase
			flex-grow 1
		}

		&-btn {
			width 30px
			height 30px
		}
	}

	&__list {
		display flex
		flex-direction column
		gap: 5px
	}

	&__item {
		display flex
		align-items center
		gap: 15px
		padding: 4px
		padding-right 22px
		border-radius var(--main-radius)
		background: var(--dark-light, #011D2D);
		border: 1px solid var(--dark-light-2, #1F3B4B);
		transition var(--transition)

		&:hover {
			border-color var(--main)
		}

		&-img {
			width 50px
			height 50px
			flex-shrink 0
			padding: 5px
			border-radius: var(--small-radius)
			object-fit contain
			background: var(--dark, #00141F);
		}

		&-title {
			flex-grow 1
			font-size 0.8125rem
			line-height normal
			font-weight 700
			maxlines(2)
		}

		&-icon {
			color var(--gray-dark-2)
			width 14px
			height 14px
		}
	}
}
</style>
