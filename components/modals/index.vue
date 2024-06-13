<template>
  <div v-if="modals.length" class="modal" ref="modal">
    <div class="modal__content">
      <div ref="background" class="modal__background" @click="closeLast"></div>
      <component
        :is="activeModal.component"
        v-bind="activeModal.options"
        @close="closeLast"
        @closeAll="closeAll"
      ></component>
    </div>
  </div>
</template>

<script>
import { useDefaultStore } from "/stores/default";
import { hideBodyScroll } from "~/utils/global";

export default {
  name: "ModalsComponent",
  computed: {
    modals() {
      return useDefaultStore().modals;
    },
    activeModal() {
      return this.modals[this.modals.length - 1] || {};
    },
  },
  watch: {
    "modals.length"(val) {
      hideBodyScroll(val > 0);
    },
    "$route.name"() {
      if (!this.activeModal.keepAlive) {
        useDefaultStore().modals = [];
      }
    },
    "$route.params"() {
      if (!this.activeModal.keepAlive) {
        useDefaultStore().modals = [];
      }
    },
  },
  methods: {
    closeLast() {
      return useDefaultStore().modals.splice(useDefaultStore().modals.length - 1, 1);
    },
    closeAll(callback) {
      if (callback) {
        callback();
      }
      useDefaultStore().modals = [];
    },
  },
};
</script>

<style lang="stylus">
.bounce-enter-active {
  animation: bounce-in .5 cubic-bezier(0.175, 0.885, 0.320, 1.275);
}

.bounce-enter {
  animation: bounce-in .5 reverse cubic-bezier(0.175, 0.885, 0.320, 1.275);
}

.modal {
    position: fixed;
    left: 0;
    top: 0;
    width 100%
    height 100%
    z-index var(--z-index-modal, 999)
    overflow-y auto

  &__background {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height 100vh
    width: 100vw
    z-index 0
    cursor pointer
    background var(--black-o3)
    min-height 100vh
  }

  &__content {
    width 100%
    min-height 100vh
    position relative
    display none
    align-items flex-start
    justify-content center
    padding: 10px 0

    &:last-child {
      display flex
      justify-content: center;
      align-items: center;
    }
  }
}

.mod {
  margin auto
  margin-top 45px
  background var(--white)
  box-shadow 0 5px 10px rgba(0, 0, 0, 0.05)
  border-radius 10px
  z-index 1
  position relative

  &__header {
    display flex
    align-items center
    padding 30px
    gap 30px
    border-bottom 1px solid var(--gray-dark)
    justify-content space-between
  }

  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 29px;
    color: var(--dark);
  }

  &__close {
    width 30px
    height 30px
    background none
    padding 0
    border none
    display inline-flex
    align-items center
    justify-content center

    .icon {
      width 100%
      height 100%

      svg path {
        fill var(--dark-light)
      }
    }
  }

  &__body {
    display grid
    padding 30px
    grid-gap 30px
    //justify-content space-between
  }

  &__section {
    display grid
    width 100%
    grid-gap 20px
  }

  &__section-title {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 28px;
    color: var(--dark-light);
  }

  &__section-body {
    display grid
    grid-gap 20px
  }

  &__footer {
    display flex
    align-items center
    padding 30px
    gap 30px
    justify-content space-between
  }

  &__footer-box {
    display inline-flex
    align-items center
    gap 15px
  }
}
</style>
