<script setup>
defineProps({
  data: Object,
});
</script>

<template>
  <div v-if="data" class="review">
    <span class="review__description">{{ data.content }}</span>
    <span v-if="data.title" class="review__name">{{ data.title }}</span>
  </div>
</template>

<style lang="stylus">
.review {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width 588px
  margin-top auto
	break-inside: avoid-column;
	padding: 32px
	text-align left
	position: relative;
	border-radius: 10px;
	border: 1px solid var(--dark-light-2, #1f3b4b);
	background: var(--dark-light-2, #011d2d);
  +below(480px) {
    padding: 20px
		gap: 15px
  }

  &__description {
		word-break: break-word
  }

  &__name {
    color: var(--gray-dark)
    font-feature-settings: 'liga' off;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
  }
}
</style>
