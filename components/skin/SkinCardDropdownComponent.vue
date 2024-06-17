<template>
  <div v-if="data" class="skin-card-dropdown">
    <SkinFloatComponent :float="float" />
    <div class="skin-card-dropdown__params">
      <div v-if="float && float.value" class="skin-card-dropdown__param">
        <span class="skin-card-dropdown__param-title">Float</span>
        <span class="skin-card-dropdown__param-value">{{ float.value }}</span>
      </div>
      <div v-if="data.extra && data.extra.paintseed" class="skin-card-dropdown__param">
        <span class="skin-card-dropdown__param-title">Paint seed</span>
        <span class="skin-card-dropdown__param-value">{{ data.extra.paintseed }}</span>
      </div>
      <div v-for="(item, i) in tags" :key="i" class="skin-card-dropdown__param">
        <span class="skin-card-dropdown__param-title">{{ item.category }}</span>
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

const availableTags = ["Tournament", "TournamentTeam", "ProPlayer", "ItemSet", "Weapon", "StickerCapsule"];

const tags = computed(() => {
  if (props.data && props.data.tags && props.data.tags.length) {
    return props.data.tags.filter((item) => !availableTags.includes(item.category));
  }
  return [];
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
		flex-wrap wrap
		align-items center
		gap: 20px
		justify-content space-between
		font-size 0.75rem
		line-height normal
		+below(480px) {
			gap: 0 10px
		}

		&-title {
			color: var(--gray-dark, #D4F0FF);
		}

		&-value {
			text-align right
			margin-left auto
		}
	}
}
</style>
