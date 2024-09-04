<template>
  <div class="default-modal new-review-modal">
    <div class="default-modal__header">
      <span class="default-modal__title new-review-modal__title">Leave your review</span>
      <button type="button" class="default-modal__close btn" @click="$emit('closeAll')">
        <IconComponent name="close" />
      </button>
    </div>
    <div class="default-modal__body">
      <form @submit.prevent="submit" class="new-review-modal__form">
        <InputComponent v-model.trim="form.title.value" :errors="form.title.errors" placeholder="Your name" />
        <TextareaComponent
          v-model.trim="form.content.value"
          :errors="form.content.errors"
          placeholder="Review"
        />
        <button class="btn btn--lg btn--main">
          <LoadingCircleIndicator v-if="loading" />
          <span v-else>Send your review</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue";
import { parseErrors, resetErrors, query } from "~/utils/global";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import AlertModal from "~/components/modals/components/AlertModal.vue";
import { useDefaultStore } from "~/stores/default";

let loading = ref(false);
const defaultStore = useDefaultStore();
const form = ref({
  title: {
    value: null,
    errors: [],
    default: null,
  },
  content: {
    value: null,
    errors: [],
    default: null,
  },
});

async function submit() {
  if (loading.value) {
    return;
  }
  loading.value = true;
  let variables = {
    title: form.value.title.value,
    content: form.value.content.value,
  };
  resetErrors(form.value);
  try {
    await query(
      "/reviews",
      {},
      {
        method: "POST",
        body: JSON.stringify(variables),
      }
    );
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
      title: "Success",
      text: "Your review will be published after moderation.",
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
