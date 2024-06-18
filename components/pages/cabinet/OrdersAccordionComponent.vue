<template>
  <div class="orders-accordion">
    <div
      v-for="(item, i) in list"
      :key="i"
      class="orders-accordion__item"
      :class="{ 'orders-accordion__item--active': i === activeItemIndex }"
    >
      <div @click="setActive($event, i)" class="orders-accordion__item-header">
        <span class="orders-accordion__item-title">Order #{{ item.id }}</span>
        <span class="orders-accordion__item-date">{{ createdDate(item) }}</span>
        <IconComponent name="arrow-down-1" />
      </div>
      <div ref="accItemBody" class="orders-accordion__item-body">
        <div class="orders-accordion__item-skins">
          <SkinCardHorizontalComponent
            v-for="(skin, index) in item.items"
            :key="index"
            :data="getSkin(skin)"
          />
        </div>
      </div>
    </div>
    <span v-if="!(list && list.length)">No orders</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { elementInViewport } from "~/utils/global";
import dayjs from "dayjs";

defineProps({
  list: Array,
});

const activeItemIndex = ref(null);
const accItemBody = ref(null);

function createdDate(item) {
  return dayjs(item.created_at).format("DD.MM.YYYY");
}

function getSkin(data) {
  return {
    ...data.item,
    ...data,
  };
}

function setActive(e, i) {
  const el = accItemBody.value[i];
  const prevEl = accItemBody.value[activeItemIndex.value];

  const toggleStyles = (el, show) => {
    if (show) {
      el.style.maxHeight = el.scrollHeight + "px";
      el.style.opacity = "1";
    } else {
      el.style.maxHeight = "0";
      el.style.opacity = "0";
    }
  };

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

  scrollIntoView(e.target);
}

function scrollIntoView(el) {
  setTimeout(() => {
    if (!elementInViewport(el)) {
      el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
  }, 150);
}
</script>

<style lang="stylus">
main_class = ".orders-accordion"
.orders-accordion {
	&__item {
		display flex
		flex-direction column

		&--active {
			{ main_class }__item-header .icon {
				transform rotate(-180deg)
			}
		}

		&-header {
			padding: 15px 20px
			display flex
			align-items center
			gap: 15px
			cursor: pointer;
			border-radius var(--small-radius)
			border-bottom: 1px solid var(--dark-light-2, #1F3B4B);
			transition background-color var(--transition)

			&:hover {
				background var(--dark-light-2)
			}

			.icon {
				width 14px
				height 14px
				transition transform var(--transition)
			}
		}

		&-title {
			font-weight: 700;
			line-height: 26px;
		}

		&-date {
			flex-grow 1
			color: var(--white-o5);
			font-size: 0.75rem
			line-height: normal;
		}

		&-body {
			padding: 0 20px
			font-size: 0.875rem
			max-height 0
			opacity 0
			overflow hidden
			transition var(--transition)
		}

		&-skins {
			padding: 20px 0
			display flex
			flex-direction column
			gap: 5px
		}
	}
}
</style>
