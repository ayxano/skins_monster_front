<template>

<div class="bonus__body" data-v-3764a00c="">
  <div class="bonus-methods" data-v-0e2c7714="" data-v-3764a00c=""><img alt="Maestro" loading="lazy" src="/svg/icons/maestro.svg" data-v-0e2c7714=""> <img alt="Visa" loading="lazy" src="/svg/icons/visa.svg" data-v-0e2c7714=""> <img alt="Bitcoin" loading="lazy" src="/svg/icons/btc.svg" data-v-0e2c7714=""> </div>
<div class="bonus-description" data-v-164012a8="" data-v-3764a00c="">
  <span class="base-header" data-v-70550540="" data-v-164012a8=""><strong>Various payment methods </strong> - credit card or cryptocurrency</span> <p data-v-164012a8="">   </p>  </div>
</div> 
</template>

<style lang="stylus">

.bonus[data-v-3764a00c] {
    --fill-color: #3f3c38;
    --stroke-color: #56524d;
    position: relative
}

.bonus__body[data-v-3764a00c] {
    grid-gap: 3rem;
    background-color: var(--dark-light);
    border-radius: var(--main-radius)
    display: grid;
    gap: 3rem;
    grid-template-columns: min-content 1fr;
    overflow: hidden;
    align-items: center;
    padding: 3rem;
    position: relative;
    z-index: 1
}

@media screen and (max-width: 959px) {
    .bonus__body[data-v-3764a00c] {
        display:flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1.5rem
    }
}

.bonus__decoration[data-v-3764a00c] {
    height: 8rem;
    left: -2rem;
    top: -2rem;
    width: 12rem
}

.bonus__value.text-stroke[data-v-3764a00c] {
    -webkit-text-stroke: 3px transparent;
    bottom: 0;
    font-size: 18rem;
    position: absolute;
    right: 0;
    transform: translate(16%,100%);
    transition: transform .5s;
    z-index: -1
}

.bonus__value.text-stroke.show[data-v-3764a00c] {
    transform: translate(16%,43%)
}

@media screen and (max-width: 959px) {
    .bonus__value.text-stroke[data-v-3764a00c] {
        display:none
    }
}

.bonus-methods[data-v-0e2c7714] {
    grid-gap: 1.5rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3,3.75rem);
    grid-template-rows: 3.75rem;
}

@media screen and (max-width: 959px) {
    .bonus-methods[data-v-0e2c7714] {
        gap:1rem;
        grid-template-columns: repeat(3,2.5rem);
        grid-template-rows: 2.5rem;
        justify-content: center;
        position: relative
    }
}

.bonus-methods>img[data-v-0e2c7714] {
    aspect-ratio: 1;
    transition: transform 275ms ease;
    width: 100%
}

.bonus-methods>img[data-v-0e2c7714]:hover {
    transform: scale(1.125)
}

.bonus-description[data-v-164012a8] .base-header {
    margin-left: -.5rem
}

@media screen and (max-width: 959px) {
    .bonus-description[data-v-164012a8] p {
        font-size:1rem

    }
}

</style>