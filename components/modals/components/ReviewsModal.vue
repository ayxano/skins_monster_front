<template>
  <div class="default-modal reviews-modal">
    <div class="default-modal__header">
      <span class="default-modal__title reviews-modal__title">Reviews</span>
      <button type="button" class="default-modal__close btn" @click="$emit('closeAll')">
        <IconComponent name="close" />
      </button>
    </div>
    <div class="default-modal__body reviews-modal__body">
      <div class="reviews-modal__inner">
        <div class="reviews-modal__list">
          <ReviewComponent v-for="item in reviews" :key="item.id" :data="item" square />
        </div>
        <ObserverComponent @intersect="paginate" />
      </div>
      <!--      <PaginationComponent :meta="paginationInfo" :page="page" @change="paginate" />-->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { query } from "~/utils/global";
import IconComponent from "~/components/IconComponent.vue";
import ObserverComponent from "~/components/ObserverComponent.vue";
import ReviewComponent from "~/components/ReviewComponent.vue";
// import PaginationComponent from "~/components/Pagination.vue";

let loading = ref(false);
const first = ref(6);
const page = ref(1);
const reviews = ref([]);
const paginationInfo = ref({});

async function get() {
  const { data, meta } = await query(
    "/reviews",
    {
      page: page.value,
      first: first.value,
    },
    {
      method: "GET",
    }
  );
  reviews.value.push(...data);
  paginationInfo.value = meta;
  loading.value = false;
}

async function paginate() {
  if ((paginationInfo.value.last_page && paginationInfo.value.last_page <= page.value) || loading.value) {
    return;
  }
  loading.value = true;
  page.value++;
  await get();
}

get();
</script>

<style lang="stylus">
.reviews-modal {
  width 100%
  max-width: 90vw
	padding: 40px
	+below(480px) {
		padding: 20px
	}

	&__body {
		align-items center
		position: relative
	}

	&__inner {
		width: 100%
		max-height: 80vh
		overflow: auto
		scrollbar-width: none
		padding: 2px
		padding-bottom: 80px

		&:after {
			content ""
			display block
			width 100%
			height 80px
			position absolute
			bottom 0
			left 0
			right 0
			z-index 3
			background: linear-gradient(180deg, rgba(1, 29, 45, 0) 0%, var(--dark-light) 100%)
			pointer-events: none
		}
	}

	&__list {
		flex-shrink: 0
		column-count: 3;
		gap: 20px
		+below(1200px) {
			column-count: 2
		}
		+below(820px) {
			column-count: 1
		}

		.review {
			margin-top 0
			margin-bottom 20px
			+below(540px) {
				max-width auto
				margin-bottom: 10px
			}
		}
	}
}
</style>
