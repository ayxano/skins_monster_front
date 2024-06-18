<template>
  <aside class="aside">
    <nuxt-link :to="{ name: 'index' }" class="aside__logo">
      <ImgComponent src="/images/logo.svg" class="aside__logo-img" :loader="false" />
    </nuxt-link>
    <AsideNavComponent :links="links" />
    <AsideFavoritesComponent />
    <div class="aside__footer">
      <CopyrightComponent class="aside__footer-copyright" />
    </div>
  </aside>
</template>

<script setup>
const links = [
  {
    title: "Catalog",
    route: { name: "catalog" },
    icon: "category-2",
    menu: true,
  },
  {
    title: "About",
    route: { name: "dynamic-id", query: { "positions[]": ["about"] } },
    icon: "cpu-charge",
  },
  {
    title: "Reviews",
    route: { name: "index", hash: "#reviews" },
    icon: "message",
  },
  {
    title: "FAQ",
    route: { name: "index", hash: "#faq" },
    icon: "messages-3",
  },
  {
    title: "Cancellations & Refunds",
    route: { name: "dynamic-id", query: { "positions[]": ["cancellations_refunds"] } },
    icon: "convertshape-2",
  },
  {
    title: "Contacts",
    route: { name: "contacts" },
    icon: "sms-edit",
  },
];
</script>

<style lang="stylus">
.aside {
	padding-right 40px
	padding-bottom 50px
	display flex
	flex-direction column
	gap: 30px
	+below(1200px) {
		padding-right 0
	}
	+below(1024px) {
		display none
	}

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
		margin-top auto
		color var(--gray-dark)
		padding: 10px 15px

		&-copyright {
			max-width 170px
		}
	}
}
</style>
