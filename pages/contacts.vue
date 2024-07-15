<template>
  <main class="page contacts-page">
    <div class="page__inner">
      <BreadcrumbsComponent title="Contacts" />
      <div class="contacts-page__content">
        <div class="contacts-page__info">
          <div v-if="company.addresses && company.addresses.length" class="contacts-page__block">
            <span class="contacts-page__block-title">Legal</span>
            <div class="contacts-page__block-value">
              <span v-for="(item, i) in company.addresses" :key="i">
                <span v-if="item.name">{{ item.name }}:</span>
                {{ item.address }}
              </span>
            </div>
          </div>
          <div v-if="company.emails && company.emails.length" class="contacts-page__block">
            <span class="contacts-page__block-title">Email</span>
            <span class="contacts-page__block-value">
              <span v-for="(item, i) in company.emails" :key="i">
                <span v-if="item.name">{{ item.name }}:</span>
                <a :href="`mailto:${item.email}`">{{ item.email }}</a>
              </span>
            </span>
          </div>
          <div v-if="company.phones && company.phones.length" class="contacts-page__block">
            <span class="contacts-page__block-title">Phones</span>
            <span class="contacts-page__block-value">
              <span v-for="(item, i) in company.phones" :key="i">
                <span v-if="item.name">{{ item.name }}:</span>
                <a :href="`tel:${item.phone}`">{{ item.phone }}</a>
              </span>
            </span>
          </div>
        </div>
        <div class="contacts-page__feedback">
          <h3 class="contacts-page__feedback-title">Write to us</h3>
          <form @submit.prevent="submit" class="contacts-page__feedback-form">
            <InputComponent v-model="form.phone.value" :errors="form.phone.errors" placeholder="Phone" />
            <InputComponent v-model="form.email.value" :errors="form.email.errors" placeholder="Email*" />
            <TextareaComponent
              v-model="form.content.value"
              :errors="form.content.errors"
              placeholder="Message*"
            />
            <button class="contacts-page__feedback-submit btn btn--lg btn--main">
              <span>Send</span>
              <LoadingCircleIndicator v-if="submitLoading" title="" />
              <IconComponent v-else name="arrow-right-1" />
            </button>
            <div class="contacts-page__feedback-bottom">
              <span class="contacts-page__feedback-terms">
                By use form, you agree to the
                <nuxt-link :to="{ name: 'dynamic-id', query: { 'positions[]': 'privacy_policy' } }"
                  >User Agreement and Privacy Policy</nuxt-link
                >.
              </span>
            </div>
          </form>
        </div>
      </div>
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
import { computed, ref, shallowRef } from "vue";
import { useGlobalStore } from "~/stores/global";
import { parseError, query, resetErrors, resetForm } from "~/utils/global";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import AlertModal from "~/components/modals/components/AlertModal.vue";
import { useDefaultStore } from "~/stores/default";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const globalStore = useGlobalStore();
const defaultStore = useDefaultStore();
const submitLoading = ref(false);

const company = computed(() => {
  return globalStore.company;
});

const form = ref({
  email: {
    value: null,
    errors: [],
    default: null,
  },
  phone: {
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

const user = computed(() => {
  return authStore.user || {};
});

async function submit() {
  submitLoading.value = true;
  resetErrors(form.value);
  let variables = {};
  variables.email = form.value.email.value;
  variables.phone = form.value.phone.value;
  variables.content = form.value.content.value;
  variables.name = user.value?.name;
  try {
    await query(
      "/feedback",
      {},
      {
        method: "POST",
        body: JSON.stringify(variables),
      }
    );
    showAlertModal({
      title: "SUCCESS",
      text: "Your message successfully sent",
      noBtn: true,
    });
    resetForm(form.value);
  } catch ({ errors }) {
    parseError(errors, form.value);
  } finally {
    submitLoading.value = false;
  }
}

function showAlertModal(options) {
  defaultStore.modals.push({
    component: shallowRef(AlertModal),
    options,
  });
}
</script>

<style lang="stylus">
.contacts-page {
	&__content {
		display grid
		grid-template-columns 676fr minmax(300px, 390fr)
		gap: var(--gap)
		+below(720px) {
			grid-template-columns 1fr
		}
	}

	&__info {
		display flex
		flex-direction column
		gap: 20px
	}

	&__block {
		display flex
		flex-direction column
		gap: 5px

		&-title {
			font-weight 700
		}

		&-value {
			display flex
			flex-direction column
		}
	}

	&__feedback {
		&-title {
			margin-bottom 30px
		}

		&-form {
			display flex
			flex-direction column
			gap: 20px
		}

		&-submit {
			align-self flex-start
		}

		&-bottom {
			display flex
			flex-direction column
			gap: 5px
		}

		&-terms {
			color: var(--gray-dark-2, #516D7D);
			font-size: 0.75rem
			line-height: normal;
		}

		&-error {
			color: var(--red);
			font-size: 0.75rem
			line-height: normal;
		}
	}
}
</style>
