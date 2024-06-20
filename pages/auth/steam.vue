<template>
  <div class="steam-auth-page page">
    <LoadingCircleIndicator title="Steam Authorization" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { query } from "~/utils/global";
import { useRouter } from "#app";
import { useAuthStore } from "~/stores/auth";

// eslint-disable-next-line no-undef
definePageMeta({
  fullPage: true,
});

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  confirm();
});

async function confirm() {
  if (location.search) {
    try {
      await query(`/user/auth/callback${location.search}`);
      await authStore.get();
    } catch (e) {
      console.error(e);
    } finally {
      await router.push({ name: "index" });
    }
  }
}
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
