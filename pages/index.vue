<template>
  <main class="page home-page">
    <div class="page__inner">
      <!--      <LoadingCircleIndicator v-if="defaultStore.loading.length" />-->
      <WelcomeBannersComponent :list="welcome_banners" />
      <SkinsListComponent title="Popular" :list="popular_skins" row />
      <BenefitsComponent :list="advantages" />
      <FaqComponent :list="faqCategories" />
      <ReviewsComponent :list="reviews" />
      <PaymentsComponent />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { useHead } from "#app";
import { onMounted, ref } from "vue";
import { query } from "~/utils/global";
// import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
// import { useDefaultStore } from "~/stores/default";

useHead({
  titleTemplate: "",
});

// const defaultStore = useDefaultStore();
const welcome_banners = ref([]);
const popular_skins = ref([]);
const advantages = ref([]);
const faqCategories = ref([]);
const reviews = ref([]);

onMounted(get);

async function get() {
  const { data } = await query("/banners", {
    page: 1,
    first: 5,
    positions: ["after_header"],
  });
  welcome_banners.value = data;

  const { items } = await query("/skins", {
    limit: 8,
    page: 1,
  });
  popular_skins.value = items;

  query("/advantages", {
    page: 1,
    first: 4,
  }).then(({ data }) => {
    advantages.value = data;
  });

  query("/faq/categories", {
    page: 1,
    first: 10,
  }).then(({ data }) => {
    faqCategories.value = data;
  });

  query("/reviews", {
    page: 1,
    first: 10,
  }).then(({ data }) => {
    reviews.value = data;
  });
}
</script>

<style lang="stylus">
.home-page {}
</style>
