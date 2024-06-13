<template>
  <div class="steam-auth-page page">
    <LoadingCircleIndicator title="Steam Authorization" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { query } from "~/utils/global";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "#app";

// eslint-disable-next-line no-undef
definePageMeta({
  fullPage: true,
});

onMounted(async () => {
  if (location.search) {
    try {
      const { data } = await query(`/user/auth/callback${location.search}`);
      useAuthStore().user = data;
      await useRouter().push({ name: "index" });
    } catch (e) {
      console.error(e);
      useRouter.push({ name: "index" });
    }
  }
});
</script>

<style lang="stylus">
.steam-auth-page {
	width 100%
	height 100%
	padding: 50px 0
	display flex
	justify-content center
	align-items center
}
</style>
