<template>
  <ul v-show="total && total > 1" class="pagination">
    <li v-show="page !== 1">
      <button class="pagination__link" type="button" @click="$emit('change', 1)">Назад</button>
    </li>
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
    <li>
      <button v-show="page !== total" class="pagination__link" type="button" @click="$emit('change', total)">
        Дальше
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    page: Number,
    list: Object, // объект с data и paginatorInfo
  },
  computed: {
    total() {
      if (this.list && this.list.paginatorInfo) {
        return Math.ceil(this.list.paginatorInfo.total / this.list.paginatorInfo.perPage);
      }
      return 0;
    },
    currentPages() {
      let startPage, endPage;
      const maxPages = 4;
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

  &__link {
    display flex
    align-items center
    justify-content: center;
    width 100%
    height 35px
    padding 6px 12px
    background none
    cursor pointer
    border none
    transition var(--transition)
    border-radius: 5px;
    background: var(--surface-white, #FFF);
    color: var(--text-link, #007AFF);
    font-family: Commissioner;
    font-size: 1em
    line-height: 1
    font-style: normal;
    font-weight: 500;

    &--disabled {
      cursor: initial;
    }

    .icon {
      width 20px
      height 20px
    }

    &:not(&--disabled):not(&--active):hover {
      border-color var(--brown)

      & ^[0]__icon svg path {
        stroke var(--gray)
      }
    }

    &--active {
      cursor initial
      background var(--red)
      color var(--white)
      pointer-events none
    }
    &:hover {
      background: var(--surface-gray-20, #EDEDED);
    }
  }
}
</style>
