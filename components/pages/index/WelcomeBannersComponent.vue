<template>
  <div v-if="list && list.length" class="welcome-banners">
    <SliderComponent
      :items="list"
      :slider-options="sliderOptions"
      v-slot="{ item }"
      class="welcome-banners__slider"
      hide-arrows
    >
      <a href="#" class="welcome-banners__item hover-image" target="_blank">
        <ImgComponent class="welcome-banners__item-img" :img="item.desktop_image" />
        <ImgComponent
          class="welcome-banners__item-img welcome-banners__item-img--mobile"
          :img="item.mobile_image"
        />
      </a>
    </SliderComponent>
    <div class="welcome-banners__bullets"></div>
  </div>
</template>

<script setup>
import SliderComponent from "~/components/SliderComponent.vue";
import { Pagination } from "swiper/modules";

defineProps({
  list: Array,
});

const sliderOptions = {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".welcome-banners__bullets",
    clickable: true,
  },
};

// const list = [
//   {
//     title: "Buy skins",
//     img: "/images/tmp/slider_1.jpg",
//     img_mobile: "/images/tmp/slider_1_mobile.jpg",
//   },
//   {
//     title: "Buy skins",
//     img: "/images/tmp/slider_1.jpg",
//     img_mobile: "/images/tmp/slider_1_mobile.jpg",
//   },
//   {
//     title: "Buy skins",
//     img: "/images/tmp/slider_1.jpg",
//     img_mobile: "/images/tmp/slider_1_mobile.jpg",
//   },
//   {
//     title: "Buy skins",
//     img: "/images/tmp/slider_1.jpg",
//     img_mobile: "/images/tmp/slider_1_mobile.jpg",
//   },
// ];
</script>

<style lang="stylus">
.welcome-banners {
	position relative
	--swiper-pagination-bullet-horizontal-gap: 5px
	+below(480px) {
		margin: 0 calc(var(--sides-padding) * -1)
	}

	&__item {
		display flex
		height 100%

		&-img {
			+above(481px) {
				border-radius: var(--main-radius)
			}

			&:not(&--mobile) {
				+below(480px) {
					display none
				}
			}

			&--mobile {
				+above(481px) {
					display none
				}
			}
		}
	}

	&__bullets {
		&.swiper-pagination-bullets {
			position absolute
			bottom 50px
			left 7.2%
			z-index 1
			width auto
			height 7px
			+below(640px) {
				display none
			}
		}

		.swiper-pagination-bullet {
			height 7px
			width 7px
			border-radius 100px
			background var(--white)
			transition var(--transition)

			&:hover {
				opacity 1
			}

			&:first-child {
				margin-left 0
			}

			&-active {
				width 150px
				background var(--white)
			}
		}
	}
}
</style>
