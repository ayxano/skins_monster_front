<template>
  <div class="cabinet-favorites">
    <SkinsListComponent :list="favorites" />
  </div>
</template>

<script setup>
import { useFavoritesStore } from "~/stores/favorites";
import { computed } from "vue";

const favoritesStore = useFavoritesStore();

const favorites = computed(() => favoritesStore.favorites || []);
</script>

<style lang="stylus">
.cabinet-favorites {
}
</style>
