<template>
  <form class="settings-form" action="">
    <InputComponent placeholder="Trade link" title="Steam Trade URL">
      <template #title>
        <a href="https://steamcommunity.com/my/tradeoffers/privacy#trade_offer_access_url" target="_blank">
          <span>Find Trade URL</span>
          <IconComponent name="export-3" />
        </a>
      </template>
    </InputComponent>
    <InputComponent placeholder="Email" />
    <div class="col col-2">
      <InputComponent placeholder="Name" />
      <InputComponent placeholder="Surname" />
    </div>
    <TextareaComponent placeholder="About" />
    <button class="btn btn--lg btn--main">
      <span>Save</span>
      <IconComponent name="arrow-right-1" />
    </button>
  </form>
</template>

<script setup></script>

<style lang="stylus">
.settings-form {
	background var(--dark-light, #011D2D)
	padding: 40px
	border-radius 0 0 var(--main-radius) var(--main-radius)
	display flex
	flex-direction column
	gap: 20px

	.btn {
		align-self flex-start
	}
}
</style>
