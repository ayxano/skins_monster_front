<template>
  <div class="cabinet-orders">
    <div class="cabinet-orders__content">
      <TabsComponent v-model="activeTab" :tabs="tabs" dark />
      <OrdersAccordionComponent :list="orders" :key="activeTab" />
    </div>
    <!--    <PaginationComponent @change="paginate" :page="meta.page" :meta="meta" />-->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useOrdersStore } from "~/stores/orders";

const tabs = [
  {
    id: 1,
    title: "All",
    statuses: ["created", "active", "ended", "error"],
  },
  {
    id: 2,
    title: "Open",
    statuses: ["created"],
  },
  {
    id: 3,
    title: "Paid",
    statuses: ["active", "ended"],
  },
  {
    id: 4,
    title: "Cancelled",
    statuses: ["error"],
  },
];

const activeTab = ref(tabs[0]);
const ordersStore = useOrdersStore();
let interval = ref({});

// const meta = ref({
//   page: 1,
//   total: 100,
//   perPage: 16,
// });

onMounted(() => {
  get();
  // interval.value = setInterval(get, 20000);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});

const orders = computed(() => {
  const list = ordersStore.orders || [];
  if (activeTab.value) {
    return list.filter((i) => activeTab.value.statuses.includes(i.status));
  }
  return list;
});

// function paginate(page) {
//   meta.value.page = page;
//   get({ page });
// }

function get() {
  ordersStore.get({ page: 1, first: 100 });
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
	+below(540px) {
		padding: 20px
	}

	&__content {
		display flex
		flex-direction column
		gap: 20px
	}

	.tabs {
		+below(540px) {
			flex-direction column
			height auto
			align-items stretch
		}

		&__item {
			min-width 100px
		}
	}
}
</style>
