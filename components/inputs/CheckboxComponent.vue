<template>
  <div
    class="checkbox"
    :class="{
      'checkbox--error': errors.length,
      'checkbox--focused': focused,
      'checkbox--active': isChecked || indeterminate,
      'checkbox--indeterminate': indeterminate,
      'checkbox--small': small,
      'checkbox--big': big,
    }"
  >
    <label class="checkbox__field" @click.shift="$emit('update:shift:modelValue', modelValue)">
      <span class="checkbox__icon">
        <IconComponent name="subtract-line" v-if="indeterminate" />
        <IconComponent name="check-line" v-else-if="isChecked" />
      </span>
      <input
        @focus="focused = true"
        @blur="focused = false"
        type="checkbox"
        :checked="isChecked"
        @input="toggleValue"
      />
      <slot></slot>
    </label>
    <div class="checkbox__errors" v-if="errors.length">
      <span v-for="(error, i) in errors" :key="i">{{ error }}</span>
    </div>
    <div class="checkbox__messages" v-if="messages.length">
      <span v-for="(message, i) in messages" :key="i">{{ message }}</span>
    </div>
  </div>
</template>

<script>
import IconComponent from "@/components/IconComponent.vue";

export default {
  name: "CheckboxComponent",
  components: { IconComponent },
  emits: ["update:modelValue", "update:shift:modelValue", "change"],
  props: {
    modelValue: [Array, Boolean],
    item: Object, // нужно, чтобы отследить элемент в массиве, если modelValue массив
    indeterminate: Boolean,
    small: Boolean,
    big: Boolean,
    red: Boolean,
    messages: {
      type: Array,
      default: () => [],
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    focused: false,
  }),
  computed: {
    isChecked() {
      if (this.modelValue && Array.isArray(this.modelValue) && this.item) {
        return this.modelValue && this.modelValue.length && this.modelValue.includes(this.item.id);
      }
      return !!this.modelValue;
    },
  },
  methods: {
    toggleValue(e) {
      if (this.modelValue && Array.isArray(this.modelValue) && this.item) {
        let value = JSON.parse(JSON.stringify(this.modelValue));
        if (value.includes(this.item.id)) {
          value.splice(value.indexOf(this.item.id), 1);
        } else {
          value.push(this.item.id);
        }
        this.$emit("update:modelValue", value);
      } else {
        this.$emit("update:modelValue", e.target.checked);
      }
    },
  },
};
</script>

<style lang="stylus">
.checkbox {
  display inline-grid
  grid-gap 5px
  transition color var(--transition)

  &__icon {
    background: var(--white);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    display flex
    align-items center
    justify-content center
    width 18px
    height 18px
    transition .2s
    flex-shrink 0

    ^[0]--big & {
      width 20px
      height 20px
    }

    ^[0]--small & {
      width 16px
      height 16px
    }

    ^[0]--active & {
      background: var(--main);
      border-color var(--main)
    }

    ^[0]--focused & {
      box-shadow: 0 0 0 3px var(--dark-o5);
    }

    .icon {
      width 100%
      height 100%
      margin -1px

      svg path {
        fill var(--white)
      }
    }
  }

  &__field {
    display flex
    align-items center
    justify-content flex-start
    gap 3px
    cursor pointer
    font-weight 500
    font-size 0.813rem
    line-height 18px
    transition color var(--transition)

    &:hover {
      color var(--main)

      .checkbox__icon {
        border-color var(--main)
      }
    }

    input {
      appearance none
      border none
      background none
      outline none
      overflow hidden
      height 0
      width 0
    }
  }

  &__errors,
  &__messages {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 15px;
    color: var(--dark);
    opacity: 0.4;
    display grid
    grid-gap 3px
  }

  &__errors {
    opacity 1
    color var(--red)
  }
}
</style>
