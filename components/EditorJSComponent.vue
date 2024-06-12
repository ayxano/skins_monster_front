<template>
  <div :class="cls" v-if="haveBlocks">
    <template v-for="({ data, type, id }, i) in parsedText.blocks">
      <p :class="`${cls}__${type}`" :key="i" v-if="type === 'paragraph'" v-html="data.text" :id="id"></p>
      <div :class="`${cls}__${type}`" v-if="type === 'embed' && data.embed" :key="i" :id="id">
        <span v-html="data.caption"></span>
        <iframe v-if="data.embed.includes('<iframe')" :src="data.embed"></iframe>
        <div v-else v-html="data.embed"></div>
      </div>
      <h2
        :id="id"
        :key="i"
        v-if="type === 'header' && data.level === 2"
        :class="`${cls}__${type} ${cls}__${type}--${data.level}`"
      >
        {{ data.text }}
      </h2>
      <h3
        :id="id"
        :key="i"
        v-if="type === 'header' && data.level === 3"
        :class="`${cls}__${type} ${cls}__${type}--${data.level}`"
      >
        {{ data.text }}
      </h3>
      <h4
        :id="id"
        :key="i"
        v-if="type === 'header' && data.level === 4"
        :class="`${cls}__${type} ${cls}__${type}--${data.level}`"
      >
        {{ data.text }}
      </h4>
      <h5
        :id="id"
        :key="i"
        v-if="type === 'header' && data.level === 5"
        :class="`${cls}__${type} ${cls}__${type}--${data.level}`"
      >
        {{ data.text }}
      </h5>
      <h6
        :id="id"
        :key="i"
        v-if="type === 'header' && data.level === 6"
        :class="`${cls}__${type} ${cls}__${type}--${data.level}`"
      >
        {{ data.text }}
      </h6>
      <pre :id="id" :key="i" v-if="type === 'code'" :class="`${cls}__${type}`">{{ data.code }}</pre>
      <div :id="id" :key="i" v-if="type === 'quote'" :class="`${cls}__${type}`">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g>
            <path
              d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
            />
          </g>
        </svg>
        <div :class="`${cls}__${type}-text`">{{ data.text }}</div>
        <div :class="`${cls}__${type}-header`">
          <img v-if="data.image" :src="data.image.url" :class="`${cls}__${type}-image`" :alt="data.caption" />
          <div :class="`${cls}__${type}-author`">
            <span>{{ data.caption }}</span>
            <span>{{ data.post }}</span>
          </div>
        </div>
      </div>
      <hr :id="id" :key="i" v-if="type === 'delimiter'" :class="`${cls}__${type}`" />
      <div :id="id" :key="i" v-if="type === 'raw'" :class="`${cls}__${type}`" v-html="data.html"></div>
      <div :id="id" :key="i" v-if="type === 'warning'" :class="`${cls}__${type}`">
        <span>{{ data.title }}</span>
        <p>{{ data.message }}</p>
      </div>
      <div v-if="type === 'table' && data.content && data.content.length" :key="i" :class="`${cls}__${type}`">
        <table :id="id" :key="i">
          <tbody v-if="data.withHeadings">
            <tr v-for="(row, i) in data.content.slice(0, 1)" :key="i">
              <th v-for="(column, j) in row" :key="j" v-html="column"></th>
            </tr>
            <tr v-for="(row, i) in data.content.slice(1)" :key="i">
              <td v-for="(column, j) in row" :key="j" v-html="column"></td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(row, i) in data.content" :key="i">
              <td v-for="(column, j) in row" :key="j" v-html="column"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul
        :id="id"
        :key="i"
        v-if="type === 'list' && data.style === 'unordered'"
        :class="`${cls}__${type}--${data.style}`"
      >
        <li v-for="(item, i) in data.items" :key="i" v-html="item"></li>
      </ul>
      <ol
        :id="id"
        :key="i"
        v-if="type === 'list' && data.style === 'ordered'"
        :class="`${cls}__${type}--${data.style}`"
      >
        <li v-for="(item, i) in data.items" :key="i" v-html="item"></li>
      </ol>
      <a
        :id="id"
        :key="i"
        v-if="type === 'linkTool' && data && data.meta && data.meta.title"
        :href="data.link"
        target="_blank"
        :class="`${cls}__${type}`"
        rel="nofollow"
      >
        <img v-if="data.meta.image.url.length" :src="data.meta.image.url" :alt="data.meta.title" />
        <div :class="`${cls}__${type}-content`">
          <span :class="`${cls}__${type}-content-title`">
            {{ data.meta.title ? data.meta.title : data.link }}
          </span>
          <span :class="`${cls}__${type}-content-description`" v-if="data.meta.description">
            {{ data.meta.description }}
          </span>
        </div>
      </a>
      <ul
        :id="id"
        :class="`${cls}__${type}-${data.config}`"
        :style="{
          display: 'grid',
          'grid-template-columns': `repeat(${data.countItemEachRow || 1}, 1fr)`,
        }"
        v-if="type === 'carousel' && ['standard', 'carousel'].includes(data.config) && data.items"
        :key="i"
      >
        <li v-for="(img, i) in data.items" :key="i">
          <a :href="img.url" :class="`${cls}__image`" @click.prevent="showGallery(data.items, i)">
            <img
              :style="{ height: 980 / parseInt(data.countItemEachRow) + 'px' }"
              :src="img.url"
              :alt="img.caption"
            />
            <span>{{ img.caption }}</span>
          </a>
        </li>
      </ul>
      <ul
        :id="id"
        :class="`${cls}__${type}-${data.config}`"
        :style="{
          display: 'block',
          'column-count': data.countItemEachRow,
        }"
        v-if="type === 'carousel' && data.config === 'masonry' && data.items"
        :key="i"
      >
        <li v-for="(img, i) in data.items" :key="i">
          <a :href="img.url" @click.prevent="showGallery(data.items, i)">
            <img :src="img.url" :alt="img.caption" />
            <span v-if="img.caption">{{ img.caption }}</span>
          </a>
        </li>
      </ul>
      <a
        :id="id"
        :key="i"
        v-if="type === 'image' && data.file"
        :class="[`${cls}__${type}`, data.stretched ? `${cls}__${type}--stretch` : '']"
        @click.prevent="showGallery([{ ...data.file, caption: data.caption }], i)"
        :href="data.file.url"
        target="_blank"
      >
        <img :src="data.file.url" :alt="data.caption" />
        <span v-if="data.caption">{{ data.caption }}</span>
      </a>
      <div :id="id" :class="`${cls}__${type}`" :key="i" v-if="type === 'video' && data.video">
        <span>{{ data.title }}</span>
        <video controls :src="data.video.url"></video>
      </div>
      <div :id="id" :class="`${cls}__${type}`" :key="i" v-if="type === 'audio' && data.audio">
        <span>{{ data.title }}</span>
        <img :src="data.cover.url" v-if="data.cover" alt="" />
        <audio controls :src="data.audio.url" v-if="data.audio"></audio>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "EditorJSComponent",
  // components: { EditorJSPollRenderer },
  data: () => ({
    cls: "editor-js-renderer",
    answeredPolls: [],
    sliders: {},
    sessionHash: "",
  }),
  props: {
    text: {
      type: [Object, String],
      required: true,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    nbspAvailable: Boolean,
  },
  computed: {
    haveBlocks() {
      return (
        this.parsedText &&
        typeof this.parsedText === "object" &&
        this.parsedText.blocks &&
        this.parsedText.blocks.length
      );
    },
    parsedText() {
      let text = this.text;
      try {
        if (!this.nbspAvailable) {
          text = text.replace(/&nbsp;/g, " ");
        }
        return JSON.parse(text);
      } catch (e) {
        return text;
      }
    },
  },
  methods: {
    showGallery(images, index = 0) {
      console.log("show gallery modal");
    },
  },
};
</script>

