<template>
  <main class="page home-page">
    <WelcomeBannersComponent />
    <SkinsListComponent title="Popular" />
    <BenefitsComponent />
    <FaqComponent />
    <ReviewsComponent />
    <PaymentsComponent />
    <BottomPageBannerComponent />
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
