<template>
  <div class="socials">
    <a
      class="socials-item btn btn--lg btn--dark-light"
      v-for="(item, i) in socials"
      :key="i"
      href="#"
      rel="nofollow"
      :title="item.title"
    >
      <IconComponent :name="item.icon" category="default" />
    </a>
  </div>
</template>

<script setup>
const socials = [
  {
    title: "YouTube",
    icon: "youtube",
  },
  {
    title: "Facebook",
    icon: "facebook",
  },
  {
    title: "X",
    icon: "x",
  },
  {
    title: "Discord",
    icon: "discord",
  },
  {
    title: "TikTok",
    icon: "tiktok",
  },
];
</script>

<style lang="stylus">
.socials {
	display flex
	align-items center
	gap: 5px

	&-item.btn {
		width 50px
		height 50px
		border-radius 50%
		flex-shrink 0
		padding: 10px

		.icon {
			width 20px
			height 20px
		}
	}
}
</style>
