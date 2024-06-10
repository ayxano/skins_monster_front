<template>
  <nav class="aside-nav">
    <div v-for="(link, i) in links" :key="i" class="aside-nav__item">
      <nuxt-link
        :to="link.route"
        class="aside-nav__link no-hover"
        :class="{ 'aside-nav__link--active': isRouteActive(link.route) }"
      >
        <IconComponent class="aside-nav__link-icon" :name="link.icon" />
        <span class="aside-nav__link-title">{{ link.title }}</span>
        <div v-if="link.menu" class="aside-nav__link-menu">
          <DropdownComponent v-model:visible="menuVisible" position="bottom-right">
            <template #default>
              <button
                :class="{ 'aside-nav__link-menu-btn--close': menuVisible }"
                class="aside-nav__link-menu-btn btn btn--sm btn--dark-light"
              >
                <IconComponent :key="menuVisible" :name="menuVisible ? 'close' : 'menu-1'" class="icon--sm" />
              </button>
            </template>
            <template #content>
              <AsideCategoriesComponent />
            </template>
          </DropdownComponent>
        </div>
      </nuxt-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "#app";
import { ref } from "vue";

defineProps({
  links: Array,
});

const currentRoute = useRoute();
const menuVisible = ref(false);

function isRouteActive(route) {
  if (route.hash) {
    return route.name === currentRoute.name && route.hash === currentRoute.hash;
  }
  return route.name === currentRoute.name;
}
</script>

<style lang="stylus">
@import "../styles/parts/aside-nav.styl"
</style>
