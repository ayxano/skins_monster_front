<template>
  <div class="observer" />
</template>

<script>
export default {
  name: "ObserverComponent",
  props: {
    page: Number,
    options: Object,
  },
  data: () => ({
    observer: null,
    defaultOptions: {
      rootMargin: "200px",
    },
  }),
  mounted() {
    const options = this.options || this.defaultOptions;
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    }, options);
    this.observer.observe(this.$el);
  },
  unmounted() {
    this.observer.disconnect();
  },
};
</script>

<style lang="stylus">
.observer {
  absolute bottom right
}
</style>
