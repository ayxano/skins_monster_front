<template>
  <div class="user-card" :class="{ 'user-card--settings': settings }">
    <div class="user-card__top">
      <div class="user-card__actions">
        <button class="btn btn--sm btn--dark-light">Upload cover</button>
        <button class="user-card__action--remove btn btn--sm btn--dark-light">Remove</button>
      </div>
    </div>
    <div class="user-card__content">
      <ImgComponent class="user-card__avatar" src="/images/tmp/user.jpg" />
      <div class="user-card__info">
        <span class="user-card__name">Eva Jones</span>
        <span class="user-card__registered">Registered on October 5, 2020, 08:52</span>
      </div>
      <div class="user-card__actions">
        <button class="btn btn--sm btn--main">Choose avatar</button>
        <button class="user-card__action--remove btn btn--sm btn--dark-light">Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  settings: Boolean,
});
</script>

<style lang="stylus">
main_class = ".user-card"
.user-card {
	border-radius: var(--main-radius)
	background var(--dark-light, #011D2D)
	display flex
	flex-direction column
	+below(620px) {

	}

	&--settings {
		border-radius var(--main-radius) var(--main-radius) 0 0

		{ main_class } {
			&__actions {
				display flex
			}

			&__info {
				display none
			}
		}
	}

	&__top {
		background url("/images/tmp/user_bg.jpg")
		background-position center
		border-radius: var(--main-radius)
		height 200px
		padding: 20px
		display flex
		justify-content flex-end
	}

	&__actions {
		display none
		gap: 10px
		+below(540px) {
			margin 0 auto
		}

		.btn {
			padding: 0 15px
			height 32px
		}
	}

	&__action--remove {
		//color var(--red)
		color var(--gray-dark-2)
	}

	&__content {
		display flex
		align-items flex-end
		gap: 20px
		padding 0 40px 40px
		margin-top -75px
		+below(620px) {
			margin-top 0
			flex-direction column
			align-items center
			text-align center
			padding: 0 20px 20px
		}
	}

	&__avatar {
		width 150px
		height 150px
		flex-shrink 0
		border-radius 50%
		border: 2px solid var(--dark-light-2, #1F3B4B);
		+below(620px) {
			margin-top -75px
		}
	}

	&__info {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	&__name {
		font-size: 1.375rem
		font-weight: 700;
		line-height: normal;
	}

	&__registered {
		color: var(--gray-dark-2, #516D7D);
		font-size: 0.875rem
	}
}
</style>
