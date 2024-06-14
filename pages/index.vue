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

const welcome_banners = ref([]);
const popular_skins = ref([]);
const advantages = ref([]);
const faqCategories = ref([]);
const reviews = ref([]);

onMounted(get);

async function get() {
  query("/skins", {
    limit: 8,
    page: 1,
  }).then(({ items }) => {
    console.log("popular_skins", items);
    popular_skins.value = items;
  });

  query("/banners", {
    page: 1,
    first: 5,
  }).then(({ data }) => {
    console.log("banners", data);
    welcome_banners.value = data;
  });

  query("/advantages", {
    page: 1,
    first: 4,
  }).then(({ data }) => {
    console.log("advantages", data);
    advantages.value = data;
  });

  query("/faq/categories", {
    page: 1,
    first: 10,
  }).then(({ data }) => {
    console.log("categories", data);
    faqCategories.value = data;
  });

  query("/reviews", {
    page: 1,
    first: 10,
  }).then(({ data }) => {
    console.log("reviews", data);
    reviews.value = data;
  });
}
</script>

<style lang="stylus">
.home-page {}
</style>
