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
    <!-- TrustBox widget - Review Collector -->
    <div ref="trustbox" class="trustpilot-widget" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="66d85277321310cee73da429" data-style-height="52px" data-style-width="100%"
      data-token="772af708-be12-405b-93fe-2f0b3908723e">
      <a href="https://uk.trustpilot.com/review/skins.monster" target="_blank" rel="noopener">Trustpilot</a>
    </div>
    <!-- End TrustBox widget -->
  </ClientOnly>
</template>

<style lang="stylus"></style>
