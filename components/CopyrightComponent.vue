<template>
  <span class="copyright"> © {{ currentYear }}. Skins Monster. All Rights Reserved. </span>
</template>

<script setup>
import { computed } from "vue";
import dayjs from "dayjs";

const currentYear = computed(() => {
  return dayjs().year();
});
</script>

<style lang="stylus">
.copyright {
	display inline-block
	font-size 0.875rem
}
</style>
