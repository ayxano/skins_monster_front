<template>
  <div v-if="listFiltered && listFiltered.length" class="faq" id="faq">
    <h3 class="faq-title">Additional information</h3>
    <div class="faq-content">
      <TabsComponent
        @update:model-value="activeItemIndex = null"
        v-model="activeTab"
        :tabs="listFiltered"
        label-field="name"
        label-by="index"
      />
      <div v-if="activeFaq && activeFaq.faqs" :key="activeTab" class="faq-list">
        <div
          v-for="(item, i) in activeFaq.faqs"
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
import { ref, computed } from "vue";

const props = defineProps({
  list: Array,
});

const activeItemIndex = ref(null);
const accItemBody = ref(null);
const activeTab = ref(0);

const listFiltered = computed(() => {
  return props.list.filter((item) => item.faqs && item.faqs.length);
});

const activeFaq = computed(() => {
  return listFiltered.value[activeTab.value];
});

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
		//+below(540px) {
		//	width 100%
		//}
		+below(400px) {
			flex-direction column
		}

		&__item {
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
