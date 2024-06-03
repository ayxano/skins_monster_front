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
        <button @click.prevent v-if="link.menu" class="aside-nav__link-menu btn btn--sm btn--dark-light">
          <IconComponent name="menu-1" class="icon--sm" />
        </button>
      </nuxt-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "#app";

defineProps({
  links: Array,
});

const currentRoute = useRoute();

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
