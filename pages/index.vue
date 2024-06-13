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
    page: 1,
    // appid: 570,
    // query: "redline",
    // group_by: "hash_name",
  });
  popular_skins.value = items;

  const banners = await query("/banners", {
    page: 1,
    first: 5,
  });
  console.log("banner", banners);

  const advantages = await query("/advantages", {
    page: 1,
    first: 4,
  });
  console.log("advantages", advantages);

  const faqCategories = await query("/faq/categories", {
    page: 1,
    first: 10,
  });
  console.log("faqCategories", faqCategories);

  const reviews = await query("/reviews", {
    page: 1,
    first: 10,
  });
  console.log("reviews", reviews);
}
</script>

<style lang="stylus">
.home-page {}
</style>
