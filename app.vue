<template>
  <PerfectScrollbar>
    <NuxtPage />
  </PerfectScrollbar>
</template>

<style lang="stylus">
@import "styles/style.styl";
</style>

<script setup>
import { useHead } from "#app";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

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
</script>
