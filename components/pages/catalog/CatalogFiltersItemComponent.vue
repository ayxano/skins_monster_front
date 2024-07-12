<template>
  <div v-if="showFilter" class="category-filters__item" :class="{ 'category-filters__item--expand': expand }">
    <button @click="expand = !expand" class="category-filters__item-header btn">
      <span class="category-filters__item-title"> {{ modifiedTitle }} </span>
      <span v-if="checkedList.length && !onlyInputs" class="category-filters__item-count small-tag">
        {{ checkedList.length }}
      </span>
      <button
        v-if="checkedList.length && !onlyInputs"
        class="category-filters__item-clear small-tag"
        title="Clear"
        @click.prevent="checkedList = []"
      >
        <IconComponent name="close" />
      </button>
      <IconComponent class="category-filters__item-down-icon" name="arrow-down-small" />
    </button>
    <div v-if="expand && showSearch" class="category-filters__item-inputs">
      <slot name="inputs">
        <InputComponent
          class="category-filters__item-search"
          v-model="searchTitle"
          @input="showAll = true"
          icon-position="right"
          small
        >
          <template #icon>
            <IconComponent class="category-filters__item-search-icon" name="search-normal-1" />
          </template>
        </InputComponent>
      </slot>
    </div>
    <template v-if="!onlyInputs">
      <div v-show="expand && filteredList && filteredList.length" class="category-filters__item-checkboxes">
        <CheckboxComponent v-model="checkedList" v-for="(item, i) in filteredList" :item="item" :key="i">
          {{ item }}
        </CheckboxComponent>
      </div>
      <span
        class="category-filters__item-not-found"
        v-show="searchTitle && !(filteredList && filteredList.length)"
      >
        Nothing found
      </span>
    </template>
  </div>
</template>

<script>
import InputComponent from "~/components/inputs/InputComponent.vue";
import CheckboxComponent from "~/components/inputs/CheckboxComponent.vue";

export default {
  name: "CategoryFiltersItemComponent",
  emits: ["update:model-value", "change"],
  props: {
    title: String,
    list: Array,
    name: String,
    modelValue: {
      type: Array,
      default: () => [],
    },
    search: Boolean,
    expanded: Boolean,
    onlyInputs: Boolean,
  },
  mounted() {
    if (this.modelValue && this.modelValue.length) {
      this.checkedList = this.modelValue;
    }
    if (this.expanded) {
      this.expand = this.expanded;
    }
  },
  watch: {
    modelValue(val) {
      this.checkedList = val;
    },
    checkedList(val) {
      this.$emit("update:model-value", val);
    },
  },
  data() {
    return {
      expand: false,
      searchTitle: "",
      showAll: true,
      checkedList: [],
      max: 5, // максимум элементов в списке изначально
    };
  },
  computed: {
    filteredList() {
      if (this.showAll) {
        return this.list.filter((item) => item.toLowerCase().includes(this.searchTitle.toLowerCase()));
      }
      return this.list.slice(0, this.max);
    },
    showFilter() {
      return (this.list && this.list.length) || this.onlyInputs;
    },
    showSearch() {
      return (this.search && this.list && this.list.length > 15) || this.onlyInputs;
    },
    modifiedTitle() {
      let title = this.title;
      if (title) {
        title = title.replace("_", " ");
        title = title.charAt(0).toUpperCase() + title.slice(1);
      }
      return title;
    },
  },
  methods: {
    checked(id) {
      return this.checkedList.includes(id);
    },
  },
  components: { CheckboxComponent, InputComponent },
};
</script>
