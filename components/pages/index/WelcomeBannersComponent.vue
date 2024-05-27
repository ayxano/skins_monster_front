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
    img: "/images/tmp/slider_2.jpg",
  },
  {
    title: "Buy skins",
    img: "/images/tmp/slider_2.jpg",
  },
  {
    title: "Buy skins",
    img: "/images/tmp/slider_2.jpg",
  },
  {
    title: "Buy skins",
    img: "/images/tmp/slider_2.jpg",
  },
];
</script>

<style lang="stylus">
.welcome-banners {
	&__item {
		&-img {
			border-radius: var(--main-radius)
		}
	}
}
</style>
