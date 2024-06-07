<template>
  <ClientOnly>
    <div v-click-outside="hide" class="dropdown">
      <div @click.prevent="toggle" class="dropdown-target">
        <slot />
      </div>
      <div
        class="dropdown-content"
        :class="[`dropdown-content--${position}`, { 'dropdown-content--visible': modelValue }]"
      >
        <slot name="content" />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useRoute } from "#app";
import { watch } from "vue";

const emits = defineEmits(["update:model-value"]);
const props = defineProps({
  modelValue: Boolean,
  position: {
    type: String,
    default: "bottom-left",
  },
});

const route = useRoute();

watch(
  () => route.path && route.name,
  () => {
    hide();
  }
);

function toggle() {
  if (props.modelValue) {
    emits("update:model-value", false);
  } else {
    emits("update:model-value", true);
  }
}

function hide() {
  if (props.modelValue) {
    emits("update:model-value", false);
  }
}
</script>

<style lang="stylus">
.dropdown {
	position relative
	color var(--body-color)

	&-content {
		position absolute
		display none
		border-radius: 5px;
		border: 1px solid var(--gray-dark-2, #516D7D);
		background: var(--dark-light-2, #1F3B4B);
		box-shadow: 0 15px 40px 0 var(--black-o3)

		&--bottom-left {
			top 100%
			left 0
		}

		&--bottom-right {
			top 100%
			left calc(100% - 10px)
		}

		&--visible {
			display flex
		}
	}
}
</style>
