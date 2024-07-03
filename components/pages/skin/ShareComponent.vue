<template>
  <div class="share">
    <span class="share-title">Share</span>
    <div class="share-list">
      <SocialShare
        v-for="item in socials"
        :key="item.network"
        :network="item.network"
        :label="false"
        class="share-item"
      >
        <template #icon>
          <IconComponent category="default" :name="item.icon" />
        </template>
      </SocialShare>
      <a @click.prevent="copyUrl" href="#" class="share-item">
        <IconComponent v-if="copied" name="check-line" />
        <IconComponent v-else name="copy" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { useDefaultStore } from "~/stores/default";
import { useRoute } from "#app";
import { computed, ref } from "vue";

const copied = ref(false);
const route = useRoute();

const socials = [
  {
    title: "Whatsapp",
    network: "whatsapp",
    icon: "whatsapp",
  },
  {
    title: "Facebook",
    network: "facebook",
    icon: "facebook",
  },
  {
    title: "X (Twitter)",
    network: "twitter",
    icon: "x",
  },
  {
    title: "Telegram",
    network: "telegram",
    icon: "telegram",
  },
];

const currentUrl = computed(() => useDefaultStore().HOST_ENDPOINT + route.fullPath);

async function copyUrl() {
  try {
    await navigator.clipboard.writeText(location.href);
  } catch (err) {
    let inp = document.createElement("input");
    inp.value = location.href;
    document.body.appendChild(inp);
    inp.select();
    document.execCommand("copy");
    document.body.removeChild(inp);
  }
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 5000);
}
</script>

<style lang="stylus">
.share {
	display flex
	align-items center
	gap: 15px
	color: var(--gray-dark, #D4F0FF);

	&-title {
		font-size: 0.875rem
	}

	&-list {
		display flex
		align-items center
		gap: 5px
	}

	&-item {
		width 30px
		height 30px
		display flex
		align-items center
		justify-content center
		border-radius var(--small-radius)

		&:hover {
			background-color var(--dark-light-2)
		}

		.icon {
			width 16px
			height 16px

			svg path {
				fill var(--white)
			}
		}
	}
}
</style>
