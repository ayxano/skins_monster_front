<template>
  <div class="default-modal new-review-modal">
    <div class="default-modal__header">
      <span class="default-modal__title new-review-modal__title">{{ $t("Pay out request") }}</span>
      <button type="button" class="default-modal__close btn" @click="$emit('closeAll')">
        <IconComponent name="close" />
      </button>
    </div>
    <div class="default-modal__body">
      <form @submit.prevent="submit" class="new-review-modal__form">
        <InputComponent
          v-model.trim="form.name.value"
          :errors="form.name.errors"
          :placeholder="$t('Your name')"
        />
        <InputComponent
          v-model.trim="form.surname.value"
          :errors="form.surname.errors"
          :placeholder="$t('Your surname')"
        />
        <InputComponent
          v-model="form.amount.value"
          :errors="form.amount.errors"
          :placeholder="`${$t('Amount')} (${$currSymbol()})`"
          inputmode="numeric"
          numbers-only
          :max="balance"
        >
          <template #subtitle>
            <div class="input__subtitle">
              <span>{{
                $t("Minimum: 4€. Your balance: {balance}")
                  .replace("{minimum}", $price(minPayout))
                  .replace("{balance}", $price(balance))
              }}</span>
              <button @click="form.amount.value = balance" type="button" class="btn btn--sm btn--main">
                {{ $t("All") }}
              </button>
            </div>
          </template>
        </InputComponent>
        <InputComponent
          v-model="form.pan.value"
          :errors="form.pan.errors"
          :placeholder="$t('Your card number')"
          mask="#### #### #### ####"
        />
        <button class="btn btn--lg btn--main">
          <LoadingCircleIndicator v-if="loading" />
          <span v-else>{{ $t("Confirm") }}</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, shallowRef } from "vue";
import { parseErrors, resetErrors, convertPrice } from "~/utils/global";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import AlertModal from "~/components/modals/components/AlertModal.vue";
import { useDefaultStore } from "~/stores/default";
import { useAuthStore } from "~/stores/auth";
import { useOrdersStore } from "~/stores/orders";

let loading = ref(false);
const defaultStore = useDefaultStore();
const authStore = useAuthStore();
const ordersStore = useOrdersStore();
const form = ref({
  name: {
    value: null,
    errors: [],
    default: null,
  },
  surname: {
    value: null,
    errors: [],
    default: null,
  },
  amount: {
    value: null,
    errors: [],
    default: null,
  },
  pan: {
    value: null,
    errors: [],
    default: null,
  },
});

const balance = computed(() => {
  return parseFloat(convertPrice(authStore.user?.eur_balance, undefined, "eur")) || 0;
});

const minPayout = computed(() => {
  return parseFloat(convertPrice(4, undefined, "eur")) || 4;
});

async function submit() {
  if (loading.value) {
    return;
  }
  loading.value = true;
  let variables = {
    name: form.value.name.value,
    surname: form.value.surname.value,
    amount: form.value.amount.value,
    pan: form.value.pan.value ? parseInt(form.value.pan.value.replace(/[\s-()]/g, "")) : "",
  };
  resetErrors(form.value);
  try {
    await ordersStore.createPayout(variables);
    showAlertModal();
  } catch ({ errors }) {
    parseErrors(errors, form.value);
  } finally {
    loading.value = false;
  }
}

function showAlertModal() {
  defaultStore.modals = [];
  defaultStore.modals.push({
    component: shallowRef(AlertModal),
    options: {
      title: useNuxtApp().$t("SUCCESS"),
      text: useNuxtApp().$t("Your request has been successfully sent."),
    },
  });
}
</script>

<style lang="stylus">
.new-review-modal {
  width 100%
  max-width: 500px;

	&__form {
		display flex
		flex-direction column
		gap 20px
	}
}
</style>
