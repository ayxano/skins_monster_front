<template>
  <div class="default-modal auth-modal">
    <div class="default-modal__header">
      <span class="default-modal__title auth-modal__title">Authorization required</span>
      <button type="button" class="default-modal__close btn" @click="$emit('closeAll')">
        <IconComponent name="close" />
      </button>
    </div>
    <div class="default-modal__body">
      <span class="auth-modal__text">Login to your Steam profile to continue</span>
      <button @click="login" class="btn btn--lg btn--main">
        <LoadingCircleIndicator v-if="loading" />
        <template v-else>
          <IconComponent name="steam" category="default" />
          <span>Log in via Steam</span>
        </template>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { query } from "~/utils/global";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";

let loading = ref(false);

async function login() {
  loading.value = true;
  const { url } = await query("/user/auth");
  if (url) {
    let link = document.createElement("a");
    link.href = url;
    link.click();
  }
  loading.value = false;
}
</script>

<style lang="stylus">
.auth-modal {
  width 100%
  max-width: 400px;

	&__text {
		font-size 0.875rem
	}
}
</style>
