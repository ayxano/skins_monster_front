<template>
  <ul v-show="total && total > 1" class="pagination">
    <template v-if="page >= maxPages">
      <li>
        <button class="pagination__link" type="button" @click="$emit('change', 1)">
          <IconComponent name="arrow-left-duo-chevron" />
        </button>
      </li>
      <li class="pagination-prev">
        <button class="pagination__link" type="button" @click="$emit('change', page - 1)">
          <IconComponent name="arrow-left-chevron" />
        </button>
      </li>
    </template>
    <li v-for="p in currentPages" :key="p">
      <button
        :class="{ 'pagination__link--active': page === p }"
        class="pagination__link"
        type="button"
        @click="$emit('change', p)"
      >
        {{ p }}
      </button>
    </li>
    <li class="pagination-next">
      <button
        v-show="page !== total"
        class="pagination__link"
        type="button"
        @click="$emit('change', page + 1)"
      >
        <IconComponent name="arrow-right-chevron" />
      </button>
    </li>
    <li>
      <button v-show="page !== total" class="pagination__link" type="button" @click="$emit('change', total)">
        <IconComponent name="arrow-right-duo-chevron" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaginationComponent",
  emits: ["change"],
  props: {
    page: Number,
    meta: Object, // объект с data и paginatorInfo
    maxPages: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    total() {
      if (this.meta) {
        return Math.ceil(this.meta.total / this.meta.perPage);
      }
      return 0;
    },
    currentPages() {
      let startPage, endPage;
      const maxPages = this.maxPages;
      if (this.total <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = this.total;
      } else {
        // total pages more than max so calculate start and end pages
        const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (this.page <= maxPagesBeforeCurrentPage) {
          // current page near the start
          startPage = 1;
          endPage = maxPages;
        } else if (this.page + maxPagesAfterCurrentPage >= this.total) {
          // current page near the end
          startPage = this.total - maxPages + 1;
          endPage = this.total;
        } else {
          // current page somewhere in the middle
          startPage = this.page - maxPagesBeforeCurrentPage;
          endPage = this.page + maxPagesAfterCurrentPage;
        }
      }
      return Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);
    },
  },
};
</script>

<style lang="stylus">
.pagination {
  display flex
  align-items center
  list-style none
  overflow: hidden;
  gap 5px

	&-prev,
	&-next {
		+below(540px) {
			display none
		}
	}

  &__link {
    display flex
    align-items center
    justify-content: center;
    width 40px
    height 40px
    padding 5px
    background none
    cursor pointer
    border none
    transition var(--transition)
    border-radius: 50%;
    background: transparent;
    color: var(--gray-dark-2, #516D7D);
    font-size: 0.875rem
    line-height: 1

    &--disabled {
      cursor: initial;
    }

    .icon {
      width 18px
      height 18px
    }

    &:not(&--disabled):not(&--active):hover {
			background: var(--dark-light-2)
			color: var(--white)
    }

    &--active {
      cursor initial
      background var(--main)
      color var(--dark)
      pointer-events none
    }
  }
}
</style>
