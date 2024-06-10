<template>
  <div class="skin-aside">
    <div class="skin-aside__info skin-aside-block">
      <div class="skin-aside__category">
        <span>Talon Knife</span>
        <span>Factory New</span>
      </div>
      <span class="skin-aside-block__title">Doppler Phase 1 </span>
      <div class="skin-aside__prices">
        <span class="skin-aside__price">$979.55</span>
        <span class="skin-aside__price-steam"> Steam price: <span>$1,178.68</span> </span>
      </div>
    </div>
    <div class="skin-aside__actions">
      <button class="btn btn--lg btn--main">
        <span>Add to cart</span>
        <IconComponent name="bag-2" />
      </button>
      <button class="btn btn--lg btn--hollow">
        <IconComponent name="star" />
      </button>
    </div>
    <div class="skin-aside__float skin-aside-block">
      <span class="skin-aside-block__title skin-aside__float-title">
        <span>Wear Range</span>
        <IconComponent name="info-circle" />
      </span>
      <SkinFloatComponent />
    </div>
    <div class="skin-aside__details skin-aside-block">
      <div class="skin-aside-block__title skin-aside__details-title">
        <span>Summary</span>
        <IconComponent name="info-circle" />
      </div>
      <ul class="skin-aside__details-list">
        <li v-for="(item, i) in details" :key="i" class="skin-aside__details-item">
          <span>{{ item.title }}</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <ShareComponent />
  </div>
</template>

<script setup>
const details = [
  {
    title: "Category",
    value: "Skin",
  },
  {
    title: "Quality",
    value: "Covert",
  },
  {
    title: "Paint seed",
    value: "224",
  },
  {
    title: "Float",
    value: "0.0348266065120697",
  },
  {
    title: "Exterior",
    value: "Factory New",
  },
  {
    title: "Type",
    value: "Knife",
  },
  {
    title: "Paint index",
    value: "852",
  },
];
</script>

<style lang="stylus">
.skin-aside {
	display flex
	flex-direction column
	gap: 20px

	&-block {
		padding: 10px
		border-radius: var(--main-radius)
		border: 1px solid var(--dark-light-2, #1F3B4B);
		background: var(--dark-light, #011D2D);
		display flex
		flex-direction column
		gap: 5px

		&__title {
			color: var(--white, #FFF);
			font-weight: 700;
			padding: 5px
			display flex
			align-items center
			gap: 5px

			.icon {
				width 20px
				height 20px
				color var(--gray-dark-2)
			}
		}
	}

	&__category {
		display flex
		align-items center
		gap: 5px
		color: var(--gray-dark-2, #516D7D);
		font-size: 0.875rem

		span {
			padding: 5px
			flex 1
		}
	}

	&__prices {
		display flex
		align-items center
		gap: 20px
		padding: 5px
	}

	&__price {
		color: var(--main, #88E876);
		font-size: 1.375rem
		font-weight: 700;
		line-height: normal;
	}

	&__price-steam {
		color: var(--gray-dark-2, #516D7D);
		font-size: 0.875rem

		span {
			color var(--gray-dark)
		}
	}

	&__actions {
		display flex
		gap: 20px

		.btn {
			height 60px
			font-size: 1.125rem
			font-weight: 700;
			line-height: normal;
			text-transform uppercase

			&:first-child {
				flex-grow 1
				box-shadow 0 10px 20px 0 var(--green-o3)

				&:hover {
					background-color var(--green-o8)
					color var(--dark)
				}
			}

			&:last-child {
				padding: 10px
				width 60px
			}

			.icon {
				width 24px
				height 24px
			}
		}
	}

	&__details {
		&-list {
			display flex
			flex-direction column
			gap: 5px
		}

		&-item {
			display flex
			align-items center
			justify-content space-between
			gap: 15px
			color: var(--gray-dark, #D4F0FF);
			font-size: 0.875rem

			span:first-child {
				flex-grow 1
			}

			span:last-child {
				text-align right
			}
		}
	}
}
</style>
