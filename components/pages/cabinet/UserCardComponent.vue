<template>
  <ClientOnly>
    <div class="user-card" :class="{ 'user-card--settings': settings, 'user-card--small': small }">
      <div v-if="!small" class="user-card__top">
        <div class="user-card__actions">
          <button class="btn btn--sm btn--dark-light">Upload cover</button>
          <button class="user-card__action--remove btn btn--sm btn--dark-light">Remove</button>
        </div>
      </div>
      <div class="user-card__content">
        <ImgComponent v-if="!small" class="user-card__avatar" src="/images/tmp/user.jpg" />
        <div class="user-card__info">
          <span class="user-card__name">{{ user.name }}</span>
          <span class="user-card__registered">Registered on {{ registered }}</span>
          <div class="user-card__balance">
            <span class="user-card__balance-value">Balance: €{{ balance }}</span>
            <button @click="refill" class="user-card__balance-refill btn btn--md btn--main">
              <LoadingCircleIndicator v-if="refillLoading" title="" />
              <IconComponent v-else name="empty-wallet-add" />
              <span>Refill</span>
            </button>
            <button
              v-show="balance"
              @click="payout"
              class="user-card__balance-refill btn btn--md btn--hollow"
            >
              <IconComponent name="wallet-minus" />
              <span>Pay out</span>
            </button>
          </div>
        </div>
        <div class="user-card__actions">
          <button class="btn btn--sm btn--main">Choose avatar</button>
          <button class="user-card__action--remove btn btn--sm btn--dark-light">Remove</button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { computed, ref, shallowRef } from "vue";
import { useAuthStore } from "~/stores/auth";
import dayjs from "dayjs";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { useDefaultStore } from "~/stores/default";
import PayoutModal from "~/components/modals/components/PayoutModal.vue";

defineProps({
  settings: Boolean,
  small: Boolean,
});

const authStore = useAuthStore();
const refillLoading = ref(false);

const user = computed(() => {
  return authStore.user || {};
});

const registered = computed(() => {
  return dayjs(user.value.created_at).format("MMMM DD, YYYY, HH:mm");
});

const balance = computed(() => {
  return parseFloat(authStore.user?.eur_balance) || 0;
});

async function refill() {
  refillLoading.value = true;
  try {
    const { link } = await authStore.refill();
    let el = document.createElement("a");
    el.href = link;
    el.click();
  } catch (e) {
    console.log("Refill error", e);
  } finally {
    refillLoading.value = false;
  }
}

async function payout() {
  useDefaultStore().modals.push({
    component: shallowRef(PayoutModal),
  });
}
</script>

<style lang="stylus">
main_class = ".user-card"
.user-card {
	border-radius: var(--main-radius)
	background var(--dark-light, #011D2D)
	display flex
	flex-direction column
	+below(620px) {
	}

	&--settings {
		border-radius var(--main-radius) var(--main-radius) 0 0

		{ main_class } {
			&__actions {
				display flex
			}

			&__info {
				display none
			}
		}
	}

	&--small {
		{ main_class } {
			&__content {
				margin: 0
				padding: 40px
			}
		}
	}

	&__top {
		background url("/images/tmp/user_bg.jpg")
		background-position center
		border-radius: var(--main-radius)
		height 200px
		padding: 20px
		display flex
		justify-content flex-end
	}

	&__actions {
		display none
		gap: 10px
		+below(540px) {
			margin 0 auto
		}

		.btn {
			padding: 0 15px
			height 32px
		}
	}

	&__action--remove {
		//color var(--red)
		color var(--gray-dark-2)
	}

	&__content {
		display flex
		align-items flex-end
		gap: 20px
		padding 0 40px 40px
		margin-top -75px
		+below(620px) {
			margin-top 0
			flex-direction column
			align-items center
			text-align center
			padding: 0 20px 20px
		}
	}

	&__avatar {
		width 150px
		height 150px
		flex-shrink 0
		border-radius 50%
		border: 2px solid var(--dark-light-2, #1F3B4B);
		+below(620px) {
			margin-top -75px
		}
	}

	&__info {
		display: flex;
		flex-direction: column;
		gap: 10px;
		+below(620px) {
			align-items center
		}
	}

	&__name {
		font-size: 1.375rem
		font-weight: 700;
		line-height: normal;
		word-break break-word
	}

	&__registered {
		color: var(--gray-dark-2, #516D7D);
		font-size: 0.875rem
	}

	&__balance {
		display flex
		align-items center
		gap: 10px
	}
}
</style>
