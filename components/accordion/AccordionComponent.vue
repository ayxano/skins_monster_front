<template>
  <div class="accordion">
    <div class="accordion-list">
      <div
        v-for="(item, i) in list"
        :key="i"
        class="accordion-list__item"
        :class="{ 'accordion-list__item--active': isActive(i) }"
      >
        <div @click="setActive(i)" class="accordion-list__item-header">
          <slot name="header" :item="item" />
        </div>
        <div ref="accRowBody" class="accordion-list__item-body">
          <slot name="body" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  list: Array,
});

const activeItemIndex = ref(null);
const accRowBody = ref(null);

function isActive(index) {
  return index === activeItemIndex.value;
}

function setActive(i) {
  const el = accRowBody?.value[i];
  const prevEl = accRowBody?.value[activeItemIndex.value];
  if (prevEl) {
    toggleStyles(prevEl, false);
  }

  if (el) {
    toggleStyles(el, !isActive(i));
    if (isActive(i)) {
      activeItemIndex.value = null;
    } else {
      activeItemIndex.value = i;
    }
  }
}

function toggleStyles(el, show) {
  if (show) {
    el.style.maxHeight = el.scrollHeight + "px";
    el.style.opacity = "1";
  } else {
    el.style.maxHeight = "0";
    el.style.opacity = "0";
  }
}
</script>

<style lang="stylus">
.accordion {
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
		}
	}
}
</style>
