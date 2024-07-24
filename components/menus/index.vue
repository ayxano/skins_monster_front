<template>
  <div class="menu" :class="{ 'menu--active': menus.length }" ref="menu">
    <div class="menu__content">
      <div ref="background" class="menu__background" @click="closeLast"></div>
      <component
        :is="activeMenu.component"
        v-bind="activeMenu.options"
        @close="closeLast"
        @closeAll="closeAll"
      ></component>
    </div>
  </div>
</template>

<script>
import { useDefaultStore } from "/stores/default";
import { hideBodyScroll } from "~/utils/global";

export default {
  name: "MenuComponent",
  computed: {
    menus() {
      return useDefaultStore().menus || [];
    },
    activeMenu() {
      return this.menus[this.menus.length - 1] || {};
    },
  },
  watch: {
    "menus.length"(val) {
      hideBodyScroll(val > 0);
    },
    "$route.name"() {
      if (!this.activeMenu.keepAlive) {
        useDefaultStore().menus = [];
      }
    },
    "$route.params"() {
      if (!this.activeMenu.keepAlive) {
        useDefaultStore().menus = [];
      }
    },
  },
  methods: {
    closeLast() {
      useDefaultStore().menus = [];
    },
    closeAll(callback) {
      if (callback) {
        callback();
      }
      useDefaultStore().menus = [];
    },
  },
};
</script>

<style lang="stylus">
main_class = ".menu"
.menu {
	position: fixed
  right: 0
	top: 0
  width: 100%
  height: 100%
  z-index: var(--z-index-menu)
  overflow: hidden
  background: var(--black-o5)
	opacity: 0
	pointer-events: none
	transition: opacity var(--transition)

	&--active {
		opacity 1
		pointer-events auto

		{ main_class }__content {
			transform: translateX(0)
		}
	}

  &__content {
    width: 100%
    height: 100%
    position: relative
		display: flex
    align-items: flex-start
    justify-content: flex-end
    overflow-y: auto
		transform: translateX(100%)
		transition: var(--transition)
  }

  &__background {
		position: fixed
		right: 0
		top: 0
    height 100%
    width 100%
    z-index 0
    cursor: pointer
  }

  &__body {
    display flex
    justify-content: left;
    width 100%

    &--left {
      justify-content left
    }

    &--right {
      justify-content right
    }
  }
}
</style>
