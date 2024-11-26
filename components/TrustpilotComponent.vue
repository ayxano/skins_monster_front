<script setup>
import { onMounted, ref, nextTick } from "vue";

const trustbox = ref();

onMounted(async () => {
  await nextTick();
  if (window.Trustpilot) {
    await window.Trustpilot.loadFromElement(trustbox.value);
  }
});
</script>

<template>
  <ClientOnly>
    <!-- TrustBox widget - Slider -->
    <div
      ref="trustbox"
      class="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="539ad0ffdec7e10e686debd7"
      data-businessunit-id="66d85277321310cee73da429"
      data-style-height="350px"
      data-style-width="100%"
      data-theme="dark"
      data-stars="1,2,3,4,5"
      data-review-languages="en"
    >
      <a href="https://uk.trustpilot.com/review/skins.monster" target="_blank" rel="noopener">Trustpilot</a>
    </div>
    <!-- End TrustBox widget -->
  </ClientOnly>
</template>

<style lang="stylus"></style>
