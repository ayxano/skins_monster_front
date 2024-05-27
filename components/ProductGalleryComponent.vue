<template>
  <div
    class="product-gallery"
    :class="{
      'product-gallery--controls': items && items.length && items.length > 1,
    }"
  >
    <div @click="showImagesModal" class="product-gallery__image">
      <template v-if="isImagesModal">
        <button @click="prev" class="product-gallery__btn product-gallery__btn-prev btn">
          <IconComponent name="arrow-left-1" />
        </button>
        <button @click="next" class="product-gallery__btn product-gallery__btn-next btn">
          <IconComponent name="arrow-right-1" />
        </button>
      </template>
      <!--      <ImgZoomComponent :img="activeItem" width="900" height="900">-->
      <div class="product-gallery__image-ratio">
        <div class="ratio-container">
          <div v-if="activeItem?.link">
            <iframe
              width="424"
              height="350"
              :src="youtubeLink"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <ImgComponent
            v-else
            :img="activeItem"
            width="900"
            height="900"
            :default-alt="defaultAlt"
            contain
            :loader="false"
          />
        </div>
      </div>
      <!--      </ImgZoomComponent>-->
    </div>
    <ProductParamSlider
      v-if="items && items.length"
      v-slot="{ item }"
      :items="items"
      :slider-options="sliderOptions"
      ref="params"
      @prev="prev"
      @next="next"
    >
      <label
        class="product-gallery__slider-img"
        :class="{ 'product-gallery__slider-img--active': active === item.id }"
      >
        <input type="radio" v-show="false" :value="item.id" v-model="active" />
        <template v-if="item?.link">
          <ImgComponent width="400" height="400" :src="youtubePreview(item)" />
        </template>
        <template v-else>
          <ImgComponent :img="item" width="400" height="400" />
        </template>
      </label>
    </ProductParamSlider>
  </div>
</template>

<script>
import ProductParamSlider from "~/components/pages/product/ProductParamSlider.vue";

export default {
  name: "ProductGalleryComponent",
  components: { ProductParamSlider },
  props: {
    defaultAlt: String,
    items: {
      type: Array,
      default: () => [],
    },
    head_img: Object,
    firstActiveItem: Object,
    isModal: Boolean, // модалка с предварительным просмотром товара
    isImagesModal: Boolean, // модалка для просмотра фотографий товара
  },
  data() {
    return {
      active: null,
      sliderOptions: {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: false,
        clickable: false,
        breakpoints: {
          0: {
            direction: "horizontal",
          },
          681: {
            direction: "vertical",
          },
          1025: {
            direction: "horizontal",
          },
        },
      },
    };
  },
  computed: {
    activeItem() {
      return this.items.find((i) => i.id === this.active) || this.head_img;
    },
    youtubeLink() {
      return `https://www.youtube.com/embed/${this.getYouTubeVideoId(this.activeItem?.link)}`;
    },
  },
  created() {
    if (this.items && this.items.length) {
      this.active = this.items[0].id;
    }
  },
  mounted() {
    if (this.isImagesModal) {
      document.addEventListener("keydown", this.handleKeyDown);
    }
    this.getYouTubeVideoId(this.activeItem?.link);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", () => {});
  },
  watch: {
    items() {
      if (this.items && this.items.length) {
        this.active = this.items[0].id;
      }
    },
  },
  methods: {
    getYouTubeVideoId(url) {
      // Используем регулярное выражение для поиска идентификатора видео в URL
      const regex =
        /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
      const match = url?.match(regex);
      return match ? match[1] : null;
    },
    youtubePreview(item) {
      return `https://img.youtube.com/vi/${this.getYouTubeVideoId(item.link)}/0.jpg`;
    },
    handleKeyDown(e) {
      if ([37, 38].includes(e.keyCode)) {
        this.prev();
      }
      if ([39, 40].includes(e.keyCode)) {
        this.next();
      }
    },
    next() {
      let currentIndex = this.items.findIndex((item) => item.id === this.active);
      // если есть текущий элемент и он не последний
      if (![-1, this.items.length - 1].includes(currentIndex) && this.$refs.params) {
        this.active = this.items[currentIndex + 1]?.id;
        this.$refs.params.slideNext();
      }
    },
    prev() {
      let currentIndex = this.items.findIndex((item) => item.id === this.active);
      // если есть текущий элемент и он не первый
      if (![-1, 0].includes(currentIndex) && this.$refs.params) {
        this.active = this.items[currentIndex - 1]?.id;
        this.$refs.params.slidePrev();
      }
    },
    showImagesModal() {
      // if (!this.isModal && !this.isImagesModal) {
      //   this.$store.state._modals.push({
      //     component: ImagesGalleryModal,
      //     options: {
      //       images: this.items,
      //       head_img: this.head_img,
      //       defaultAlt: this.defaultAlt,
      //       activeItem: this.activeItem,
      //     },
      //     fullHeight: true,
      //   });
      // }
    },
  },
};
</script>

<style lang="stylus">
@import "../styles/mixins/ratio.styl"
.product-gallery {
  display flex
  flex-direction column
  align-items center
  gap 7px
  +below(1024px) {
    flex-direction row-reverse
    justify-content: flex-end
    .param-slider__items {
      height: 395px;
      width: 70px;
      margin: 0;
    }
    .param-slider {
      width: fit-content !important;
      align-self: start !important;
    }
  }

  +below(680px) {
    flex-direction column
    .param-slider__items {
      height: 100%;
      width: 100%;
      margin: 0;
    }
    .param-slider {
      width 100% !important
      align-self center !important
    }
  }

  .param-slider {
    width 100%
    max-width 460px
    margin 0 auto
    align-self center
    padding 0 40px
    flex-shrink: 0
    +below(1024px) {
      padding: 0
      margin: 0
    }
    +below(480px) {
      padding: 0
    }
  }

  &__slider-img {
    display flex
    align-items center;
    justify-content center
    background var(--gray-10, #F2F5F7)
    border: 1px solid transparent;
    border-radius: var(--small-radius, 5px)
    width 68px
    height 68px
    flex-shrink: 0
    overflow hidden
    cursor pointer
    transition border-color var(--transition)

    &:not(&--active):hover {
      border-color var(--main)
    }

    &--active {
      border: 1px solid var(--black, #000);
    }

    img {
      max-width 100%
      max-height 100%
      object-fit contain
      object-position center
    }
  }

  &__image {
    height auto
    width 100%
    max-width 100%
    display flex
    justify-content center
    align-items center
    overflow hidden
    border-radius: var(--small-radius, 5px)
    border-radius 16px
    +below(1350px) {
      max-width 430px
      max-height 430px
      margin: 0 auto
    }

    &-ratio {
      width 100%
      height 100%
      ratio(1, 1, contain)

      img {
        padding 20px
      }

			iframe {
				max-width 100%
			}

      .ratio-container {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
