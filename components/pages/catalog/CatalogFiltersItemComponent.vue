<template>
  <div v-if="showFilter" class="category-filters__item" :class="{ 'category-filters__item--expand': expand }">
    <button @click="expand = !expand" class="category-filters__item-header btn">
      <span class="category-filters__item-title"> {{ title }} </span>
      <IconComponent name="arrow-down-small" />
    </button>
    <div v-if="expand && showSearch" class="category-filters__item-inputs">
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
    </div>
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
  },
  mounted() {
    if (this.modelValue && this.modelValue.length) {
      this.checkedList = this.modelValue;
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
      return this.list && this.list.length;
    },
    showSearch() {
      return this.search && this.list && this.list.length > 15;
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
