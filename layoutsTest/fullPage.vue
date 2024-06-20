<template>
  <div class="full-page">
    <span>full page layout</span>
    <slot />
  </div>
</template>

<style lang="stylus">
.full-page {
  border: 1px solid #b9e39e;
  padding: 1rem;
  position: relative;
  background-color: #b8e39e87;
}
.full-page::before {
  content: "layouts/fullPage.vue";
  position: absolute;
  top: 2px;
  left: 5px;
  color: #68b538;
  font-family: monospace;
}
</style>
