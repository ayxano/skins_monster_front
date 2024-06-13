<template>
  <div id="app">
    <div class="container-padding">
      <div class="app__inner">
        <AsideComponent />
        <div class="app__content">
          <HeaderComponent />
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
          <FooterComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import "/styles/style.styl";
</style>

<script setup>
import { useHead } from "#app";
import HeaderComponent from "~/components/header/index.vue";
import FooterComponent from "~/components/footer/index.vue";
import AsideComponent from "~/components/aside/index.vue";
import { onMounted } from "vue";
import { csrf, query } from "~/utils/global";
import { useGlobalStore } from "~/stores/global";

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

const globalStore = useGlobalStore();

onMounted(() => {
  csrf();
  getGlobalData();
});

async function getGlobalData() {
  globalStore.currencies = await query("/currency");
}
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
