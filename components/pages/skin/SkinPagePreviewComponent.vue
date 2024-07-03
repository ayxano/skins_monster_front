<template>
  <div class="skin-page-preview">
    <div class="skin-page-preview__img">
      <div class="ratio-container">
        <ImgComponent :src="skinImg" />
      </div>
    </div>
    <div class="skin-page-preview__actions">
      <button @click="addToFavorites" class="skin-page-preview__action btn btn--md btn--dark-light">
        <LoadingCircleIndicator v-if="favoritesLoading" title="" />
        <IconComponent v-else name="star" />
        <span>Add to favorite</span>
      </button>
      <a :href="skinImg" class="skin-page-preview__action btn btn--md btn--dark-light" target="_blank">
        <IconComponent name="gallery-add" />
        <span>Screenshot</span>
      </a>
      <a
        v-if="data.extra && data.extra.inspect_link"
        :href="data.extra.inspect_link"
        class="skin-page-preview__action btn btn--md btn--dark-light"
      >
        <IconComponent name="mouse-circle" />
        <span>Inspect in game</span>
      </a>
      <a :href="steamLink" class="skin-page-preview__action btn btn--md btn--dark-light" target="_blank">
        <IconComponent category="default" name="steam" />
        <span>View at Steam</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";

const props = defineProps({
  data: Object,
  addToFavorites: Function,
  inCart: Boolean,
  inFavorites: Boolean,
  favoritesLoading: Boolean,
  float: Object,
});

const skinImg = computed(() => {
  const steamUrl = "https://steamcommunity-a.akamaihd.net/economy/image/";
  if (props.data.icon_url_large) {
    return steamUrl + props.data.icon_url_large;
  }
  return steamUrl + props.data.icon_url;
});

const steamLink = computed(() => {
  return `https://steamcommunity.com/market/listings/${props.data.appid}/${props.data.hash_name}`;
});
</script>

<style lang="stylus">
@import "../styles/mixins/ratio.styl"
.skin-page-preview {
	display flex
	flex-direction column
	gap: var(--gap)

	&__img {
		ratio(1, 1, contain)

		img {
			border-radius var(--main-radius, 10px)
			padding: 10px
			border: 1px solid var(--dark-light-2, #1F3B4B);
			background: var(--dark, #00141F);
			object-fit contain
		}
	}

	&__actions {
		display flex
		flex-wrap wrap
		gap: 20px
		+below(768px) {
			gap: 10px
		}
	}

	&__action {
		border: 1px solid var(--dark-light-2, #1F3B4B);
		background: var(--black-o05)

		.icon {
			width 20px
			height 20px
		}
	}
}
</style>
