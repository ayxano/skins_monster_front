<template>
  <div class="skin-card-dropdown">
    <SkinFloatComponent :float="float" />
    <div class="skin-card-dropdown__params">
      <div v-for="(item, i) in tags" :key="i" class="skin-card-dropdown__param">
        <span class="skin-card-dropdown__param-title">{{ item.category_name }}</span>
        <span class="skin-card-dropdown__param-value">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  data: Object,
  float: Object,
});

const availableTags = ["Tournament", "TournamentTeam", "ProPlayer"];

const tags = computed(() => {
  return props.data.tags.filter((item) => !availableTags.includes(item.category));
});
</script>

<style lang="stylus">
.skin-card-dropdown {
	border: 1px solid var(--dark-light-2, #1F3B4B);
	background: var(--dark, #00141F);
	border-radius var(--main-radius)
	padding: 15px
	width calc(100% + 2px)
	display flex
	flex-direction column
	gap: 5px
	margin: 0 -1px

	&__params {
		display flex
		flex-direction column
		gap: 5px
	}

	&__param {
		display flex
		align-items center
		gap: 20px
		justify-content space-between
		font-size 0.75rem
		line-height normal

		&-title {
			color: var(--gray-dark, #D4F0FF);
		}

		&-value {
			text-align right
		}
	}
}
</style>
