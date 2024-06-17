<template>
  <div class="steam-auth-page page">
    <LoadingCircleIndicator title="Steam Authorization" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { csrf, query } from "~/utils/global";
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

function confirm() {
  if (location.search) {
    try {
      csrf();
      setTimeout(() => {
        query(`/user/auth/callback${location.search}`);
      }, 2000);
      setTimeout(() => {
        authStore.get();
        router.push({ name: "index" });
      }, 4000);
    } catch (e) {
      console.error(e);
      router.push({ name: "index" });
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
