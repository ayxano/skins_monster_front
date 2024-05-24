<template>
  <main class="page home-page">
    <SkinsListComponent title="Popular" />
    <BenefitsComponent />
  </main>
</template>

<script setup>
import { useHead } from "#app";

useHead({
  titleTemplate: "",
});
</script>

<style lang="stylus">
.home-page {
	display flex
	flex-direction column
	gap: 50px
}
</style>
