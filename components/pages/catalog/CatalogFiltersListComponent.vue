<template>
  <div class="category-filters">
    <div class="category-filters__list">
      <!--      <div class="category-filters__item">-->
      <!--        <span class="category-filters__item-title">-->
      <!--          <span>Цена, ₽</span>-->
      <!--        </span>-->
      <!--        <div class="category-filters__item-inputs">-->
      <!--          <InputComponent-->
      <!--            :model-value="form.price_min"-->
      <!--            @update:model-value="priceUpdate($event, 'price_min')"-->
      <!--            placeholder="От"-->
      <!--            inputmode="numeric"-->
      <!--            mask="9 99#"-->
      <!--            mask-tokens="9:[0-9]:repeated"-->
      <!--            mask-reversed-->
      <!--            numbers-only-->
      <!--          />-->
      <!--          <InputComponent-->
      <!--            :model-value="form.price_max"-->
      <!--            @update:model-value="priceUpdate($event, 'price_max')"-->
      <!--            placeholder="До"-->
      <!--            inputmode="numeric"-->
      <!--            mask="9 99#"-->
      <!--            mask-tokens="9:[0-9]:repeated"-->
      <!--            mask-reversed-->
      <!--            numbers-only-->
      <!--          />-->
      <!--        </div>-->
      <!--      </div>-->
      <CatalogFiltersItemComponent
        :model-value="form.filters[item.name]"
        @update:model-value="filtersUpdate($event, item.name)"
        v-for="(item, i) in filters"
        :key="`${i}_${item.label}`"
        :title="item.label"
        :list="item.values"
        search
      />
    </div>
  </div>
</template>

<script setup>
import { useFiltersStore } from "~/stores/filters";
import { computed, ref, watch, onMounted } from "vue";
import { useDefaultStore } from "~/stores/default";
import { useRoute } from "#app";

const filtersStore = useFiltersStore();
const defaultStore = useDefaultStore();
const route = useRoute();

const filters = computed(() => {
  const appid = route.query.appid || defaultStore.types.appid.CS2;
  return filtersStore.filters ? filtersStore.filters[appid] : [];
});

const form = ref({
  filters: {},
});

onMounted(() => {
  updateData();
});

watch(
  () => route.query,
  () => {
    updateData();
  }
);

function filtersUpdate(values, name) {
  if (values && values.length) {
    form.value.filters[name] = values;
  } else {
    delete form.value.filters[name];
  }
  setParams();
}

function setParams() {
  filtersStore.setParams({
    filters: form.value.filters,
    page: 1,
  });
}

function updateData() {
  const query = filtersStore.queryParams;
  form.value.filters = query.filters || {};
}
</script>

<style lang="stylus">
.category-filters {
  display flex
  flex-direction column
  gap: 30px

  &--modal {
    width 100%

    .category-filters__list {
      max-width 100%
    }
  }

  &__list {
    display flex
    flex-direction column
    gap 10px
  }

  &__item {
    display flex
    flex-direction column
		gap: 5px
		padding: 0 5px

		&--expand &-header {
			.icon {
				transform rotate(-180deg)
			}
		}

		&-header {
			display flex
			align-items center
			gap 10px
			justify-content space-between
			padding: 10px

			&:hover {
				background var(--dark-light-2)
			}

			.icon {
				width 5px
				height auto
				min-width 5px
				transition transform var(--transition)
			}
		}

    &-title {
      display flex
      align-items baseline
      gap: 6px
      font-size: 0.9375rem
      font-weight: 500;
      line-height: 19px;
    }

		&-search {
			height 36px

			&-icon.icon {
				width 16px
				height: 16px;
			}
		}

    &-hint {
      display flex
      justify-content center
      align-items center
      flex-shrink 0
      border: 1px solid var(--text-disabled, #C3C3C3);
      border-radius 50%
      width 18px
      height 18px

      .icon {
        width 10px
        height 10px
      }
    }

    &-inputs {
      display flex
      gap 7px

      .input {
        width 100%
      }
    }

    &-checkboxes {
      display flex
      flex-direction column
      max-height 210px
      overflow auto
			padding: 5px 0

      .checkbox {
        flex-shrink 0

				&__field {
					font-size: 0.875rem
					line-height: 22px
					border-radius: 5px
					padding 3px 10px

					&:hover {
						background var(--dark-light)
					}
				}

				&__icon {
					margin-top 3px
				}
      }
    }

    &-bottom {
      display flex
      align-items center
      gap 16px
      justify-content space-between
      font-size 0.9375rem
    }

    &-show-all {
      display flex
      align-items center
      gap 6px
      color: var(--link, #007AFF);

      .icon {
        width 16px
        height 16px
      }
    }

    &-clear {
      color var(--red)
      font-size: 0.875rem
    }
  }

  &__actions {
    display flex
    flex-direction column
    gap 10px
    width 100%
  }

	&__not-found {
		font-size 0.875rem
	}
}
</style>
