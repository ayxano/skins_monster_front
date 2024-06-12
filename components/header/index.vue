<template>
  <header class="header" :class="{ 'header--without-search': !showSearch }">
    <nuxt-link :to="{ name: 'index' }" class="header-logo">
      <ImgComponent src="/images/logo-small.svg" class="aside__logo-img" :loader="false" />
    </nuxt-link>
    <InputComponent
      v-if="showSearch"
      class="header-search"
      v-model="search"
      placeholder="Skins search"
      icon-position="right"
    >
      <template #icon>
        <IconComponent name="search-normal-1" />
      </template>
    </InputComponent>
    <SocialsComponent class="header-socials" />
    <HeaderActionsComponent />
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "#app";

const route = useRoute();
const search = ref("");

const showSearch = computed(() => {
  return !["catalog"].includes(route.name);
});
</script>

<style lang="stylus">
.header {
	display flex
	align-items center
	gap: 30px
	justify-content space-between
	padding: 40px 0
	+below(1024px) {
		padding: 30px 0
	}

	&--without-search {
		justify-content flex-end
	}

	&-logo {
		height 50px
		width auto
		display flex
		+above(1025px) {
			display none
		}
	}

	&-search {
		width 50%
		+below(1024px) {
			width	auto
			flex-grow 1
		}
		+below(720px) {
			display none
		}
	}

	&-socials {
		+below(1100px) {
			display none
		}
	}
}
</style>
