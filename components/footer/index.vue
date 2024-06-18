<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer-left">
        <span class="footer-left__title">Contacts</span>
        <div class="footer-left__blocks">
          <div v-if="company.addresses && company.addresses.length" class="footer-left__block">
            <span class="footer-left__block-title">Legal</span>
            <span class="footer-left__block-description">
              <span v-for="(item, i) in company.addresses" :key="i">
                <span v-if="item.name">{{ item.name }}:</span>
                {{ item.address }}
              </span>
            </span>
          </div>
          <div v-if="company.emails && company.emails.length" class="footer-left__block">
            <span class="footer-left__block-title">Email</span>
            <span class="footer-left__block-description">
              <span v-for="(item, i) in company.emails" :key="i">
                <span v-if="item.name">{{ item.name }}:</span>
                <a :href="`mailto:${item.email}`">{{ item.email }}</a>
              </span>
            </span>
          </div>
          <div v-if="company.phones && company.phones.length" class="footer-left__block">
            <span class="footer-left__block-title">Phones</span>
            <span class="footer-left__block-description">
              <span v-for="(item, i) in company.phones" :key="i">
                <span v-if="item.name">{{ item.name }}:</span>
                <a :href="`tel:${item.phone}`">{{ item.phone }}</a>
              </span>
            </span>
          </div>
          <SocialsComponent />
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-columns">
          <div class="footer-column">
            <span class="footer-column__title">Links</span>
            <ul class="footer-column__links">
              <li v-for="(link, i) in links" :key="i">
                <nuxt-link class="footer-column__links-link" :to="link.route">
                  <IconComponent name="arrow-right-3" />
                  <span>{{ link.title }}</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <span class="footer-column__title">Terms</span>
            <ul class="footer-column__links">
              <li v-for="(link, i) in pages" :key="i">
                <nuxt-link class="footer-column__links-link" :to="{ name: 'dynamic' }">
                  <IconComponent name="arrow-right-3" />
                  <span>{{ link.name }}</span>
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
import { useGlobalStore } from "~/stores/global";
import { computed } from "vue";

const globalStore = useGlobalStore();

const links = [
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
];

const company = computed(() => {
  return globalStore.company;
});

const pages = computed(() => {
  return globalStore.pages;
});
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
				display flex
				flex-direction column
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
