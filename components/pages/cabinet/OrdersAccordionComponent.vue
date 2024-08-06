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
          <div class="orders-accordion__item-info">
            <div class="orders-accordion__item-info-row">
              <span>Status: </span>
              <span
                class="orders-accordion__item-status"
                :class="{
                  'orders-accordion__item-status--created': item.status === 'created',
                  'orders-accordion__item-status--active': item.status === 'active',
                  'orders-accordion__item-status--ended': item.status === 'ended',
                  'orders-accordion__item-status--error': item.status === 'error',
                }"
              >
                {{ item.status }}
              </span>
            </div>
            <div v-if="showPayLink(item)" class="orders-accordion__item-pay orders-accordion__item-info-row">
              <span>Payment: </span>
              <a :href="item.guavapay_payment_url"> Pay for the order </a>
            </div>
          </div>
          <SkinCardHorizontalComponent
            v-for="(skin, index) in item.items"
            :key="index"
            :data="getSkin(skin)"
            order-item
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

function showPayLink(item) {
  return ["created"].includes(item.status) && item.guavapay_payment_url;
}

function createdDate(item) {
  return dayjs(item.created_at).format("DD.MM.YYYY");
}

function getSkin(data) {
  return {
    ...data.item,
    price: data.price,
    status: data.status,
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
			position: relative
			padding: 15px 20px
			display flex
			align-items center
			gap: 15px
			cursor: pointer;
			border-radius var(--small-radius)
			transition background-color var(--transition)

			&:hover {
				background var(--dark-light-2)

				&:after {
					display none
				}
			}

			&:after {
				content: ""
				display: block
				height: 1px
				width 100%
				background: var(--dark-light-2, #1F3B4B)
				position absolute
				left 0
				right 0
				top: 100%
			}

			.icon {
				margin-left auto
				width 14px
				height 14px
				transition transform var(--transition)
			}
		}

		&-title {
			font-weight: 700;
			line-height: 26px;
		}

		&-status {
			font-size 0.875rem
			padding: 0 10px
			background-color var(--gray-dark-2)
			border-radius 5px

			&--active {
				background-color var(--green-dark)
			}

			&--ended {
				background-color var(--green-dark)
			}

			&--error {
				background-color var(--red)
			}
		}

		&-date {
			flex-grow 1
			color: var(--white-o5);
			font-size: 0.75rem
			line-height: normal;
		}

		&-info {
			display flex
			flex-wrap: wrap
			align-items center
			gap: 10px
			padding-bottom 10px

			&-row {
				display flex
				align-items center
				gap: 10px
				align-self flex-start
			}
		}

		&-pay {
			display flex
			align-items center
			gap: 10px
			align-self flex-start

			a {
				font-size 0.875rem
				display flex
				background-color var(--gray-dark-2)
				padding: 0 10px
				border-radius 5px

				&:hover {
					text-decoration underline
				}
			}
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
