<template>
  <div class="default-modal alert-modal">
    <div class="default-modal__header">
      <span v-if="title" class="default-modal__title alert-modal__title">{{ title }}</span>
      <button type="button" class="default-modal__close btn" @click="$emit('closeAll')">
        <IconComponent name="close" />
      </button>
    </div>
    <div class="default-modal__body">
      <span class="alert-modal__text">{{ text }}</span>
    </div>
    <div v-if="!noBtn" class="alert-modal__buttons">
      <button @click="cancel" type="button" class="btn btn--lg btn--dark-light alert-modal__btn">
        {{ cancelBtnTitle }}
      </button>
      <button v-if="isConfirm" @click="confirm" type="button" class="btn btn--lg btn--main alert-modal__btn">
        {{ confirmBtnTitle }}
      </button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["close", "closeAll"]);
const props = defineProps({
  isConfirm: {
    type: Boolean,
    default: true,
  },
  center: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  text: String,
  noBtn: {
    type: Boolean,
    default: false,
  },
  cancelBtnTitle: {
    type: String,
    default: "Cancel",
  },
  confirmBtnTitle: {
    type: String,
    default: "Confirm",
  },
  closeEvent: {
    type: String,
    default: "closeAll",
  },
  callback: Function,
});

function cancel() {
  emits(props.closeEvent);
}

function confirm() {
  if (props.callback) {
    props.callback();
  }
  emits("close");
}
</script>

<style lang="stylus">
.alert-modal {
	width 100%
	max-width: 400px;

	&__text {
		font-size 0.875rem
	}

	&__buttons {
		width 100%
		display flex
		align-items center
		justify-content center
		gap 10px
		margin-top 10px

		.btn {
			flex 1
		}
	}
}
</style>
