<template>
  <div class="profile-dropdown">
    <div class="profile-dropdown__header">
      <div class="profile-dropdown__header-info">
        <span class="profile-dropdown__header-name">{{ user.name }}</span>
        <span class="profile-dropdown__header-balance">{{ user.eur_balance }}€</span>
      </div>
      <button @click="refill" class="profile-dropdown__header-deposit btn" title="Refill your balance">
        <LoadingCircleIndicator v-if="refillLoading" title="" />
        <IconComponent v-else name="empty-wallet-add" />
      </button>
    </div>
    <div class="profile-dropdown__body">
      <ul class="profile-dropdown__links">
        <li v-for="(item, i) in links" :key="i">
          <nuxt-link :to="item.route" class="profile-dropdown__link no-hover">
            <IconComponent :name="item.icon" />
            <span>{{ item.title }}</span>
          </nuxt-link>
        </li>
        <li>
          <a
            @click.prevent="logout"
            class="profile-dropdown__link profile-dropdown__link--logout no-hover"
            href="#"
          >
            <LoadingCircleIndicator v-if="logoutLoading" title="" />
            <IconComponent v-else name="logout" />
            <span>Log out</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
import { computed, ref } from "vue";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";
import { useRouter } from "#app";
import { useBasketStore } from "~/stores/basket";
import { useFavoritesStore } from "~/stores/favorites";

const links = [
  {
    title: "Profile",
    icon: "3d-rotate",
    route: { name: "cabinet-profile" },
  },
  {
    title: "Settings",
    icon: "money-send",
    route: { name: "cabinet-settings" },
  },
  {
    title: "Orders",
    icon: "receipt-item",
    route: { name: "cabinet-orders" },
  },
  {
    title: "Favorites",
    icon: "messages-3",
    route: { name: "cabinet-favorites" },
  },
];

const router = useRouter();
const authStore = useAuthStore();
const basketStore = useBasketStore();
const favoritesStore = useFavoritesStore();
const refillLoading = ref(false);
const logoutLoading = ref(false);

const user = computed(() => {
  return authStore.user || {};
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

async function logout() {
  logoutLoading.value = true;
  try {
    await authStore.logout();
    authStore.user = null;
    basketStore.basket_list = [];
    favoritesStore.favorites_list = [];
    await router.push({ name: "index" });
  } finally {
    logoutLoading.value = false;
  }
}
</script>

<style lang="stylus">
.profile-dropdown {
	border-radius: var(--main-radius)
	border: 1px solid var(--dark-light-2, #1F3B4B);
	background: var(--dark-light, #011D2D);
	box-shadow: 0 15px 30px 0 var(--black-o3);
	width: 210px

	.icon {
		color var(--gray-dark-2)
	}

	&__header {
		padding: 10px 15px
		display flex
		align-items center
		justify-content space-between
		gap: 10px
		border-bottom: 1px solid var(--dark-light-2, #1F3B4B);

		&-info {
			display flex
			flex-direction column
		}

		&-name {
			overflow hidden
		}

		&-balance {
			color: var(--gray-dark-2, #516D7D);
			font-size: 0.875rem
		}

		&-deposit.btn {
			width 40px
			height 40px
			flex-shrink 0

			&:hover {
				background var(--dark-light-2)

				.icon {
					color var(--main)
				}
			}

			.icon {
				width 24px
				height 24px
				transition color var(--transition)
			}
		}
	}

	&__body {
		padding: 5px
	}

	&__links {
		display flex
		flex-direction column
		width 100%
	}

	&__link {
		display flex
		align-items center
		gap: 10px
		font-size 0.875rem
		padding: 5px 10px
		border-radius var(--small-radius)
		transition background-color var(--transition)

		&:hover {
			background var(--dark-light-2)
		}

		&--logout {
			color var(--red)

			.icon {
				color var(--red)
			}
		}

		.icon,
		.loading-indicator {
			width 30px
			height 30px
			padding: 5px
		}
	}
}
</style>
