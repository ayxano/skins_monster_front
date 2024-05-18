<template>
  <label
    class="textarea"
    :class="{
      'textarea--filled': !!modelValue,
      'textarea--error': errors && errors.length,
      'textarea--icon-left': iconPosition === 'left',
      'textarea--icon-right': iconPosition === 'right',
    }"
  >
    <span v-if="title" class="textarea__title">
      <span>{{ title }}</span>
      <span class="input__required" v-if="required">*</span>
    </span>
    <span class="textarea__container">
      <button class="textarea__action" type="button" v-if="iconPosition" @click="$emit('action')">
        <slot name="icon">
          <IconComponent name="search" />
        </slot>
      </button>
      <textarea
        v-maska
        :data-maska="mask"
        :placeholder="placeholder"
        class="textarea__field"
        ref="textarea"
        :value="modelValue"
        :rows="rows"
        @input="handleInput"
        @blur="$emit('blur', $event)"
      />
    </span>
    <span v-if="subtitle" class="textarea__subtitle">{{ subtitle }}</span>
    <span class="textarea__errors" v-if="errors && errors.length">
      <pre v-for="(error, i) in errors" :key="i">{{ error }}</pre>
    </span>
  </label>
</template>
<script>
import IconComponent from "../IconComponent";
import { vMaska } from "maska";

export default {
  name: "TextareaComponent",
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    mask: {
      type: String,
    },
    type: {
      type: String,
      default() {
        return "text";
      },
    },
    placeholder: {
      type: [String, Number],
    },
    rows: {
      type: String,
      // default: "10",
    },
    modelValue: [String, Number],
    errors: {
      type: Array,
      default: () => [],
    },
    iconPosition: {
      type: String,
      validator(value) {
        return value === "left" || value === "right";
      },
    },
    autoResize: Boolean,
    modified: Boolean,
    required: Boolean,
  },
  methods: {
    handleInput(event) {
      this.$emit("update:model-value", event.target.value);

      if (this.autoResize) {
        let el = event.target;
        el.style.height = 0;
        el.style.height = el.scrollHeight + "px";
      }
    },
    focus() {
      this.focused = true;
      this.$emit("focus");
    },
    blur() {
      this.focused = false;
      this.$emit("blur");
    },
  },
  directives: { maska: vMaska },
  components: { IconComponent },
};
</script>

<style lang="stylus">
.textarea {
  display inline-flex
  flex-direction column
  gap 10px

  &__container {
    display flex
    position relative
    background: var(--white);
    border: 1px solid var(--border-color);
    box-sizing: border-box;
    border-radius: 16px;
    height auto
    transition var(--transition)

    &:hover {
      border-color var(--dark-light)
    }
  }

  &:focus-within {
    & ^[0]__container {
      border-color var(--brown-light)
    }

    & .icon svg path {
      stroke var(--gray-3-dark)
    }
  }

  &--filled:not(:focus-within) {
    & ^[0]__container {
      border-color var(--dark)
    }

    & .icon svg path {
      stroke var(--dark)
    }
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

  &--focused {
    & ^[0]__container {
      border-color var(--dark)
    }
  }

  &--error {
    & ^[0]__container {
      border-color var(--red)
    }
  }

  &--icon-left &__action {
    position absolute
    left 0
    top 0
  }

  &--icon-left &__field {
    padding 12px 16px 12px 44px
  }

  &--icon-right &__action {
    position absolute
    right 0
    top 0
  }

  &--icon-right &__field {
    padding 12px 44px 12px 16px
  }

  &__title {
    font-size: 0.75rem
    line-height: 13px;
    color: var(--body-color);
    opacity: 0.5;
    white-space pre-line
  }

  &__subtitle {
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 20px;
    color: var(--gray);
  }

  &__required {
    color var(--red)
  }

  &__errors {
    color var(--red)
    font-weight: 500;
    font-size: 0.75em;
    line-height: 14px;
    display grid
    grid-gap 5px
  }

  //&__error {
  //  font-weight: normal;
  //  font-size: 0.75rem;
  //  line-height: 20px;
  //  color: var(--red);
  //}

  &__action {
    background none
    border none
    height 100%
    display inline-flex
    align-items center
    padding 16px
  }

  &__field {
    border none
    background none
    width 100%
    //height 100px
    padding 10px
    outline none
    font-weight: normal;
    font-size: 1em;
    color: var(--body-color);
    height auto
    resize none

    &::placeholder {
      color: var(--text-gray-3, #828282);
      font-size: 0.9375em;
      font-weight: 300;
      line-height: 19px;
    }
  }

  .icon {
    width 20px
    height 20px

    svg path {
      transition var(--transition)
      stroke var(--gray)
    }
  }
}
</style>
