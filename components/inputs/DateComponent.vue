<template>
  <div
    v-click-outside="blurList"
    :class="{
      'date-select--filled': singleSelected,
      'date-select--input': search.length || focused,
      'date-select--drop': opened,
      'date-select--loading': loading,
      'date-select--drop-top': listTop,
    }"
    class="date-select input input--modified"
  >
    <div class="date-select__container input__container">
      <input
        v-show="!loading"
        ref="input"
        :value="formatDate(singleSelected)"
        :placeholder="placeholder"
        class="input__field"
        readonly
        @blur="blur"
        @focus="focus"
      />
      <span v-show="!loading" class="input__title" @click="focus">
        <span>{{ title }}</span>
        <span class="input__required" v-if="required">*</span>
      </span>
    </div>
    <button
      v-if="singleSelected"
      v-show="!loading"
      class="date-select__clear input__action"
      type="button"
      @click="clean"
    >
      <Icon name="close" />
    </button>
    <div v-show="!loading" class="date-select__drop">
      <DatePicker
        v-if="opened"
        v-model="singleSelected"
        :first-day-of-week="2"
        :min-date="minDate"
        :max-date="maxDate"
        :is-range="range"
        :mode="mode"
        locale="ru"
        title-position="left"
        trim-weeks
        :is24hr="true"
        @input="$emit('input', $event)"
        :minute-increment="5"
      />
    </div>
  </div>
</template>

<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import moment from "moment";
import Icon from "../IconComponent.vue";
import vClickOutside from "click-outside-vue3";

export default {
  name: "DateComponent",
  props: {
    title: {
      type: String,
    },
    mode: {
      type: String,
      default() {
        return "date";
      },
    },
    placeholder: {
      type: String,
      default() {
        return "Все";
      },
    },
    minDate: Date,
    maxDate: Date,
    range: Boolean,
    loading: Boolean,
    required: Boolean,
    value: [Object, Date],
  },
  data() {
    return {
      singleSelected: null,
      search: "",
      opened: false,
      listTop: false,
      scrollTimeout: undefined,
      focused: false,
    };
  },
  watch: {
    value() {
      this.singleSelected = this.value;
    },
    opened() {
      if (this.opened) {
        this.$nextTick(() => {
          this.calculateListPosition();
        });
      }
    },
  },
  mounted() {
    this.singleSelected = this.value; // добавил, т.к. watch на value не работал
    const placeholder = this.$refs.input.getAttribute("placeholder");
    if (placeholder) {
      this.$refs.input.setAttribute("size", placeholder.length - 2 + "");
    }

    window.addEventListener("scroll", () => {
      if (this.opened) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
          this.$nextTick(() => {
            this.calculateListPosition();
          });
        }, 200);
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", () => {});
  },
  methods: {
    formatDate(date) {
      const format = "DD.MM.YYYY в HH:mm";
      if (date) {
        if (date instanceof Date) {
          return moment(date).format(format);
        }
        return moment(date.start).format(format) + " - " + moment(date.end).format(format);
      }
      return date;
    },
    calculateListPosition() {
      if (this.$refs.list) {
        const height = this.$refs.list.$el.clientHeight;
        const top = this.$refs.list.$el.getBoundingClientRect().top;
        if (top + height > window.innerHeight) {
          this.listTop = true;
          return;
        }
        this.listTop = false;
      }
    },
    clean() {
      this.singleSelected = null;
      this.$emit("input", null);
    },
    /**
     * Обработка события выбора
     */
    select() {},
    /**
     * Фокус на input
     */
    focus() {
      this.$refs.input.focus();
      this.focused = true;
      this.opened = true;
    },
    /**
     * Расфокус на input
     */
    blur() {
      this.focused = false;
    },
    /**
     * Убрать список
     */
    blurList() {
      this.opened = false;
    },
  },
  components: {
    Icon,
    DatePicker,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>

<style lang="stylus">
@import "~@/styles/elements/input.styl"
.date-select {
  transition background-color .2s
  display flex
  align-items center
  position: relative
  height 60px

  &--loading {
    background-color var(--main);
    background-size: 31px 31px;
    background-image: linear-gradient(-45deg, rgba(0, 0, 0, .1) 25%, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .1) 0, rgba(0, 0, 0, .1) 75%, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0));
    animation: stripped 2s linear 0s infinite normal none running;
  }

  &__drop {
    position absolute
    left 0
    bottom 0
    max-width calc(100% + 2px)
    transform translateY(calc(100% - 1px))
    z-index 10
    box-shadow: 0 0 8px var(--black-o1);
    border-radius 0 0 10px 10px

    .vc-container {
      font-family var(--font-regular)
      border-radius 0 0 10px 10px
      left -1px
      border-color $gray1
      border-top-color transparent
      --font-normal: 300;
      --font-medium: 400;
      --font-semibold: 500;
      --font-bold: 600;
      --text-xs: 12px;
      --text-sm: 0.8750rem;
      --text-base: 1em;
      --text-lg: 18px;
      --leading-snug: 1.375;
      --rounded: 4px;
      --rounded-lg: 4px;
      --rounded-full: 100%;
      --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
      --slide-translate: 22px;
      --slide-duration: 0.2s;
      --slide-timing: ease;
      --day-content-transition-time: 0.2s ease-in;
      --weeknumber-offset: -34px;

      .vc-title {
        text-transform: capitalize;
      }
    }
  }

  &--filled {
    background var(--white)

    & ^[0]__empty  {
      color var(--body-color)
    }
  }

  &__container {
    width: 100%;
    height: 100%;
  }

  &__empty {
    font-size: 0.875rem;
    color: var(--dark-light)
    height 100%
    // padding 20px 12px 5px
    padding: 15px 12px
    display flex
    align-items center
    min-width 95px
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &__action {
    padding 10px 12px
  }

  &--drop {
    background var(--white)
    border-radius 10px 10px 0 0
    border-bottom-color transparent

    & ^[0]__clear {
      z-index 12
    }
  }

  &--drop-top {
    border-radius 0 0 10px 10px

    & ^[0]__drop {
      border-radius 10px 10px 0 0
      position absolute
      left 0
      top 0
      bottom initial
      transform translateY(calc(-100% + 2px))
    }

    & ^[0]__clear {
      z-index 12
    }
  }

  &__clear {
    z-index 1
    position absolute
    right 0

    &:hover {
      .icon svg path {
        fill var(--red)
      }
    }
  }

  &__field {
    padding 5px 12px 25px
    font-size: 0.8750rem;
    line-height: 20px;
    z-index 1
    color var(--dark)
    width 100%
    height 100%
    display inline-flex
    flex-shrink 0
  }

  &__selected {
    display grid
    grid-gap 4px
    grid-template-columns auto auto
    +below(480px) {
      display none
    }

    &::placeholder {
			color: var(--gray-dark-2, #516D7D);
    }

    &--one {
      grid-template-columns auto
    }

    .icon {
      width 12px
      height 12px
      display flex
      align-items center
      justify-content center
    }

    &-item {
      cursor pointer
      background var(--border-color)
      border-radius 10px
      padding 2px 4px
      font-size: 0.8750rem;
      line-height: 22px;
      text-align: center;
      color: var(--black);
      text-decoration none

      &:hover {
        color var(--black)
      }

      &:first-child {
        display grid
        grid-template-columns auto 12px
        align-items center
      }
    }
  }

  &:not(.input-default)
  &:not(.date-select--input) {
    border-color var(--gray) !important;

    & ^[0]__title {
      font-size: 1em;
      line-height: 20px;
      width: 100%;
      height 100%
      padding 20px
    }
  }
}
</style>
