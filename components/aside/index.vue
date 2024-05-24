<template>
  <aside class="aside">
    <nuxt-link :to="{ name: 'index' }" class="aside__logo">
      <ImgComponent src="/images/logo.svg" class="aside__logo-img" :loader="false" />
    </nuxt-link>
    <AsideNavComponent />
    <AsideFavoritesComponent />
    <div class="aside__footer">
      © 2024. Skin Monster. <br />
      All Rights Reserved.
    </div>
  </aside>
</template>

<script setup></script>

<style lang="stylus">
.aside {
	padding-right 40px
	padding-bottom 50px
	display flex
	flex-direction column
	gap: 30px

	&__logo {
		padding: 30px 0
		display flex
		align-items center
		justify-content center

		&-img {
			width 100%
			max-width 142px
			height auto
		}
	}

	&__footer {
		font-size 0.875rem
		margin-top auto
		color var(--gray-dark)
	}
}
</style>
