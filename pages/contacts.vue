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

<script setup></script>

<style lang="stylus">
.contacts-page {
	&__content {
		display grid
		grid-template-columns 676fr minmax(300px, 390fr)
		gap: var(--gap)
		+below(720px) {
			grid-template-columns 1fr
		}
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
