<template>
  <main class="page dynamic-page">
    <div class="page__inner">
      <BreadcrumbsComponent :title="page.name" />
      <div class="dynamic-page__content">
        <EditorJSComponent :text="page.content || {}" />
      </div>
      <BenefitsComponent :list="advantages" />
      <PaymentsComponent />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
// import EditorJSComponent from "~/components/EditorJSComponent.vue";
import { useRoute } from "#app";
import { query } from "~/utils/global";
import { onMounted, ref, watch } from "vue";

const route = useRoute();
const page = ref({});
const advantages = ref([]);

onMounted(() => {
  get();
  getAdvantages();
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
    page.value = data || {};
  } else {
    const { data } = await query("/pages", route.query);
    if (data && data.length) {
      page.value = data[0] || {};
    }
  }
}

async function getAdvantages() {
  if (!advantages.value?.length) {
    const { data } = await query("/advantages", {
      page: 1,
      first: 4,
    });
    advantages.value = data;
  }
}
</script>

<style lang="stylus">
.dynamic-page {
}
</style>
