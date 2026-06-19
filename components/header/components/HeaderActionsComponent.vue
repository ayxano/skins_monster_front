<template>
  <div class="header-actions">
    <nuxt-link
      v-if="showSearch"
      :to="{ name: 'catalog', query: { sort: 'price_min' } }"
      class="header-actions__item header-actions__item--search btn btn--lg btn--dark-light"
    >
      <IconComponent class="icon--lg" name="search-normal-1" />
    </nuxt-link>

    <!-- Language Switcher -->
    <div
      @mouseenter="langDropdownVisible = true"
      @mouseleave="langDropdownVisible = false"
      class="header-actions__item-wrap header-actions__item-wrap--lang"
    >
      <button class="header-actions__item btn btn--lg btn--dark-light">
        <span class="header-actions__item-text">{{ localeStore.currentLocale.toUpperCase() }}</span>
      </button>
      <div
        class="header-actions__item-dropdown"
        :class="{ 'header-actions__item-dropdown--visible': langDropdownVisible }"
      >
        <div class="header-dropdown-menu">
          <button
            v-for="lang in ['en', 'ru']"
            :key="lang"
            @click="changeLang(lang)"
            class="header-dropdown-menu__item"
            :class="{ 'header-dropdown-menu__item--active': localeStore.currentLocale === lang }"
          >
            {{ lang === "en" ? "English (EN)" : "Русский (RU)" }}
          </button>
        </div>
      </div>
    </div>

    <!-- Currency Switcher -->
    <div
      @mouseenter="currencyDropdownVisible = true"
      @mouseleave="currencyDropdownVisible = false"
      class="header-actions__item-wrap header-actions__item-wrap--currency"
    >
      <button class="header-actions__item btn btn--lg btn--dark-light">
        <span class="header-actions__item-text">{{ globalStore.selectedCurrencyCode.toUpperCase() }}</span>
      </button>
      <div
        class="header-actions__item-dropdown"
        :class="{ 'header-actions__item-dropdown--visible': currencyDropdownVisible }"
      >
        <div class="header-dropdown-menu">
          <button
            v-for="curr in ['eur', 'rub']"
            :key="curr"
            @click="changeCurrency(curr)"
            class="header-dropdown-menu__item"
            :class="{ 'header-dropdown-menu__item--active': globalStore.selectedCurrencyCode === curr }"
          >
            {{ curr.toUpperCase() }} ({{ getCurrencySymbolName(curr) }})
          </button>
        </div>
      </div>
    </div>

    <nuxt-link :to="{ name: 'checkout' }" class="header-actions__item header-actions__item--cart btn">
      <div class="header-actions__item-inner">
        <IconComponent class="icon--lg" name="bag-2" />
        <span v-if="basketLength" class="header-actions__item-count">{{ basketLength }}</span>
      </div>
    </nuxt-link>

    <div
      @mouseenter="dropdownVisible = true"
      @mouseleave="dropdownVisible = false"
      class="header-actions__item-wrap"
    >
      <nuxt-link
        to="/cabinet/profile"
        class="header-actions__item header-actions__item--profile btn btn--lg btn--dark-light no-hover"
        :class="{ 'header-actions__item--authorized': authorized }"
      >
        <IconComponent v-if="authorized" class="icon--lg" name="profile-tick" />
        <IconComponent v-else class="icon--lg" name="frame-1" />
      </nuxt-link>
      <div
        class="header-actions__item-dropdown"
        :class="{ 'header-actions__item-dropdown--visible': dropdownVisible && authorized }"
      >
        <HeaderProfileDropdownComponent />
      </div>
    </div>
    <button @click.prevent="showMainMenu" class="header-actions__item header-actions__item--menu btn">
      <IconComponent class="icon--lg" name="menu-burger" />
    </button>
  </div>
</template>

<script setup>
import { useBasketStore } from "~/stores/basket";
import { computed, ref, shallowRef, watch } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRoute } from "#app";
import { useDefaultStore } from "~/stores/default";
import { useLocaleStore } from "~/stores/locale";
import { useGlobalStore } from "~/stores/global";
import MainMenu from "~/components/menus/components/MainMenu.vue";

defineProps({
  showSearch: Boolean,
});

const route = useRoute();
const basketStore = useBasketStore();
const authStore = useAuthStore();
const localeStore = useLocaleStore();
const globalStore = useGlobalStore();

const dropdownVisible = ref(false);
const langDropdownVisible = ref(false);
const currencyDropdownVisible = ref(false);

watch(
  () => route.fullPath,
  () => {
    dropdownVisible.value = false;
    langDropdownVisible.value = false;
    currencyDropdownVisible.value = false;
  }
);

const basketLength = computed(() => {
  return basketStore.basket?.length || 0;
});

const authorized = computed(() => {
  return authStore.user && authStore.user.id;
});

function showMainMenu() {
  useDefaultStore().menus.push({
    component: shallowRef(MainMenu),
  });
}

function changeLang(lang) {
  localeStore.setLocale(lang);
  langDropdownVisible.value = false;
}

function changeCurrency(curr) {
  globalStore.setCurrency(curr);
  currencyDropdownVisible.value = false;
}

function getCurrencySymbolName(curr) {
  const symbols = {
    eur: "€",
    rub: "₽",
  };
  return symbols[curr] || "";
}
</script>

<style lang="stylus">
.header-actions {
	display flex
	gap: 15px
	flex-shrink: 0

	&__item {
		&-wrap {
			position relative
			+below(580px) {
				display none
			}
		}

		&-inner {
			display flex
			align-items center
			justify-content center
			position relative
		}

		&-count {
			position absolute
			top -5px
			right -5px
			display: flex;
			width: 15px;
			height: 15px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 0.625rem
			line-height: normal;
			border-radius: 100px;
			background: var(--red, #DC2626);
		}

		&-dropdown {
			padding-top 15px
			margin-top -10px
			position absolute
			top: 100%
			right 0
			z-index 3
			opacity 0
			pointer-events none
			transition opacity var(--transition)

			&--visible {
				opacity 1
				pointer-events auto
			}
		}

		&-text {
			font-size: 0.875rem
			font-weight: 700
			color: var(--white)
		}
	}

	.btn&__item {
		display flex
		width 50px
		height 50px
		border-radius 50%
		flex-shrink 0
		padding: 10px

		.icon {
			width 24px
			height 24px
			color var(--white)
		}

		&--cart,
		&--menu {
			&:hover {
				background var(--dark-light-2)

				.icon {
					color var(--main)
				}
			}
		}

		&--authorized {
			> .icon svg path {
				fill var(--main)
			}
		}

		&--search {
			+above(721px) {
				display none
			}

			.icon {
				width 20px
				height 20px
			}
		}

		&--profile {
			+below(580px) {
				display none
			}
		}

		&--menu {
			+above(1025px) {
				display none
			}

			.icon {
				width 30px
			}
		}
	}
}

.header-dropdown-menu {
	border-radius: var(--main-radius)
	border: 1px solid var(--dark-light-2, #1F3B4B)
	background: var(--dark-light, #011D2D)
	box-shadow: 0 15px 30px 0 var(--black-o3)
	width: 140px
	padding: 5px
	display flex
	flex-direction column
	gap: 5px

	&__item {
		display flex
		align-items center
		width 100%
		font-size 0.875rem
		padding: 8px 12px
		border-radius var(--small-radius)
		transition background-color var(--transition), color var(--transition)
		background none
		border none
		color var(--white)
		cursor pointer
		text-align left

		&:hover {
			background var(--dark-light-2)
		}

		&--active {
			color var(--main)
			font-weight 700
		}
	}
}
</style>
