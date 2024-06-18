<template>
  <ul class="select-list">
    <template v-if="filteredOptions.length">
      <li
        v-for="(o, i) in filteredOptions"
        :key="i"
        class="select-list__item"
        :class="{ 'select-list__item--active': isChecked(o) }"
      >
        <CheckboxComponent @update:modelValue="toggle(o)" :modelValue="isChecked(o)" v-if="multiple">
          <span>{{ getOptionTitle(o) }}</span>
        </CheckboxComponent>
        <button type="button" @click.prevent="toggle(o)" v-else>
          <slot :i="i" :item="o">
            {{ getOptionTitle(o) }}
          </slot>
        </button>
      </li>
    </template>
    <li v-else class="select-list__empty">Пусто</li>
  </ul>
</template>

<script>
import CheckboxComponent from "~/components/inputs/CheckboxComponent";
export default {
  name: "SelectListComponent",
  components: { CheckboxComponent },
  emits: ["update:modelValue"],
  props: {
    labelName: {
      type: [String, Array],
      default: "title",
    },
    query: {
      type: String,
      default: "",
    },
    modelValue: [Array, Object],
    options: { type: Array, required: true },
    multiple: Boolean,
  },
  computed: {
    filteredOptions() {
      return this.options.filter((o) =>
        this.getOptionTitle(o).toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },
  methods: {
    isChecked(option) {
      if (this.multiple) {
        return this.modelValue.map((s) => JSON.stringify(s)).includes(JSON.stringify(option));
      } else {
        return JSON.stringify(option) === JSON.stringify(this.modelValue);
      }
    },
    toggle(o) {
      if (!this.disabled) {
        if (this.multiple) {
          let array = this.modelValue;
          if (this.isChecked(o)) {
            let indexOfSelected = this.modelValue.findIndex((v) => JSON.stringify(v) === JSON.stringify(o));
            array.splice(indexOfSelected, 1);
          } else {
            array.push(o);
          }
          this.$emit("update:modelValue", array);
        } else {
          this.$emit("update:modelValue", o);
        }
      }
    },
    getOptionTitle(option) {
      if (Array.isArray(this.labelName)) {
        return option[this.labelName[0]][this.labelName[1]];
      }
      return option[this.labelName];
    },
  },
};
</script>

<style lang="stylus">
.select-list {
  border-radius: 5px;
  display flex
  flex-direction column
  align-items flex-start
  overflow auto
  padding 5px 0
  scrollbar-width thin
  scrollbar-color rgba(0, 0, 0, 0.3) transparent
	background: var(--dark-light)
	border: 2px solid var(--dark-light-2, #1F3B4B);

  &::-webkit-scrollbar {
    width 8px
    height 8px
  }

  &::-webkit-scrollbar-track {
    background transparent
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color rgba(0, 0, 0, 0.3)
    border-radius 3px
    border none
  }

  &__item {
    display inline-flex
    align-items center
    justify-content stretch
    width 100%
    height 100%
		cursor pointer
		flex-shrink 0

		&:hover {
			background var(--gray-5)
		}

    .checkbox,
    button {
      padding 5px 10px
      transition background .2s
      background none
      border none
			cursor: pointer;
      width 100%
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 18px;
      color: var(--gray-dark);
      text-align left
      min-height 18px

      &:hover {
        background var(--gray-dark-2)
      }

      &__field {
        gap 5px
        align-items center
        padding 5px 10px
      }
    }

		&--active& {
			button {
				background: var(--dark-light-2);
			}
		}

    .checkbox {
      padding 0
    }
  }

  &__empty {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 16px;
    color: var(--dark);
    padding 5px 10px
  }
}
</style>
