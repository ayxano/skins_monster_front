<template>
  <div class="header-actions">
    <a class="header-actions__item header-actions__item--cart btn" href="#">
      <IconComponent class="icon--lg" name="bag-2" />
    </a>
    <a class="header-actions__item btn btn--lg btn--dark-light" href="#">
      <IconComponent class="icon--lg" name="frame-1" />
    </a>
  </div>
</template>

<script setup></script>

<style lang="stylus">
.header-actions {
	display flex
	gap: 15px

	&__item.btn {
		display flex
		width 50px
		height 50px
		border-radius 50%
		flex-shrink 0
		padding: 10px

		.icon {
			width 24px
			height 24px
		}
	}

	&__item--cart {
		&:hover {
			background var(--dark-light-2)
		}
	}
}
</style>
