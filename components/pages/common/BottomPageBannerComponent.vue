<template>
  <a href="#" class="bottom-banner hover-image">
    <ImgComponent class="bottom-banner__img" src="/images/tmp/bottom_banner.jpg" />
    <ImgComponent
      class="bottom-banner__img bottom-banner__img--mobile"
      src="/images/tmp/bottom_banner_mobile.jpg"
    />
  </a>
</template>

<script setup></script>

<style lang="stylus">
.bottom-banner {
	&__img {
		border-radius var(--main-radius)

		&:not(&--mobile) {
			+below(540px) {
				display none
			}
		}

		&--mobile {
			+above(541px) {
				display none
			}
		}
	}
}
</style>
