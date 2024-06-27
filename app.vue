<template>
  <div id="app" :class="{ 'app--full-page': fullPage }">
    <div class="container-padding">
      <div class="app__inner">
        <AsideComponent v-show="!fullPage" />
        <div class="app__content">
          <HeaderComponent v-show="!fullPage" />
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
          <FooterComponent v-show="!fullPage" />
        </div>
      </div>
    </div>
  </div>
  <ModalsComponent />
  <MenuComponent />
</template>

<style lang="stylus">
@import "/styles/style.styl";
</style>

<script setup>
import { useHead, useRoute } from "#app";
import HeaderComponent from "~/components/header/index.vue";
import FooterComponent from "~/components/footer/index.vue";
import AsideComponent from "~/components/aside/index.vue";
import { onMounted, computed } from "vue";
import ModalsComponent from "~/components/modals/index.vue";
import MenuComponent from "~/components/menus/index.vue";

useHead({
  title: "Skins Monster - Buy CS2/Dota 2 skins",
  titleTemplate: "%s | Skins Monster",
  meta: [
    {
      name: "description",
      content:
        "Buy skins at a good price in Skins Monster, you can buy CS:GO/CS2/Dota 2 skins quickly and profitably. Skins market with a large number of CS:GO/CS2/Dota 2 items available for buy",
    },
  ],
});

const route = useRoute();

const fullPage = computed(() => {
  return route.meta.fullPage || route.query.fullpage;
});
</script>

<style lang="stylus">
.app {
	&__inner {
		display grid
		grid-template-columns var(--aside-width) 1fr
		gap: 40px
		height 100%
		+below(1024px) {
			grid-template-columns 1fr
		}
	}

	&__content {
		display flex
		flex-direction column
		flex-grow 1
	}
}
</style>
