<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer-left">
        <span class="footer-left__title">Contacts</span>
        <div class="footer-left__blocks">
          <div class="footer-left__block">
            <span class="footer-left__block-title">Legal</span>
            <span class="footer-left__block-description">
              2nd floor, flat/office 205, 1061, Nicosia, Cyprus
            </span>
          </div>
          <div class="footer-left__block">
            <span class="footer-left__block-title">Email</span>
            <span class="footer-left__block-description">
              Support: help@skinmonster.com <br />
              Privacy: privacy@skinmonster.com <br />
              Official inquiries: official-inquiries@skinmonster.com <br />
              Partners: partner@skinmonster.com
            </span>
          </div>
          <div class="footer-left__block">
            <span class="footer-left__block-title">Phones</span>
            <span class="footer-left__block-description"> +101 77 2347 9985 </span>
          </div>
          <SocialsComponent />
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-columns">
          <div v-for="(col, i) in columns" :key="i" class="footer-column">
            <span class="footer-column__title">{{ col.title }}</span>
            <ul class="footer-column__links">
              <li v-for="(link, index) in col.links" :key="index">
                <nuxt-link class="footer-column__links-link" :to="link.route">
                  <IconComponent name="arrow-right-3" />
                  <span>{{ link.title }}</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CopyrightComponent class="footer-copyright" />
    </div>
  </footer>
</template>

<script setup>
const columns = [
  {
    title: "Links",
    links: [
      {
        title: "Catalog",
        route: { name: "catalog" },
      },
      {
        title: "About",
        route: { name: "about" },
      },
      {
        title: "Reviews",
        route: { name: "index", hash: "#reviews" },
      },
      {
        title: "FAQ",
        route: { name: "index", hash: "#faq" },
      },
      {
        title: "Contacts",
        route: { name: "contacts" },
      },
      {
        title: "Cancellations & Refunds",
        route: { name: "dynamic" },
      },
    ],
  },
  {
    title: "Terms",
    links: [
      {
        title: "Terms Of Use",
        route: { name: "index" },
      },
      {
        title: "Privacy Policy",
        route: { name: "index" },
      },
      {
        title: "Cookie Policy",
        route: { name: "index" },
      },
      {
        title: "Consent Preferences",
        route: { name: "index" },
      },
    ],
  },
];
</script>

<style lang="stylus">
.footer {
	padding-bottom: 50px

  &__inner {
		display grid
		grid-template-columns 1fr 1fr
		grid-gap var(--gap)
		+below(640px) {
			grid-template-columns 1fr
		}
  }

	&-left {
		display flex
		flex-direction column
		gap: 20px

		&__title {
			font-size: 0.875rem
			text-transform: uppercase;
			color: var(--gray-dark)
		}

		&__blocks {
			display flex
			flex-direction column
			gap: 15px
		}

		&__block {
			display flex
			flex-direction column
			gap: 5px

			&-title {
				font-size: 0.875rem
				font-weight: 700;
				color: var(--gray-dark)
			}

			&-description {
				color: var(--gray-dark-2, #516D7D);
				font-size: 0.875rem
			}
		}
	}

	&-columns {
		display flex
		gap: 40px
		+above(641px) {
			justify-content flex-end
		}
	}

	&-column {
		display flex
		flex-direction column
		gap: 20px

		&:first-child {
			+below(540px) {
				display none
			}
		}

		&__title {
			color var(--gray-dark)
			font-size: 0.875rem
			text-transform: uppercase;
			padding: 5px 10px
		}

		&__links {
			display flex
			flex-direction column
			color var(--gray-dark-2)

			&-link {
				display flex
				align-items center
				gap: 5px
				padding: 5px 10px
				font-size: 0.875rem

				.icon {
					width 10px
					height 10px
					color var(--main)
				}
			}
		}
	}

	&-copyright {
		color var(--gray-dark-2)
		+above(1025px) {
			display none
		}
	}
}
</style>
