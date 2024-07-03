<template>
  <div v-if="skins && skins.length" class="aside-favorites">
    <nuxt-link :to="{ name: 'cabinet-favorites' }" class="aside-favorites__header">
      <span class="aside-favorites__header-title">Favorites</span>
      <button class="aside-favorites__header-btn btn btn--sm btn--hollow">
        <IconComponent class="icon--sm" name="arrow-right-3" />
      </button>
    </nuxt-link>
    <div class="aside-favorites__list">
      <nuxt-link
        :to="{
          name: 'skin-id',
          params: { id: item.id },
          query: { skin_id: item.id, hash_name: item.hash_name, app_id: item.appid },
        }"
        v-for="(item, i) in skins.slice(0, 5)"
        :key="i"
        class="aside-favorites__item"
      >
        <ImgComponent class="aside-favorites__item-img" :src="skinImg(item)" :loader="false" />
        <span class="aside-favorites__item-title">{{ skinTitle(item).name || skinTitle(item).gun }}</span>
        <IconComponent class="aside-favorites__item-icon" name="arrow-right-1" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "~/stores/favorites";
import { computed } from "vue";
import { isCS2 } from "~/utils/global";
import { removeExterior } from "~/utils/skin";

const favoritesStore = useFavoritesStore();

const skins = computed(() => {
  return favoritesStore.favorites || [];
});

function skinImg(data) {
  return `https://steamcommunity-a.akamaihd.net/economy/image/${data.icon_url}`;
}

function skinTitle(data) {
  if (isCS2(data)) {
    let [gun, ...name] = data.hash_name.split(" | ");
    name = name.join(" | ");
    name = removeExterior(name);
    return { gun, name };
  }
  return { name: data.hash_name };
}
</script>

<style lang="stylus">
@import "../styles/mixins/maxlines.styl"
.aside-favorites {
	&__header {
		display flex
		align-items center
		gap 15px
		padding 10px
		padding-left 20px
		color var(--gray)

		&-title {
			text-transform uppercase
			flex-grow 1
		}

		&-btn.btn {
			width 30px
			height 30px
			border-radius 50%
		}
	}

	&__list {
		display flex
		flex-direction column
		gap: 5px
	}

	&__item {
		display flex
		align-items center
		gap: 15px
		padding: 4px
		padding-right 22px
		border-radius var(--main-radius)
		background: var(--dark-light, #011D2D);
		border: 1px solid var(--dark-light-2, #1F3B4B);
		transition var(--transition)

		&:hover {
			border-color var(--main)
		}

		&-img {
			width 50px
			height 50px
			flex-shrink 0
			padding: 5px
			border-radius: var(--small-radius)
			object-fit contain
			background: var(--dark, #00141F);
		}

		&-title {
			flex-grow 1
			font-size 0.8125rem
			line-height normal
			font-weight 700
			maxlines(2)
		}

		&-icon {
			color var(--gray-dark-2)
			width 14px
			height 14px
		}
	}
}
</style>
