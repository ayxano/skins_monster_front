<template>
  <div class="welcome-banners">
    <SliderComponent
      :items="list"
      :slider-options="sliderOptions"
      v-slot="{ item }"
      class="welcome-banners__slider"
      hide-arrows
    >
      <a href="#" class="welcome-banners__item hover-image" target="_blank">
        <ImgComponent class="welcome-banners__item-img" :src="item.img" />
      </a>
    </SliderComponent>
  </div>
</template>

<script setup>
import SliderComponent from "~/components/SliderComponent.vue";

const sliderOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
};

const list = [
  {
    title: "Buy skins",
    img: "/images/tmp/slider_1.jpg",
    img_mobile: "/images/tmp/slider_1_mobile.jpg",
  },
  {
    title: "Buy skins",
    img: "/images/tmp/slider_1.jpg",
    img_mobile: "/images/tmp/slider_1_mobile.jpg",
  },
  {
    title: "Buy skins",
    img: "/images/tmp/slider_1.jpg",
    img_mobile: "/images/tmp/slider_1_mobile.jpg",
  },
  {
    title: "Buy skins",
    img: "/images/tmp/slider_1.jpg",
    img_mobile: "/images/tmp/slider_1_mobile.jpg",
  },
];
</script>

<style lang="stylus">
.welcome-banners {
	&__item {
		display flex
		height 100%

		&-img {
			border-radius: var(--main-radius)
		}
	}
}
</style>
