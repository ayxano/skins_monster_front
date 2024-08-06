<template>
  <div class="cabinet-payouts">
    <div class="cabinet-payouts__content">
      <div class="cabinet-payouts__list">
        <div v-for="item in payouts" :key="item.id" class="cabinet-payouts__item">
          <div class="cabinet-payouts__item-info">
            <span class="cabinet-payouts__item-field cabinet-payouts__item-name">
              Name: <span>{{ item.name }}</span>
            </span>
            <span class="cabinet-payouts__item-field cabinet-payouts__item-surname">
              Surname: <span>{{ item.surname }}</span>
            </span>
            <span class="cabinet-payouts__item-field cabinet-payouts__item-pan">
              Card: <span>{{ item.pan }}</span>
            </span>
          </div>
          <div class="cabinet-payouts__item-state">
            <span class="cabinet-payouts__item-field cabinet-payouts__item-amount">
              <span>{{ item.amount }}€</span>
            </span>
            <span
              class="cabinet-payouts__item-field cabinet-payouts__item-status"
              :class="{
                'cabinet-payouts__item-status--processing': item.status === 'processing',
                'cabinet-payouts__item-status--failed': item.status === 'failed',
                'cabinet-payouts__item-status--success': item.status === 'success',
              }"
            >
              <span>
                {{ item.status }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useOrdersStore } from "~/stores/orders";

const ordersStore = useOrdersStore();
let interval = ref({});

onMounted(() => {
  get();
  interval.value = setInterval(get, 15000);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});

const payouts = computed(() => {
  return ordersStore.payouts || [];
});

function get() {
  ordersStore.getPayouts({ page: 1, first: 100 });
}
</script>

<style lang="stylus">
.cabinet-payouts {
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

	&__list {
		display flex
		flex-direction column
		gap: 5px
	}

	&__item {
		position: relative;
		display: flex;
		align-items: center;
		gap: 15px;
		font-size: 0.875rem;
		border-radius: var(--main-radius);
		border: 1px solid var(--dark-light-2, #1f3b4b);
		background: var(--dark-light, #011d2d);
		padding: 10px 20px;
		transition: var(--transition);
		+below(350px) {
			flex-direction column
			align-items center
			gap: 10px
		}

		&-info {
			display flex
			flex-direction column
			flex-grow 1
			+below(350px) {
				align-items center
			}
		}

		&-field {
			span {
				color: var(--white-o5)
			}
		}

		&-state {
			display flex
			flex-direction column
			align-items flex-end
			gap: 5px
			flex-shrink: 0
			+below(350px) {
				align-items center
			}
		}

		&-amount {
			span {
				border-radius: var(--small-radius);
				background: var(--dark-light-2, #1f3b4b);
				color: var(--white)
				padding: 3px 7px;
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				text-align: right;
				font-size: 0.875rem;
				transition: background-color var(--transition);
				flex-shrink: 0;
			}
		}

		&-status {
			span {
				font-size 0.875rem
				padding: 0 10px
				background-color var(--gray-dark-2)
				border-radius 5px
				color: var(--white)
				display inline-block
			}

			&--processing span {
				background-color var(--green-dark)
			}

			&--success span {
				background-color var(--green-dark)
			}

			&--failed span {
				background-color var(--red)
			}
		}
	}
}
</style>
