<template>
  <main class="page home-page">
    <div class="page__inner">
      <WelcomeBannersComponent />
      <SkinsListComponent title="Popular" :list="popular_skins" row />
      <BenefitsComponent />
      <FaqComponent />
      <ReviewsComponent />
      <PaymentsComponent />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { useHead } from "#app";
import { onMounted, ref } from "vue";
import { query } from "~/utils/global";

useHead({
  titleTemplate: "",
});

const popular_skins = ref([]);

onMounted(get);

async function get() {
  const { items } = await query("/skins", {
    limit: 8,
    // page: 1,
    appid: 730,
    // appid: 570,
    // query: "redline",
    // group_by: "hash_name",
  });
  popular_skins.value = items;
  console.log("items", items);
}
</script>

<style lang="stylus">
.home-page {}
</style>
