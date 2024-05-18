<template>
  <div class="test">
    Работает
    <img src="/assets/images/logo.svg" alt="" />
  </div>
</template>

<script setup>
import { useHead } from "#app";

useHead({
  titleTemplate: "",
});
</script>

<style lang="stylus">
.test {
	background black
	padding 20px
	color white
	text-align center
	height 120vh
}
</style>
