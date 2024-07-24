<template>
  <div class="default-menu filter-menu">
    <div class="default-menu__header">
      <div class="default-menu__header-top">
        <span class="default-menu__title"></span>
        <button type="button" class="default-menu__close btn" @click="$emit('close')">
          <IconComponent name="close" />
        </button>
      </div>
    </div>
    <div class="default-menu__body filter-menu__body">
      <CatalogFiltersListComponent />
    </div>
  </div>
</template>

<script setup></script>

<style lang="stylus">
.filter-menu {
	&__body {
		padding-bottom 40px
		scrollbar-gutter stable
	}
}
</style>
