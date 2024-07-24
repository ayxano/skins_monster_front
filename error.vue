<template>
  <main class="page error-page">
    <div class="page__inner">
      <div class="error-page__content">
        <div class="error-page__header">
          <ImgComponent class="error-page__img" src="/images/logo-small-red.svg" :loader="false" />
          <h2 class="error-page__title">404 Not Found</h2>
        </div>
        <span class="error-page__text"> </span>
        <nuxt-link :to="{ name: 'index' }" class="btn btn--lg btn--hollow">
          <span>Home page</span>
          <IconComponent name="arrow-right-1" />
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="stylus">
.error-page {
	padding: 50px
	height 100vh
	width 100%
	display flex
	align-items center
	justify-content center
	+below(480px) {
		padding: 30px
	}

	&__content {
		display flex
		flex-direction column
		align-items center
		gap: 20px
		+below(480px) {
			gap: 10px
		}

		.btn {
			color var(--main)

			.icon {
				color var(--main)
			}
		}
	}

	&__header {
		display flex
		align-items center
		gap: 20px
		+below(480px) {
			flex-direction column
			text-align center
			justify-content center
			align-items center
		}
	}

	&__img {
		width 48px
		height 58px
		flex-shrink 0
	}

	&__title {
		margin 0
		+below(480px) {
			font-size 1.25rem
		}
	}

	&__text {
		font-size: 1.375rem
		font-weight: 700;
		line-height: normal;
	}

	&__message {
		font-size: 0.875rem
	}
}
</style>
