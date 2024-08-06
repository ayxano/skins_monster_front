<template>
  <main class="page dynamic-page">
    <div class="page__inner">
      <BreadcrumbsComponent :title="page.name" />
      <div class="dynamic-page__content">
        <EditorJSComponent v-if="page.content" :text="page.content || {}" />
        <span v-else>No data</span>
      </div>
      <BenefitsComponent :list="advantages" />
      <PaymentsComponent :list="payments" />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { useRoute } from "#app";
import { query } from "~/utils/global";
import { computed, onMounted, watch } from "vue";
import { useDynamicPageStore } from "~/stores/dynamicPage";

const dynamicPageStore = useDynamicPageStore();
const route = useRoute();
const page = computed(() => dynamicPageStore.page);
const advantages = computed(() => dynamicPageStore.advantages);
const payments = computed(() => dynamicPageStore.payments);

onMounted(() => {
  get();
  getAdvantages();
  getPayments();
});

watch(
  () => route.fullPath,
  () => {
    get();
  }
);

async function get() {
  const id = route.params.id;
  if (id) {
    const { data } = await query("/pages/" + id);
    dynamicPageStore.page = data || {};
  } else {
    const { data } = await query("/pages", { ...route.query, first: 99 });
    if (data && data.length) {
      dynamicPageStore.page = data[data.length - 1] || {};
    }
  }
}

async function getAdvantages() {
  if (!(dynamicPageStore.advantages && dynamicPageStore.advantages.length)) {
    query("/advantages", {
      page: 1,
      first: 4,
    }).then(({ data }) => {
      dynamicPageStore.advantages = data || [];
    });
  }
}

async function getPayments() {
  if (!(dynamicPageStore.payments && dynamicPageStore.payments.length)) {
    query("/icons", {
      page: 1,
      first: 10,
    }).then(({ data }) => {
      dynamicPageStore.payments = data || [];
    });
  }
}
</script>

<style lang="stylus">
.dynamic-page {
}
</style>
