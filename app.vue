<template>
  <div id="app" :class="{ 'app--full-page': route.meta.fullPage }">
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
  <ModalsComponent />
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
import ModalsComponent from "~/components/modals/index.vue";
import { useRoute } from "#app";
import { useAuthStore } from "~/stores/auth";
import { useBasketStore } from "~/stores/basket";
import { useFavoritesStore } from "~/stores/favorites";

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
const globalStore = useGlobalStore();
const basketStore = useBasketStore();
const favoritesStore = useFavoritesStore();

onMounted(() => {
  // check if token expire
  csrf();
  getGlobalData();
});

function getGlobalData() {
  globalStore.getCurrency();

  try {
    basketStore.get();
    favoritesStore.get();
    const { data } = query("/user");
    console.log("user", data);
    useAuthStore().user = data;
  } catch (e) {
    console.error(e);
  }
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
