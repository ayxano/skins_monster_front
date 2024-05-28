<template>
  <div class="skin-page-preview">
    <div class="skin-page-preview__img">
      <div class="ratio-container">
        <ImgComponent src="/images/tmp/skin_page.png" />
      </div>
    </div>
    <div class="skin-page-preview__actions">
      <button class="skin-page-preview__action btn btn--md btn--dark-light">
        <IconComponent name="star" />
        <span>Add to favorite</span>
      </button>
      <button class="skin-page-preview__action btn btn--md btn--dark-light">
        <IconComponent name="gallery-add" />
        <span>Screenshot</span>
      </button>
      <button class="skin-page-preview__action btn btn--md btn--dark-light">
        <IconComponent name="mouse-circle" />
        <span>Inspect in game</span>
      </button>
      <button class="skin-page-preview__action btn btn--md btn--dark-light">
        <IconComponent category="default" name="steam" />
        <span>View at Steam</span>
      </button>
      <button class="skin-page-preview__action btn btn--md btn--dark-light">
        <IconComponent category="default" name="steam" />
        <span>Check on Steam market</span>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="stylus">
@import "../styles/mixins/ratio.styl"
.skin-page-preview {
	display flex
	flex-direction column
	gap: var(--gap)

	&__img {
		ratio(1, 1, contain)

		img {
			border-radius var(--main-radius, 10px)
			padding: 10px
			border: 1px solid var(--dark-light-2, #1F3B4B);
			background: var(--dark, #00141F);
			object-fit contain
		}
	}

	&__actions {
		display flex
		flex-wrap wrap
		gap: 20px
	}

	&__action {
		.icon {
			width 20px
			height 20px
		}
	}
}
</style>
