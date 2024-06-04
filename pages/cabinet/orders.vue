<template>
  <div class="cabinet-orders">
    <div class="cabinet-orders__content">
      <TabsComponent v-model="activeTab" :tabs="tabs" dark />
      <OrdersAccordionComponent :key="activeTab" />
    </div>
    <PaginationComponent @change="paginate" :page="meta.page" :meta="meta" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Paid",
  },
  {
    id: 3,
    title: "Open",
  },
  {
    id: 4,
    title: "Cancelled",
  },
];

const activeTab = ref(tabs[0]);

const meta = ref({
  page: 1,
  total: 100,
  perPage: 16,
});

function paginate(page) {
  meta.value.page = page;
}
</script>

<style lang="stylus">
.cabinet-orders {
	padding: 40px
	display flex
	flex-direction column
	gap: var(--gap)
	background var(--dark-light, #011D2D)
	border-radius var(--main-radius)

	&__content {
		display flex
		flex-direction column
		gap: 20px
	}
}
</style>
