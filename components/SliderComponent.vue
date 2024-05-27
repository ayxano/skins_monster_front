<template>
  <div class="slider" :class="{ 'slider--no-sides': noSides }" v-if="items && items.length">
    <div class="slider__container">
      <div class="slider__header" :class="{ 'slider__header--column': headerColumn }" v-if="title">
        <h2 class="slider__title">{{ title }}</h2>
        <slot name="header">
          <nuxt-link :to="route" class="slider__show-more" v-if="routeTitle">
            <span>{{ routeTitle }}</span>
          </nuxt-link>
          <nuxt-link
            :to="route"
            v-if="routeTitle"
            class="btn btn--main-hollow btn--md slider__show-more--mobile"
          >
            {{ routeTitle }}
          </nuxt-link>
        </slot>
      </div>
      <div :class="{ 'slider__items--visible': ready }" class="slider__items">
        <div class="swiper" ref="items">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, i) in items" :key="`slide_${i}_${item.id}`">
              <slot :item="item"></slot>
            </div>
          </div>
        </div>
        <SliderArrowsComponent
          v-if="swiper && !hideArrows && canShowArrows"
          @left="swiper.slidePrev()"
          @right="swiper.slideNext()"
          :swiper="swiper"
          :isEnd="isEnd"
          :isBeginning="isBeginning"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css";

export default {
  name: "SliderComponent",
  props: {
    title: String,
    routeTitle: String,
    items: Array,
    hideArrows: Boolean,
    sideArrows: Boolean,
    headerColumn: Boolean,
    noSides: Boolean, // убрать отступы по бокам для слайдера
    route: {
      type: Object,
      default() {
        return {
          name: "",
        };
      },
    },
    sliderOptions: {
      type: Object,
      default() {
        return {
          slidesPerView: "auto",
          spaceBetween: 16,
          pagination: false,
          clickable: false,
        };
      },
    },
  },
  data() {
    return {
      swiper: null,
      ready: false,
      isBeginning: false,
      isEnd: false,
    };
  },
  watch: {
    items(val) {
      if (val && val.length) {
        this.init();
      }
    },
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
    this.swiper?.destroy();
  },
  computed: {
    canShowArrows() {
      let slidesPerView = this.getCurrentBreakpoint().slidesPerView;
      if (typeof slidesPerView === "string") {
        return slidesPerView === "auto";
      }
      if (typeof slidesPerView === "number") {
        return this.items.length > slidesPerView;
      }
      return false;
    },
  },
  methods: {
    getCurrentBreakpoint() {
      if (this.sliderOptions.breakpoints && typeof window !== "undefined") {
        let returnCandidate = this.sliderOptions;
        Object.keys(this.sliderOptions.breakpoints).forEach((key) => {
          if (window.innerWidth > parseInt(key)) {
            returnCandidate = this.sliderOptions.breakpoints[key];
          }
        });
        return returnCandidate;
      }
      return this.sliderOptions;
    },
    init() {
      setTimeout(() => {
        if (this.$refs.items) {
          this.swiper = new Swiper(this.$refs.items, this.sliderOptions);
          this.swiper.on("slideChange", this.updateArrows);
          this.updateArrows();
          this.ready = true;
        }
      }, 100);
    },
    updateArrows() {
      this.isBeginning = this.swiper.isBeginning;
      this.isEnd = this.swiper.isEnd;
    },
  },
};
</script>

<style lang="stylus">
.slider {
  display flex
  justify-content center
  align-items center
  width: 100%;
	user-select: none

  &--no-sides {
    //.swiper {
    //  width auto
    //  max-width 100%
    //  display inline-flex
    //  margin-left calc(-1 * var(--sides-padding))
    //  margin-right calc(-1 * var(--sides-padding))
    //
    //  &-wrapper {
    //    padding-left var(--sides-padding)
    //    padding-right var(--sides-padding)
    //  }
    //}
  }

  .slider-arrows {
    +below(1024px) {
      display none
    }
  }

  &__container {
    width 100%
  }

  &__header {
    display flex
    align-items baseline
    width 100%
    margin-bottom 30px
    gap: 30px
    +below(1024px) {
      margin-bottom 24px
      gap 13px
      flex-direction column
      align-items center
    }
    //+below(860px) {
    //  display grid
    //  grid-gap 16px
    //  justify-content stretch
    //
    //  .btn {
    //    width 100%
    //    justify-content center
    //  }
    //}

    &--column {
      flex-direction column
      gap 24px
    }
  }

  &__title {
    margin 0
    text-align center
  }

  &__show-more {
    color: var(--link, #007AFF);
    font-size: 0.9375rem
    font-weight: 300;
    line-height: 19px;
    flex-shrink 0
    +below(1024px) {
      display none
    }

    &--mobile {
      +above(1025px) {
        display none
      }
    }
  }

  &__items {
    position relative
    //width 100%
    opacity 0
    transition var(--transition)

    &--visible {
      opacity 1
    }
  }
}
</style>
