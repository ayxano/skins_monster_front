<template>
  <div class="share">
    <span class="share-title">Share</span>
    <div class="share-list">
      <a href="#" class="share-item">
        <IconComponent category="default" name="whatsapp" />
      </a>
      <a href="#" class="share-item">
        <IconComponent category="default" name="facebook" />
      </a>
      <a href="#" class="share-item">
        <IconComponent category="default" name="x" />
      </a>
      <a href="#" class="share-item">
        <IconComponent category="default" name="telegram" />
      </a>
      <a href="#" class="share-item">
        <IconComponent category="default" name="tiktok" />
      </a>
      <a href="#" class="share-item">
        <IconComponent name="copy" />
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="stylus">
.share {
	display flex
	align-items center
	gap: 15px
	color: var(--gray-dark, #D4F0FF);

	&-title {
		font-size: 0.875rem
	}

	&-list {
		display flex
		align-items center
		gap: 5px
	}

	&-item {
		width 30px
		height 30px
		display flex
		align-items center
		justify-content center
		border-radius var(--small-radius)

		&:hover {
			background-color var(--dark-light-2)
		}

		.icon {
			width 16px
			height 16px
		}
	}
}
</style>
