<template>
  <ClientOnly>
    <div v-click-outside="hide" class="dropdown">
      <div @click.prevent="toggle" class="dropdown-target">
        <slot />
      </div>
      <div
        class="dropdown-content"
        :class="[`dropdown-content--${position}`, { 'dropdown-content--visible': visible }]"
      >
        <slot name="content" />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useRoute } from "#app";
import { watch } from "vue";

const emits = defineEmits(["update:visible"]);
const props = defineProps({
  visible: Boolean,
  position: {
    type: String,
    default: "bottom-left",
  },
  targetRelative: {
    type: Boolean,
    default: true,
  },
});

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    hide();
  }
);

function toggle() {
  emits("update:visible", !props.visible);
}

function hide() {
  emits("update:visible", false);
}
</script>

<style lang="stylus">
.dropdown {
	color var(--body-color)
	z-index var(--z-index-dropdown)

	&--relative {
		position relative
	}

	&-content {
		position absolute
		opacity 0
		visibility hidden
		//transform scale(0.1)
		transform translateY(10px)
		transition opacity .2s, transform .2s

		&--bottom-left {
			top 100%
			left 0
		}

		&--bottom-right {
			top 100%
			left calc(100% - 10px)
		}

		&--visible {
			opacity 1
			visibility visible
			//transform scale(1)
			transform translateY(0)
		}
	}
}
</style>
