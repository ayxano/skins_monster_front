<template>
  <div class="user-card">
    <div class="user-card__top"></div>
    <div class="user-card__content">
      <ImgComponent class="user-card__img" src="/images/tmp/user.jpg" />
      <div class="user-card__info">
        <span class="user-card__name">Eva Jones</span>
        <span class="user-card__registered">Registered on October 5, 2020, 08:52</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="stylus">
.user-card {
	border-radius: var(--main-radius)
	background var(--dark-light, #011D2D)
	display flex
	flex-direction column

	&__top {
		background url("/images/tmp/user_bg.jpg")
		border-radius: var(--main-radius)
		height 200px
	}

	&__content {
		display flex
		align-items flex-end
		gap: 20px
		padding 0 40px 40px
		margin-top -75px
	}

	&__img {
		width 150px
		height 150px
		flex-shrink 0
		border-radius 50%
		border: 2px solid var(--dark-light-2, #1F3B4B);
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
