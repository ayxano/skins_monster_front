<template>
  <label
    class="file-upload"
    :class="{
      'file-upload--disabled': disabled,
      'file-upload--highlight': highlight && !disabled,
      'file-upload--errors': errors && errors.length,
    }"
  >
    <label v-if="title" class="file-upload__title">{{ title }}</label>
    <span
      class="file-upload__container"
      @dragenter="dragOver"
      @dragleave="dragLeave"
      @dragover="dragOver"
      @drop="drop"
    >
      <span
        v-if="modelValue && modelValue.length && !drag && !highlight && !loading"
        class="file-upload__list"
      >
        <span v-for="(file, i) in modelValue" :key="i" class="file-upload__item">
          <ImgComponent class="file-upload__item-img" :img="file" />
          <a href="#" type="button" class="file-upload__remove" @click.prevent="remove(i)">
            <IconComponent name="close" />
          </a>
          <span class="file-upload__link">
            {{ file.name }}
          </span>
        </span>
      </span>
      <span v-else-if="modelValue && !drag && !highlight && !loading" class="file-upload__list">
        <span class="file-upload__item">
          <a href="#" type="button" class="file-upload__remove" @click.prevent="remove()">
            <IconComponent name="close" />
          </a>
          <a :href="modelValue.url" class="file-upload__link" download target="_blank">
            <span>{{ modelValue.origin_name }}</span>
          </a>
        </span>
      </span>
      <span v-else class="file-upload__placeholder">
        <span class="file-upload__loading" v-if="loading">
          <LoadingCircleIndicator title="Loading" />
        </span>
        <template v-else>
          <span>To upload a file, drag it to this area</span>
          <span class="file-upload__or"><span></span><span>or</span><span></span></span>
          <span class="btn btn--small btn--gray-outline--thin btn--gray-outline">
            Select {{ multiple ? "files" : "file" }}
          </span>
        </template>
      </span>
      <input
        v-show="false"
        ref="input"
        :disabled="loading || disabled"
        :multiple="multiple"
        type="file"
        :accept="accept"
        @change="change"
      />
    </span>
    <span class="file-upload__errors" v-for="(e, i) in errors" :key="i">
      {{ e }}
    </span>
  </label>
</template>

<script>
import IconComponent from "@/components/IconComponent.vue";
import { query } from "~/utils/global";
import LoadingCircleIndicator from "~/components/LoadingComponent.vue";

export default {
  name: "FilesUploadComponent",
  emits: ["update:modelValue", "error"],
  components: { LoadingCircleIndicator, IconComponent },
  props: {
    title: String,
    multiple: Boolean,
    path: String,
    modelValue: [Object, Array],
    errors: Array,
    disabled: Boolean,
    accept: String,
  },
  data() {
    return {
      drag: false,
      highlight: false,
      over: false,
      loading: false,
      dragTimeout: null,
      highlightTimeout: null,
    };
  },
  mounted() {
    document.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    document.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.drag = true;
    });
    document.addEventListener("dragleave", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.debouncedDelayedSetOfDrag(false);
    });
  },
  methods: {
    debouncedDelayedSetOfDrag(value) {
      clearTimeout(this.dragTimeout);
      this.dragTimeout = setTimeout(() => {
        this.drag = value;
      }, 200);
    },
    debouncedDelayedSetOfHighlight(value) {
      clearTimeout(this.highlightTimeout);
      this.highlightTimeout = setTimeout(() => {
        this.highlight = value;
      }, 200);
    },
    dragLeave(event) {
      event.preventDefault();
      event.stopPropagation();
      this.debouncedDelayedSetOfHighlight(false);
    },
    dragOver(event) {
      event.preventDefault();
      event.stopPropagation();
      this.highlight = true;
    },
    drop(event) {
      event.preventDefault();
      const dt = event.dataTransfer;
      if (dt) {
        this.loading = true;
        this.debouncedDelayedSetOfHighlight(false);
        this.debouncedDelayedSetOfDrag(false);
        this.upload(dt.files);
      }
    },
    change(event) {
      if (!this.loading && !this.disabled) {
        this.loading = true;
        if (event.target.files.length) {
          this.upload(event.target.files);
        }
      }
    },
    remove(i) {
      if (i) {
        let files = JSON.parse(JSON.stringify(this.modelValue));
        files.splice(i, 1);
        if (!files.length) {
          files = null;
        }
        this.$emit("update:modelValue", files);
      } else {
        this.$emit("update:modelValue", null);
        this.$refs.input.value = null;
      }
    },
    async upload(files) {
      const formData = new FormData();

      if (this.multiple) {
        for (let i = 0; i < files.length; i++) {
          formData.append("files[]", files[i]);
        }
      } else {
        formData.append("files[]", files[0]);
      }
      try {
        const { data } = await query(
          "/misc/upload",
          {},
          {
            method: "POST",
            body: formData,
          },
          "/api/v1",
          false
        );
        this.$emit("update:modelValue", data);
      } catch (e) {
        const err = await e.json();
        if (err.message) {
          this.$emit("error", err.message);
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="stylus">
.file-upload {
  display grid
  grid-gap 5px

	&--errors {

	}

  &__errors {
    opacity: 1;
    color: var(--red);
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 15px;
    display: grid;
    grid-gap: 3px;
  }

  &__container {
    display flex
    align-items center
    justify-content center
    flex-flow row wrap
    width 100%
    min-height 150px
    border-radius 10px
    padding 20px
    gap 24px
    transition border-color .2s
    cursor pointer
    position relative
		background: var(--white-o05);
		border: 2px solid var(--dark-light-2, #1F3B4B);

    &:hover {
			border-color: var(--gray-dark-2)
    }

    ^[0]--errors & {
      border: 2px solid var(--red);

      &:hover {
        border: 2px solid var(--red);
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 0.865rem;
    line-height: 24px;
    display block
  }

  &__or {
    width 100%
    display flex
    align-items center
    justify-content center
    gap 15px
    font-size: 0.875em;
    line-height: 17px;
    text-align: center;

    span:last-child,
    span:first-child {
      max-width 100px
      width 100%
      height 1px
      background var(--main)
    }
  }

  &__list {
    width: 100%;
    display: flex;
    align-items: flex-start;
		justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }

  &__loading {
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    background var(--dark-light);
    border-radius 10px

    .icon {
      width 40px
      height 40px

      svg {
        width 100%
        height 100%

        path {
          fill var(--black)
        }
      }
    }
  }

  &__item {
    width 92px
    position relative

		&-img {
			border-radius 10px
		}

    span {
      width 100%
    }

    .icon {
      height 60px
      max-width 60px
    }
  }

  &__link {
    width 100%
    display inline-flex
    flex-direction column
    justify-content flex-start
    gap 12px
    align-items center
    font-weight: normal;
    font-size: 0.75em;
    line-height: normal;
    text-align: center;
    white-space: pre-wrap;
    word-wrap: break-word;
		word-break: break-word;
  }

  &__remove {
    border-radius 100%
    width 20px
    height 20px
    display inline-flex
    align-items center
    background var(--red)
    border none
    justify-content center
    position absolute
    right 4px
    top 4px
    z-index 1
    cursor pointer

    .icon {
      width 12px
      height 12px

      path {
        fill var(--white)
      }
    }
  }

  &__placeholder {
    display flex
    flex-direction column
    align-items center
    justify-content center
    gap 8px
    font-weight: normal;
    font-size: 0.8750em;
    line-height: 20px;
    text-align: center;
    user-select none

    .icon {
      height 60px
      max-width 60px
    }
  }
}
</style>
