<template>
  <div class="faq" id="faq">
    <h3 class="faq-title">Additional information</h3>
    <div class="faq-content">
      <TabsComponent @update:model-value="activeItemIndex = null" v-model="activeTab" :tabs="tabs" />
      <div :key="activeTab" class="faq-list">
        <div
          v-for="(item, i) in activeTab.list"
          :key="i"
          class="faq-list__item"
          :class="{ 'faq-list__item--active': i === activeItemIndex }"
        >
          <div @click="setActive(i)" class="faq-list__item-header">
            <span class="faq-list__item-title">{{ item.title }}</span>
            <IconComponent v-if="i === activeItemIndex" name="minus" />
            <IconComponent v-else name="add" />
          </div>
          <div ref="accItemBody" class="faq-list__item-body">
            <div class="faq-list__item-description">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  {
    id: "how_use",
    title: "How use",
    list: [
      {
        title: "How to trade skins instantly with Tradeit",
        description:
          "1. Select your items: Choose what you want to trade from your inventory.\n" +
          "2. Select wanted items from SkinMonster inventory: Pick the items you desire from our wide selection of over 200k skins.\n" +
          "3. Receive a trade offer instantly: Confirm the trade, and your items will be on their way.",
      },
      {
        title: "Begin Your CS2 Trading Journey with SkinMonster",
        description:
          "1. Select your items: Choose what you want to trade from your inventory.\n" +
          "2. Select wanted items from SkinMonster inventory: Pick the items you desire from our wide selection of over 200k skins.\n",
      },
      {
        title: "Experience the thrill of real-time trading with CS2 Live Trading",
        description:
          "1. Select your items: Choose what you want to trade from your inventory.\n" +
          "2. Select wanted items from SkinMonster inventory: Pick the items selection of over 200k skins.",
      },
      {
        title: "CS2 Skin Exchange Made Easy",
        description:
          "1. Select your items: Choose what you want to trade from your inventory.\n" +
          "2. Select wanted items from SkinMonster inventory: Pick the items selection of over 200k skins.",
      },
    ],
  },
  {
    id: "faq",
    title: "FAQ",
    list: [
      {
        title: "CS2 Skin Exchange Made Easy",
        description:
          "Select your items: Choose what you want to trade from your inventory.\n" +
          "Select wanted items from SkinMonster inventory: Pick the items selection of over 200k skins.",
      },
      {
        title: "How to trade skins instantly with Tradeit",
        description:
          "Select your items: Choose what you want to trade from your inventory.\n" +
          "Select wanted items from SkinMonster inventory: Pick the items you desire from our wide selection of over 200k skins.\n" +
          "Receive a trade offer instantly: Confirm the trade, and your items will be on their way.",
      },
      {
        title: "Begin Your CS2 Trading Journey with SkinMonster",
        description:
          "Select your items: Choose what you want to trade from your inventory.\n" +
          "Select wanted items from SkinMonster inventory: Pick the items you desire from our wide selection of over 200k skins.\n",
      },
      {
        title: "Experience the thrill of real-time trading with CS2 Live Trading",
        description:
          "Select your items: Choose what you want to trade from your inventory.\n" +
          "Select wanted items from SkinMonster inventory: Pick the items selection of over 200k skins.",
      },
    ],
  },
];

const activeTab = ref(tabs[0]);
const activeItemIndex = ref(null);
const accItemBody = ref(null);

function setActive(i) {
  const el = accItemBody.value[i];
  const prevEl = accItemBody.value[activeItemIndex.value];

  function toggleStyles(el, show) {
    if (show) {
      el.style.maxHeight = el.scrollHeight + "px";
      el.style.opacity = "1";
    } else {
      el.style.maxHeight = "0";
      el.style.opacity = "0";
    }
  }

  if (prevEl) {
    toggleStyles(prevEl, false);
  }

  if (el) {
    toggleStyles(el, i !== activeItemIndex.value);
    if (i === activeItemIndex.value) {
      activeItemIndex.value = null;
    } else {
      activeItemIndex.value = i;
    }
  }
}
</script>

<style lang="stylus">
.faq {
	border-radius: var(--main-radius)
	border: 1px solid var(--dark-light-2, #1F3B4B);
	background: var(--dark-light, #011D2D);
	padding: 50px
	+below(540px) {
		padding: 30px
	}

	&-content {
		display flex
		flex-direction column
		gap: 30px
	}

	.tabs {
		+below(540px) {
			width 100%
		}
		+below(400px) {
			flex-direction column
		}

		&__item {
			+below(540px) {
				flex 1
			}
			+below(400px) {
				width 100%
			}
		}
	}

	&-list {
		display flex
		flex-direction column

		&__item {
			display flex
			flex-direction column

			&:not(:last-child) {
				border-bottom: 1px solid var(--dark-light-2, #1F3B4B);
			}

			&--active {
				.faq-list__item-header {
					color var(--main)
				}
			}

			&-header {
				padding: 15px
				display flex
				align-items center
				gap: 40px
				cursor: pointer;
				border-radius var(--small-radius)
				transition background-color var(--transition)

				&:hover {
					background var(--dark-light-2)
				}

				.icon {
					padding: 10px
					width 40px
					height 40px
					+below(400px) {
						display none
					}
				}
			}

			&-title {
				flex-grow 1
			}

			&-body {
				padding: 0 15px
				font-size: 0.875rem
				max-height 0
				opacity 0
				overflow hidden
				transition var(--transition)
			}

			&-description {
				max-width 805px
				padding: 15px 0
				white-space pre-wrap
			}
		}
	}
}
</style>
