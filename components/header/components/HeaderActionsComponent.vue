<template>
  <div class="header-actions">
    <nuxt-link
      :to="{ name: 'catalog' }"
      class="header-actions__item header-actions__item--search btn btn--lg btn--dark-light"
    >
      <IconComponent class="icon--lg" name="search-normal-1" />
    </nuxt-link>
    <nuxt-link :to="{ name: 'checkout' }" class="header-actions__item header-actions__item--cart btn">
      <IconComponent class="icon--lg" name="bag-2" />
    </nuxt-link>
    <nuxt-link
      to="/cabinet/profile"
      class="header-actions__item header-actions__item--profile btn btn--lg btn--dark-light"
    >
      <IconComponent class="icon--lg" name="frame-1" />
    </nuxt-link>
    <button class="header-actions__item header-actions__item--menu btn">
      <IconComponent class="icon--lg" name="menu-burger" />
    </button>
  </div>
</template>

<script setup></script>

<style lang="stylus">
.header-actions {
	display flex
	gap: 15px

	.btn&__item {
		display flex
		width 50px
		height 50px
		border-radius 50%
		flex-shrink 0
		padding: 10px

		.icon {
			width 24px
			height 24px
			color var(--white)
		}

		&--cart,
		&--menu {
			&:hover {
				background var(--dark-light-2)

				.icon {
					color var(--main)
				}
			}
		}

		&--search {
			+above(721px) {
				display none
			}

			.icon {
				width 20px
				height 20px
			}
		}

		&--profile {
			+below(580px) {
				display none
			}
		}

		&--menu {
			+above(1025px) {
				display none
			}

			.icon {
				width 30px
			}
		}
	}
}
</style>
