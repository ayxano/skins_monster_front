<template>
  <img
    :src="srcPath"
    :alt="alt"
    loading="lazy"
    class="img"
    decoding="async"
    :class="{ lazy: loader, loaded, 'img--contain': contain }"
    @load="loaded = true"
    @error="loaded = true"
  />
</template>

<script>
import { useDefaultStore } from "~/stores/default";

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
    host_endpoint() {
      return useDefaultStore().HOST_ENDPOINT;
    },
    media_endpoint() {
      return useDefaultStore().MEDIA_ENDPOINT;
    },
    srcPath() {
      return this.src || this.source;
    },
    source() {
      let link = null;
      if (this.img && this.img.id) {
        const urlParams = new URLSearchParams();
        if (this.quality) urlParams.append("quality", this.quality);
        if (this.width) urlParams.append("width", "" + this.width);
        if (this.height) urlParams.append("height", "" + this.height);
        const urlParamsString = urlParams.toString();
        if (this.img.links) {
          link = this.img.links.find((i) => i.query === urlParamsString);
          if (link) {
            return this.media_endpoint + link.path;
          }
        }
        return `${this.host_endpoint}/action/img/${this.img.id}?${urlParamsString}`;
      }
      return "/images/no-image.webp";
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
}

.lazy {
  opacity 0
  transition var(--transition)

  &.loaded {
    opacity 1
  }
}
</style>
