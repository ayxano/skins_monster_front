<template>
  <main class="page contacts-page">
    <div class="page__inner">
      <BreadcrumbsComponent title="Contacts" />
      <div class="contacts-page__content">
        <div class="contacts-page__info">
          <div class="contacts-page__block">
            <span class="contacts-page__block-title">Legal</span>
            <div class="contacts-page__block-value">SkinMonster LTD, 10 Kypranoros street, Cyprus.</div>
          </div>
          <div class="contacts-page__block">
            <span class="contacts-page__block-title">Email</span>
            <div class="contacts-page__block-value">
              Support: help@skinmonster.com - this email can be used to communicate with our support team. We
              work 24/7 and will be happy to provide help with any issues you may encounter on the site. If
              you have any questions regarding site mechanics, do not hesitate to contact us.
            </div>
          </div>
          <div class="contacts-page__block">
            <span class="contacts-page__block-title">Phone</span>
            <div class="contacts-page__block-value">+1 980 156 16 56</div>
          </div>
          <div class="contacts-page__block">
            <span class="contacts-page__block-title">Schedule</span>
            <div class="contacts-page__block-value">Site working schedule</div>
          </div>
        </div>
        <div class="contacts-page__feedback">
          <h3 class="contacts-page__feedback-title">Write to us</h3>
          <form class="contacts-page__feedback-form" action="">
            <InputComponent placeholder="Phone" />
            <InputComponent placeholder="Email" />
            <TextareaComponent placeholder="Message" />
            <button class="contacts-page__feedback-submit btn btn--lg btn--main">
              <span>Send</span>
              <IconComponent name="arrow-right-1" />
            </button>
            <span class="contacts-page__feedback-terms">
              By use form, you agree to the
              <nuxt-link :to="{ name: 'dynamic' }">User Agreement and Privacy Policy</nuxt-link>.
            </span>
          </form>
        </div>
      </div>
      <BottomPageBannerComponent />
    </div>
  </main>
</template>

<script setup>
// import EditorJSComponent from "~/components/EditorJSComponent.vue";
//
// const text =
//   '{"time":1716913819684,"blocks":[{"id":"a2IYkrZ-gw","type":"paragraph","data":{"text":"Irure quis esse officia duis ullamco. Non irure aute ipsum culpa enim esse commodo officia labore reprehenderit do ad occaecat. Proident incididunt mollit do consequat ipsum amet. Reprehenderit ullamco excepteur reprehenderit labore nisi laborum. Quis cillum quis adipisicing. Dolor qui laboris nisi irure nulla labore."}},{"id":"yXS9Po0UGc","type":"paragraph","data":{"text":"Irure quis esse officia duis ullamco. Non irure aute ipsum culpa enim esse commodo officia labore reprehenderit do ad occaecat. Proident incididunt mollit do consequat ipsum amet. Reprehenderit ullamco excepteur reprehenderit labore nisi laborum. Quis cillum quis adipisicing. Dolor qui laboris nisi irure nulla labore."}},{"id":"Ah0ibsRFTD","type":"image","data":{"file":{"url":"https://a44a116f-9e98-4507-a52f-e0759b05ad3b.selstorage.ru/editor/XxMkKK8CU8bTQ5ndG1PQTF8S6zKMbziv1XbsXATK.png"},"caption":"","withBorder":false,"stretched":false,"withBackground":false}},{"id":"gJ1aeXpH3D","type":"header","data":{"text":"Irure quis esse officia duis ullamco.","level":3}},{"id":"6zEnFxQhWj","type":"paragraph","data":{"text":"Non irure aute ipsum culpa enim esse commodo officia labore reprehenderit do ad occaecat. Proident incididunt mollit do consequat ipsum amet. Reprehenderit ullamco excepteur reprehenderit labore nisi laborum. Quis cillum quis adipisicing. Dolor qui laboris nisi irure nulla labore."}}],"version":"2.29.1"}';
</script>

<style lang="stylus">
.contacts-page {
	&__content {
		display grid
		grid-template-columns 676fr minmax(300px, 390fr)
		gap: var(--gap)
	}

	&__info {
		display flex
		flex-direction column
		gap: 20px
	}

	&__block {
		display flex
		flex-direction column
		gap: 5px

		&-title {
			font-weight 700
		}
	}

	&__feedback {
		&-title {
			margin-bottom 30px
		}

		&-form {
			display flex
			flex-direction column
			gap: 20px
		}

		&-submit {
			align-self flex-start
		}

		&-terms {
			color: var(--gray-dark-2, #516D7D);
			font-size: 0.75rem
			line-height: normal;
		}
	}
}
</style>