<style lang="stylus">
.editor-js-renderer {
  display flex
  flex-direction column
  grid-gap 20px

  .swiper-button-next, .swiper-button-prev {
    color var(--orange)
  }

  .swiper-pagination-bullet-active {
    background var(--orange)
  }

  &__paragraph {
    margin 0
    padding 0
    width 100%
    font-weight: 500;
    font-size: 1rem;
    line-height: 26px;

    a {
      text-decoration underline
    }
  }

  &__warning {
    padding 30px 50px
    display grid
    gap 10px
    width 100%
    background #F2F2F2
    border-left 5px solid var(--orange)
    border-radius var(--main-radius)
    max-width 80%
    margin: 0 auto
		+below(540px) {
			padding: 20px 30px
      max-width 100%
		}

    span {
      font-weight: 500;
      font-size: 1em;
      line-height: 26px;
    }

    p {
      font-weight: 500;
      font-size: 0.875em;
      line-height: 22px;
    }
  }

  &__video {
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding 10px
    border-radius var(--main-radius)
    display grid
    gap 10px
    width 100%

    video {
      border-radius var(--main-radius)
      width 100%
      max-height 400px
    }

    span {
      font-weight: 700;
      font-size: 1.375em;
      line-height: 28px;
    }
  }

  &__audio {
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding 10px
    border-radius var(--main-radius)
    display flex
    flex-direction column
    align-items flex-start
    gap 10px
    width 100%

    audio {
      border-radius var(--main-radius)
      width 100%
    }

    img {
      width auto
      height auto
      border-radius var(--main-radius)
      object-fit cover
      object-position center
      max-height 400px
    }

    span {
      font-weight: 700;
      font-size: 1.375em;
      line-height: 28px;
    }
  }

  &__table {
    width 100%
    overflow-x auto

    table {
      width 100%
			border-collapse: collapse

			th {
				background: var(--gray-10)
        text-align: left
			}

			tr td, th {
        padding 8px
				border-bottom: 1px solid var(--gray-30)
      }
    }
  }

  &__linkTool {
    width 100%
    max-width 80%
    margin: 0 auto
    padding 15px
    background var(--gray-20)
    display flex
    gap 30px
    box-sizing border-box
    border-radius var(--main-radius)
    text-decoration none
    align-items center
    //text-align center
    +below(1024px) {
      max-width 100%
    }
    +below(600px) {
      flex-direction column
      text-align center
      gap: 15px
    }

    &:hover {
      background var(--gray-30)
    }

    &:active {
      transform scale(0.97)
    }

    &-content {
      display flex
      flex-direction column
      gap 5px

      span:first-child {
        font-size 1.125rem
        font-weight bold
        +below(600px) {
          font-size 1rem
        }
      }

      span:last-child {
        +below(600px) {
          font-size 0.875rem
        }
      }
    }

    img {
      width 100%
      max-width 150px
      height auto
      max-height 100px
      overflow hidden
      flex-shrink 0
      border-radius var(--main-radius)
      object-fit contain
      +below(600px) {
        max-height 80px
      }
    }
  }

  &__delimiter {
    text-align center
    border none
    background none
    position relative
    height: auto

    &:before {
      display: inline-block;
      content: "***";
      font-size: 30px;
      line-height: 65px;
      height: 30px;
      letter-spacing: 0.2em;
    }
  }

  &__image {
    height auto
    display flex
    flex-direction column
    gap 8px
    max-height 500px

    &:hover {
      filter brightness(0.9)
    }

		&--stretch& {
			width 100%

			img {
				width: 100%
				height: 100%
        object-fit: contain
        object-position: center
			}
		}

    img {
			width: auto
			height: auto
      object-fit: contain
      border-radius var(--main-radius)
    }

    span {
      width 100%
      font-size 0.875em
      line-height normal
    }
  }

  &__carousel-carousel {
    .swiper-slide {
      display grid
      border-radius var(--main-radius)
    }

    img {
      width 100%
      height: 100%;
      max-height: 400px;
      object-fit cover
      object-position center
      border-radius var(--main-radius)
    }
  }

  &__carousel-standard {
    gap 10px
		+below(1024px) {
			grid-template-columns 1fr 1fr !important
		}
    +below(640px) {
      grid-template-columns 1fr !important
    }

    img {
      height: 100%;
      max-height: 400px;
      object-fit cover
      object-position center
      border-radius var(--main-radius)
    }
  }

  &__carousel-masonry {
    column-gap 10px
    width 100%
    +below(640px) {
      column-count 1 !important
    }

    img {
      object-fit cover
      object-position center
      border-radius var(--main-radius)
    }

    li {
      width 100%
      break-inside: avoid-column;
      margin-bottom 10px
    }
  }

  &__header {
    width 100%
    margin 0
    padding 0
  }

  &__list--unordered {
    padding-left 10px
    list-style-type disc
    list-style-position inside

    ol {
      list-style-type lower-latin
      list-style-position inside
      margin-left 15px
    }
    ul {
      list-style-type circle
      list-style-position inside
      margin-left 15px
    }
  }

  &__code {
    padding 10px
    background #FCF0EF
    font-family monospace
    font-size 0.875rem
    border-radius var(--main-radius)
  }

  &__list--ordered {
    padding-left 10px
    list-style-type: decimal;
    list-style-position: inside;

    ol {
      list-style-type lower-latin
      list-style-position inside
      margin-left 15px
    }
    ul {
      list-style-type circle
      list-style-position inside
      margin-left 15px
    }
  }

  &__embed {
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding 10px
    border-radius var(--main-radius)
    display flex
    flex-direction column
    align-items flex-start
    gap 10px
    width 100%

    span {
      font-weight: 700;
      font-size: 1.375em;
      line-height: 28px;
    }

    iframe {
      border-radius var(--main-radius)
      border none
      width 100%
      max-width 100%
      height 350px
      +below(580px) {
        height 270px
      }
      +below(420px) {
        height 230px
      }
    }
  }

  &__quote {
    position relative
    display grid
    gap 10px
    background: var(--gray-100, #F7F7F7);
    padding 32px
    border-radius 16px
		+below(480px) {
			padding: 24px
		}

    svg {
      width 48px
      height 48px

      path {
        fill #A5A5A5
      }
    }

    &-text {
      font-size: 1.25em;
      line-height: 140%;
    }

    &-header {
      display flex
      align-items center
      gap 8px
    }

    &-image {
      width 64px
      height 64px
      border-radius 8px
      object-fit cover
      object-position center
    }

    &-author {
      display grid
      align-items center

      span:first-child {
        font-weight: 600;
        font-size: 1em;
        line-height: 140%;
      }

      span:last-child {
        font-size 0.875em
        line-height 120%
      }
    }
  }
}
</style>
