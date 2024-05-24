<template>
  <div
    class="input"
    :class="{
      'input--filled': !!modelValue,
      'input--error': errors.length,
      'input--icon-left': iconPosition === 'left',
      'input--icon-right': iconPosition === 'right',
      'input--disabled': disabled,
    }"
  >
    <span class="input__title" v-if="title">
      <span>{{ title }}</span>
      <span class="input__required" v-if="required">*</span>
    </span>
    <span class="input__container">
      <button
        class="input__action"
        type="button"
        v-if="$slots.icon"
        @click="$emit('action')"
        :class="{ 'input__action--no-action': noAction }"
      >
        <slot name="icon" />
      </button>
      <input
        :type="type"
        v-maska
        :data-maska="mask"
        :data-maska-tokens="maskTokens"
        :data-maska-reversed="maskReversed"
        :placeholder="placeholder"
        class="input__field"
        ref="input"
        :value="modelValue"
        @input="input"
        @focus="focus"
        @keyup.enter="$emit('enter')"
        @blur="$emit('blur', $event.target.value)"
        :disabled="disabled"
        :inputmode="inputmode"
        :min="min"
        :max="max"
      />
    </span>
    <span v-if="subtitle" class="input__subtitle">{{ subtitle }}</span>
    <div v-if="errors && errors.length" class="input__errors">
      <pre v-for="(e, i) in errors" :key="i">{{ e }}</pre>
    </div>
  </div>
</template>

<script>
import { vMaska } from "maska";

export default {
  name: "InputComponent",
  emits: ["update:model-value", "blur", "focus", "enter", "action"],
  props: {
    title: String,
    subtitle: String,
    mask: String,
    maskTokens: String,
    maskReversed: Boolean,
    type: {
      type: String,
      default() {
        return "text";
      },
    },
    numbersOnly: Boolean,
    placeholder: {
      type: [String, Number],
    },
    min: Number,
    max: Number,
    modelValue: [String, Number],
    errors: {
      type: Array,
      default() {
        return [];
      },
    },
    iconPosition: {
      type: String,
      validator(value) {
        return value === "left" || value === "right";
      },
    },
    disabled: Boolean,
    isPhone: Boolean,
    required: Boolean,
    inputmode: String,
    autofocus: Boolean, // фокус на инпуте при его инициализации
    noAction: Boolean, // для возможности добавления иконки, без возможности клика на нее
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.input.focus();
    }
  },
  methods: {
    input($event) {
      let value = $event.target.value;
      if (this.numbersOnly && value) {
        value = value ? parseFloat(value.replace(/[\s-()]/g, "")) : 0;
        if (this.min && value < this.min) {
          value = this.min;
        }
        if (this.max && value > this.max) {
          value = this.max;
        }
      }
      $event.target.value = value;
      this.$emit("update:model-value", value);
    },
    focus() {
      if (!this.modelValue && this.isPhone && this.mask) {
        this.$emit("update:model-value", " ");
      }
      this.focused = true;
      this.$emit("focus");
    },
  },
  directives: { maska: vMaska },
};
</script>

<style lang="stylus">
.input {
  display inline-flex
  flex-direction column
  gap 5px

  &__container {
    display flex
    position relative
		background: var(--white-o05);
		border: 2px solid var(--dark-light-2, #1F3B4B);
    box-sizing: border-box;
    border-radius: var(--small-radius)
    height 50px
    transition var(--transition)
    overflow hidden

    &:hover {
      border-color var(--gray-dark-2)
    }
  }

  &:focus-within {
    & ^[0]__container {
			box-shadow: 0 0 0 3px var(--green-o3);

			&:hover {
				border-color var(--dark-light-2, #1F3B4B)
			}
    }
  }

  &--filled:not(:focus-within) {
  }

  &--error& {
    & ^[0]__container {
      border-color var(--red)
    }

    & .icon svg path {
      fill var(--red)
    }

    &__field {
      color: var(--red);

      &::placeholder {
        color: var(--red);
      }
    }
  }

  &--error {
    & ^[0]__container {
      border-color var(--red)
    }
  }

  &--disabled {
    & ^[0]__container {
      background var(--gray-30)

      &:hover {
        border-color var(--text-disabled, #C3C3C3);
      }
    }

    & ^[0]__field {
      cursor no-drop
    }
  }

  &--icon-left &__action {
    position absolute
    left 0
    top 0
  }

  &--icon-left &__field {
    padding 15px 15px 15px 50px
  }

  &--icon-right &__action {
    position absolute
    top 0
    right 0
    z-index 2
  }

  &--icon-right &__field {
    padding 15px 50px 15px 18px
  }

  &__title {
    color: var(--text-gray, #6F6F6F);
    font-size: 0.8125em;
    font-weight: 300;
    line-height: 17px;
    display flex
    gap 4px
  }

  &__subtitle {
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 20px;
    color: var(--dark-light);
    opacity .5
    padding-left: 20px
  }

  &__required {
    color var(--red)
  }

  &__error {
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 20px;
    color: var(--red);
  }

  &__action {
    background none
    border none
    width 60px
    height 100%
    display inline-flex
    align-items center
    justify-content center
    padding 15px
    cursor pointer
    z-index 2
  }

  &__action--no-action {
    pointer-events: none;
  }

  &__field {
    border none
    background none
    width 100%
    height 100%
    padding 10px
    outline none
    font-weight: normal;
    font-size: 0.875rem;
    color: var(--body-color);

    &::placeholder {
      font-weight: normal;
      color var(--gray-dark)
    }
  }

  .icon {
    width 20px
    height 20px
		color var(--gray-dark)
  }

  &__errors {
    color var(--red)
    font-weight: 500;
    font-size: 0.75em;
    line-height: 14px;
    display grid
    grid-gap 5px

    & pre {
      white-space break-spaces
    }
  }
}
</style>
