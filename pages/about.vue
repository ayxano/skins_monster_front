<template>
  <main class="page about-page">
    <div class="page__inner">
      <BreadcrumbsComponent title="About" />
      <div class="about-page__content">
        <EditorJSComponent :text="text" />
      </div>
      <BenefitsComponent />
      <PaymentsComponent />
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import EditorJSComponent from "~/components/EditorJSComponent.vue";

const text =
  '{"time":1716913819684,"blocks":[{"id":"a2IYkrZ-gw","type":"paragraph","data":{"text":"Irure quis esse officia duis ullamco. Non irure aute ipsum culpa enim esse commodo officia labore reprehenderit do ad occaecat. Proident incididunt mollit do consequat ipsum amet. Reprehenderit ullamco excepteur reprehenderit labore nisi laborum. Quis cillum quis adipisicing. Dolor qui laboris nisi irure nulla labore."}},{"id":"yXS9Po0UGc","type":"paragraph","data":{"text":"Irure quis esse officia duis ullamco. Non irure aute ipsum culpa enim esse commodo officia labore reprehenderit do ad occaecat. Proident incididunt mollit do consequat ipsum amet. Reprehenderit ullamco excepteur reprehenderit labore nisi laborum. Quis cillum quis adipisicing. Dolor qui laboris nisi irure nulla labore."}},{"id":"Ah0ibsRFTD","type":"image","data":{"file":{"url":"https://a44a116f-9e98-4507-a52f-e0759b05ad3b.selstorage.ru/editor/XxMkKK8CU8bTQ5ndG1PQTF8S6zKMbziv1XbsXATK.png"},"caption":"","withBorder":false,"stretched":false,"withBackground":false}},{"id":"gJ1aeXpH3D","type":"header","data":{"text":"Irure quis esse officia duis ullamco.","level":3}},{"id":"6zEnFxQhWj","type":"paragraph","data":{"text":"Non irure aute ipsum culpa enim esse commodo officia labore reprehenderit do ad occaecat. Proident incididunt mollit do consequat ipsum amet. Reprehenderit ullamco excepteur reprehenderit labore nisi laborum. Quis cillum quis adipisicing. Dolor qui laboris nisi irure nulla labore."}}],"version":"2.29.1"}';
</script>

<style lang="stylus">
.about-page {
}
</style>
