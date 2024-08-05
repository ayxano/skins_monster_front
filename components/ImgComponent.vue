<template>
  <img
    :src="srcPath"
    :alt="alt"
    loading="lazy"
    class="img"
    decoding="async"
    :class="{ lazy: loader && !src, loaded, 'img--contain': contain, 'img--no-user': user && !img }"
    @load="loaded = true"
    @error="loaded = true"
  />
</template>

<script>
export default {
  name: "ImgComponent",
  props: {
    src: String,
    title: String,
    img: {
      type: Object,
      default: () => {},
    },
    quality: {
      type: String,
      default: "90",
    },
    width: [Number, String],
    height: [Number, String],
    loader: {
      type: Boolean,
      default: true,
    },
    contain: Boolean,
    user: Boolean,
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    alt() {
      return this.img?.alt || this.title || "";
    },
    srcPath() {
      return this.src || this.source;
    },
    source() {
      if (this.img && this.img.path) {
        return `${process.env.HOST_ENDPOINT}/storage/${this.img.path}`;
      }
      return this.user ? "/svg/icons/user.svg" : "/images/no-image.jpg";
    },
  },
};
</script>

<style lang="stylus">
.img {
  object-fit cover
  object-position center

  &--contain {
    object-fit contain
  }

	&--no-user {
		padding: 10px
	}
}

.lazy {
  opacity 0
  transition var(--transition)

  &.loaded {
    opacity 1
  }
}
</style>
