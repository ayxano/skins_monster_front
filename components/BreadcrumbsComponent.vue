<template>
  <div class="breadcrumbs">
    <h1 class="breadcrumbs__title">
      <span>{{ title }}</span>
      <span v-if="subtitle" class="breadcrumbs__subtitle">{{ subtitle }}</span>
    </h1>
    <ul class="breadcrumbs__list">
      <li v-if="!hideHome">
        <nuxt-link to="/">
          <span>Home</span>
        </nuxt-link>
        <span v-show="links && links.length">/</span>
      </li>
      <li v-for="(link, i) in links" :key="i">
        <nuxt-link v-if="link.route" :to="link.route">
          {{ link.title }}
        </nuxt-link>
        <span v-else>{{ link.title }}</span>
        <span v-show="i !== links.length - 1">/</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbsComponent",
  props: {
    links: Array,
    title: String,
    subtitle: [String, Number],
    hideHome: Boolean,
  },
};
</script>

<style lang="stylus">
.breadcrumbs {
  width: 100%
  margin: 0
	display: flex
	gap: 10px 50px
	flex-wrap: wrap-reverse
	+below(540px) {
		flex-direction column-reverse
	}

  &__list {
    display flex
    align-items center
    justify-content flex-start
    flex-wrap wrap
    gap: 10px

    li {
      display flex
      align-items center
      gap: 10px

      .icon {
        width 20px
        height 20px

        svg path {
          fill var(--text-gray-2)
        }
      }

      a,
      > span {
        display: flex;
        align-items: center;
        color: var(--text-gray, #6F6F6F);
        font-size: 15px;
        font-weight: 300;
        line-height: 19px;
        transition var(--transition)
      }
    }
  }

  &__title {
		display flex
		align-items center
		gap: 15px
		flex-grow: 1
    margin 0
		font-size: 1.375rem
		font-weight: 900;
		line-height: normal;
  }

	&__subtitle {
		color: var(--gray-dark-2, #516D7D);
		font-size: 1rem
		font-weight: 400;
		line-height: 26px; /* 162.5% */
	}
}
</style>
