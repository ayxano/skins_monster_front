<template>
  <div class="empty-block">{{ text }}</div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "No data",
  },
});
</script>

<style lang="stylus">
.empty-block {
	display: flex;
	width: 100%;
	min-height: 200px;
	border-radius: var(--main-radius)
	border: 1px solid var(--dark-light-2);
	text-align: center;
	justify-content: center;
	align-items: center;
}
</style>
