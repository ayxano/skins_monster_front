<template>
  <div class="cabinet-favorites">
    <LoadingCircleIndicator v-if="loading" />
    <SkinsListComponent v-else-if="favorites && favorites.length" :list="favorites" />
    <span v-else>No favorites</span>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "~/stores/favorites";
import { computed } from "vue";
import { useDefaultStore } from "~/stores/default";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";

const favoritesStore = useFavoritesStore();
const defaultStore = useDefaultStore();

const loading = computed(() => {
  return defaultStore.loading.length;
});
const favorites = computed(() => favoritesStore.favorites || []);
</script>

<style lang="stylus">
.cabinet-favorites {
}
</style>
