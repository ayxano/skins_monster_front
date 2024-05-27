<template>
  <div class="slider-arrows">
    <button
      type="button"
      title="Left"
      class="slider-arrows__item slider-arrows__item--left"
      @click="$emit('left')"
      v-show="showPrev"
    >
      <IconComponent name="arrow-left-2" />
    </button>
    <button
      type="button"
      title="Right"
      class="slider-arrows__item slider-arrows__item--right"
      @click="$emit('right')"
      v-show="showNext"
    >
      <IconComponent name="arrow-right-3" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SliderArrowsComponent",
  props: {
    swiper: Object,
    isEnd: Boolean,
    isBeginning: Boolean,
  },
  computed: {
    showPrev() {
      return !this.isBeginning || this.swiper?.passedParams.loop;
    },
    showNext() {
      return !this.isEnd || this.swiper?.passedParams.loop;
    },
  },
};
</script>

<style lang="stylus">
.slider-arrows {
  z-index: 1;

  &__item {
    z-index: 1;
    margin auto
    background: var(--main);
    border: 1px solid var(--main)
		color: var(--dark)
    box-sizing: border-box;
    border-radius: 40px;
    width 40px
    height 40px
    display flex
    align-items center
    justify-content center
    cursor pointer
    transition var(--transition)

    &:not([disabled]):hover {
			transform: scale(1.1)
    }

    .icon {
      width 20px
      height 20px
    }

    &--left {
      position absolute
      left 0
      top 0
      bottom 0
      margin-left 0
      margin-right auto
      +below(1360px) {
        left: -19px
      }
    }

    &--right {
      position absolute
      right 0
      top 0
      bottom 0
      margin-left auto
      margin-right 0
      +below(1360px) {
        right -19px
      }
    }
  }
}
</style>
