<template>
  <div class="orders-accordion">
    <div
      v-for="(item, i) in list"
      :key="i"
      class="orders-accordion__item"
      :class="{ 'orders-accordion__item--active': i === activeItemIndex }"
    >
      <div @click="setActive(i)" class="orders-accordion__item-header">
        <span class="orders-accordion__item-title">{{ item.title }}</span>
        <span class="orders-accordion__item-date">{{ item.date }}</span>
        <IconComponent name="arrow-down-1" />
      </div>
      <div ref="accItemBody" class="orders-accordion__item-body">
        <div class="orders-accordion__item-skins">
          <SkinCardHorizontalComponent v-for="(skin, index) in item.skins" :key="index" :data="skin" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const skins = [
  {
    id: 1,
    title: "AK-47",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_1.png",
    price: "$778",
    float: 0.34054558,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 2,
    title: "MAC-10 | Heat",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_2.png",
    price: "$778",
    old_price: "$2395.16",
    float: 0.34054558,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 3,
    title: "Blue Steel",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_3.png",
    price: "$880",
    old_price: "$2395.16",
    float: 0.34054558,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
  {
    id: 4,
    title: "Chrome Cannon",
    subtitle: "Inheritance",
    img: "/images/tmp/skin_card_4.png",
    price: "$778",
    old_price: "$1020.56",
    float: 0.34054558,
    exterior: "Field-Tested",
    rarity: "Covert",
    paintIndex: "707",
  },
];

const list = [
  {
    title: "Order #123",
    date: "17.02.2024",
    skins: skins,
  },
  {
    title: "Order #325",
    date: "13.02.2024",
    skins: skins,
  },
  {
    title: "Order #325",
    date: "13.01.2024",
    skins: skins,
  },
];

const activeItemIndex = ref(null);
const accItemBody = ref(null);

function setActive(i) {
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
