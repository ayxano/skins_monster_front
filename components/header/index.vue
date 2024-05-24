<template>
  <header class="header">
    <InputComponent class="header-search" v-model="search" placeholder="Skins search" icon-position="right">
      <template #icon>
        <IconComponent name="search-normal-1" />
      </template>
    </InputComponent>
    <SocialsComponent />
    <HeaderActionsComponent />
  </header>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");
</script>

<style lang="stylus">
.header {
	display flex
	align-items center
	gap: 30px
	justify-content space-between
	padding: 40px 0

	&-search {
		width 50%
	}
}
</style>
