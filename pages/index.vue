<template>
  <main class="page home-page">
    <div class="page__inner">
      <!--      <LoadingCircleIndicator v-if="defaultStore.loading.length" />-->
      <WelcomeBannersComponent :list="welcome_banners" />
      <SkinsListComponent title="Popular" :list="popular_skins" row />
      <BenefitsComponent :list="advantages" />
      <FaqComponent :list="faqCategories" />
      <ReviewsComponent :list="reviews" />
      <PaymentsComponent :list="payments" />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { useHead, useRoute } from "#app";
import { onMounted, computed } from "vue";
import { query } from "~/utils/global";
import { useHomeStore } from "~/stores/home";
import { scrollTo } from "~/utils/global";

useHead({
  titleTemplate: "",
});

const route = useRoute();
const homeStore = useHomeStore();

onMounted(get);

const welcome_banners = computed(() => homeStore.welcome_banners);
const popular_skins = computed(() => homeStore.popular_skins);
const advantages = computed(() => homeStore.advantages);
const faqCategories = computed(() => homeStore.faqCategories);
const reviews = computed(() => homeStore.reviews);
const payments = computed(() => homeStore.payments);

function scrollToHash() {
  setTimeout(() => {
    if (route.hash) {
      const el = document.querySelector(route.hash);
      if (el) {
        scrollTo(el);
      }
    }
  }, 0);
}

function get() {
  getBanners();
  getPopularSkins();
  getAdvantages();
  getFaqCategories();
  getReviews();
  getPayments();
}

async function getBanners() {
  if (!(homeStore.welcome_banners && homeStore.welcome_banners.length)) {
    const { data } = await query("/banners", {
      page: 1,
      first: 5,
      positions: ["after_header"],
    });
    homeStore.welcome_banners = data || [];
  }
}

async function getPopularSkins() {
  if (!(homeStore.popular_skins && homeStore.popular_skins.length)) {
    const { items } = await query("/skins", {
      limit: 8,
      page: 1,
    });
    homeStore.popular_skins = items || [];
  }
}

async function getAdvantages() {
  if (!(homeStore.advantages && homeStore.advantages.length)) {
    query("/advantages", {
      page: 1,
      first: 4,
    }).then(({ data }) => {
      homeStore.advantages = data || [];
    });
  }
}

async function getFaqCategories() {
  if (!(homeStore.faqCategories && homeStore.faqCategories.length)) {
    query("/faq/categories", {
      page: 1,
      first: 10,
    }).then(({ data }) => {
      homeStore.faqCategories = data || [];
      scrollToHash();
    });
  }
}

async function getReviews() {
  if (!(homeStore.reviews && homeStore.reviews.length)) {
    query("/reviews", {
      page: 1,
      first: 99,
    }).then(({ data }) => {
      homeStore.reviews = data || [];
      scrollToHash();
    });
  }
}

async function getPayments() {
  if (!(homeStore.payments && homeStore.payments.length)) {
    query("/icons", {
      page: 1,
      first: 10,
    }).then(({ data }) => {
      homeStore.payments = data || [];
    });
  }
}
</script>

<style lang="stylus">
.home-page {}
</style>
