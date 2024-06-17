<template>
  <form @submit.prevent="submit" class="settings-form">
    <InputComponent v-model="form.trade_link.value" placeholder="Trade link" title="Steam Trade URL">
      <template #title>
        <a href="https://steamcommunity.com/my/tradeoffers/privacy#trade_offer_access_url" target="_blank">
          <span>Find Trade URL</span>
          <IconComponent name="export-3" />
        </a>
      </template>
    </InputComponent>
    <!--    <InputComponent placeholder="Email" />-->
    <!--    <div class="col col-2">-->
    <!--      <InputComponent placeholder="Name" />-->
    <!--      <InputComponent placeholder="Surname" />-->
    <!--    </div>-->
    <!--    <TextareaComponent placeholder="About" />-->
    <button class="btn btn--lg btn--main">
      <span>Save</span>
      <LoadingCircleIndicator v-if="submitLoading" title="" />
      <IconComponent v-else name="arrow-right-1" />
    </button>
  </form>
</template>

<script setup>
import { query } from "~/utils/global";
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from "~/stores/auth";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";

const authStore = useAuthStore();
let submitLoading = ref(false);

const form = ref({
  trade_link: {
    value: null,
    errors: [],
  },
});

onMounted(() => {
  form.value.trade_link.value = user.value.trade_link;
});

const user = computed(() => {
  return authStore.user || {};
});

async function submit() {
  submitLoading.value = true;
  let variables = {};
  variables.link = form.value.trade_link.value;
  variables.trade_link = form.value.trade_link.value;
  await query(
    "/user/trade",
    {},
    {
      method: "POST",
      body: JSON.stringify(variables),
    }
  );
  await authStore.get();
  submitLoading.value = false;
}
</script>

<style lang="stylus">
.settings-form {
	background var(--dark-light, #011D2D)
	padding: 40px
	//border-radius 0 0 var(--main-radius) var(--main-radius)
	border-radius var(--main-radius)
	display flex
	flex-direction column
	gap: 20px
	+below(620px) {
		padding: 20px
	}

	.btn {
		align-self flex-start
	}
}
</style>
