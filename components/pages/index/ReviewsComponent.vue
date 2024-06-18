<template>
  <div v-if="list && list.length" id="reviews" class="reviews">
    <h3 class="reviews-title">Reviews</h3>
    <div class="reviews-content">
      <SliderComponent :slider-options="sliderOptions" :items="list" v-slot="{ item }" class="reviews-slider">
        <div class="reviews-slider__item" data-size="100px">
          <ImgComponent class="reviews-slider__item-img" :img="item.image" />
        </div>
      </SliderComponent>
      <div v-if="active" class="reviews-author">
        <span class="reviews-author__quote">
          {{ active.content }}
        </span>
        <span class="reviews-author__name">{{ active.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import SliderComponent from "~/components/SliderComponent.vue";
import { ref, computed } from "vue";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const sliderOptions = {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  slideToClickedSlide: true,
  breakpoints: {
    400: {
      spaceBetween: 40,
    },
    786: {
      spaceBetween: 80,
    },
  },
  on: {
    slideChange(swiper) {
      activeIndex.value = swiper.activeIndex || 0;
    },
  },
};

const activeIndex = ref(0);

const active = computed(() => {
  return props.list[activeIndex.value];
});
</script>

<style lang="stylus">
.reviews {
	border-radius: var(--main-radius)
	border: 1px solid var(--dark-light-2, #1F3B4B);
	padding: 50px
	+below(768px) {
		padding: 30px
	}
	+below(540px) {
		padding: 0
		border none
	}

	&-content {
		display flex
		flex-direction column
		align-items center
		gap: 30px
		padding: 0 32px
		+below(540px) {
			padding: 0
			margin: 0 calc(var(--sides-padding) * -1)
		}
	}

	&-slider {
		&__item {
			width 60px
			height: 60px
			margin auto
			transition transform var(--transition)

			&-img {
				border-radius 50%
				transition box-shadow var(--transition)
			}
		}

		.swiper {
			overflow-y visible
		}

		.swiper-slide {
			width: 100px
			height: 100px
			display flex
		}

		.swiper-slide-prev,
		.swiper-slide-next {
			.reviews-slider__item {
				transform scale(1.33333)
			}
		}

		.swiper-slide-active {
			.reviews-slider__item {
				transform scale(1.66666)

				&-img {
					box-shadow: 0 10px 20px 0 var(--green-2-o3)
				}
			}
		}
	}

	&-author {
		display flex
		flex-direction column
		align-items center
		gap 20px
		text-align center
		max-width 532px
		+below(540px) {
			padding: 0 var(--sides-padding)
		}

		&__quote {
			+below(540px) {
				font-size 0.875rem
			}
		}

		&__name {
			font-size: 0.875rem
			font-weight: 700;
			color var(--white-o5)
		}
	}
}
</style>
