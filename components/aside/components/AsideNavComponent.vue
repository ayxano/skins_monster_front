<template>
  <nav class="aside-nav">
    <div v-for="(link, i) in links" :key="i" class="aside__nav-item">
      <nuxt-link
        :to="link.route"
        class="aside-nav__link no-hover"
        :class="{ 'aside-nav__link--active': isRouteActive(link.route) }"
      >
        <IconComponent class="aside-nav__link-icon" :name="link.icon" />
        <span class="aside-nav__link-title">{{ link.title }}</span>
        <button v-if="link.menu" class="aside-nav__link-menu btn btn--sm btn--dark-light">
          <IconComponent name="menu-1" class="icon--sm" />
        </button>
      </nuxt-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "#app";

const currentRoute = useRoute();

const links = [
  {
    title: "Catalog",
    route: { name: "catalog" },
    icon: "category-2",
    menu: true,
  },
  {
    title: "About",
    route: { name: "about" },
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
    route: { name: "about" },
    icon: "convertshape-2",
  },
  {
    title: "Contacts",
    route: { name: "contacts" },
    icon: "sms-edit",
  },
];

function isRouteActive(route) {
  return route.name === currentRoute.name && route.hash === currentRoute.hash;
}
</script>

<style lang="stylus">
.aside-nav {
	display flex
	flex-direction column

	&__item {
		padding: 5px
		padding-right 20px
		font-size 0.875rem
	}

	&__link {
		position relative
		display flex
		align-items center
		gap: 10px
		padding: 10px
		border-radius var(--small-radius)
		color var(--gray)

		&:not(&--active):hover {
			background var(--dark-light-2)
		}

		&--active {
			background var(--main)
			color var(--dark)
		}

		&-icon {
			padding: 5px
			width 30px
			height 30px
		}

		&-title {
			flex-grow 1
		}

		&-menu {
			position absolute
			right 0
			top 50%
			transform translate(50%, -50%)
			width: 30px
			height: 30px
			border-radius 50%
		}
	}
}
</style>
