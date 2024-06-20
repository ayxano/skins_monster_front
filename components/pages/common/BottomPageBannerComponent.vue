<template>
  <nuxt-link :to="banner.link" v-if="banner" class="bottom-banner hover-image">
    <ImgComponent class="bottom-banner__img" :img="banner.desktop_image" />
    <ImgComponent class="bottom-banner__img bottom-banner__img--mobile" :img="banner.mobile_image" />
  </nuxt-link>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";
import { computed } from "vue";

const globalStore = useGlobalStore();

const banner = computed(() => {
  return globalStore.bottomBanner;
});
</script>

<style lang="stylus">
.bottom-banner {
	&__img {
		border-radius var(--main-radius)

		&:not(&--mobile) {
			+below(540px) {
				display none
			}
		}

		&--mobile {
			+above(541px) {
				display none
			}
		}
	}
}
</style>
