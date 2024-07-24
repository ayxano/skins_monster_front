<template>
  <div class="socials" :class="{ 'socials--small': small }">
    <a
      class="socials-item btn btn--lg btn--dark-light"
      v-for="(item, i) in socials"
      :key="i"
      :href="item.link"
      rel="nofollow"
      :title="item.title"
      target="_blank"
    >
      <ImgComponent :img="item.icon" />
    </a>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";
import { computed } from "vue";

defineProps({
  small: Boolean,
});

const globalStore = useGlobalStore();

const socials = computed(() => {
  return globalStore.company?.socials || [];
});
</script>

<style lang="stylus">
.socials {
	display flex
	align-items center
	gap: 5px

	&--small {
		&-item.btn {
			width 40px
			height 40px

			.icon,
			.img {
				width 16px
				height 16px
			}
		}
	}

	&-item.btn {
		width 50px
		height 50px
		border-radius 50%
		flex-shrink 0
		padding: 10px

		.icon,
		.img {
			width 20px
			height 20px
		}
	}
}
</style>
