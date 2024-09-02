<template>
    <section class="balance">
        <div class="balance__container">
            <div class="balance__title">
                <h3>
                    Balance
                </h3>
            </div>
            <div class="balance__value">

                <h2>
                    {{ store.balance }}$
                </h2>
            </div>
        </div>
        <div class="balance__container">
            <div class="balance__action">
                <nuxt-link to="/team">
                    <PhosphorIconDotsThreeCircleVertical :size="32" color="#fff"/>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import {useMainPage} from "@/stores/mainPage";

const store = useMainPage()
store.getMainPage()
</script>

<style scoped lang="scss">
.balance {
  background: radial-gradient(48% 70.88% at 52% 50%, rgba(151, 71, 255, 0.49) 0%, rgba(67, 1, 158, 0.49) 100%);
}

.balance {
  @apply p-[20px] rounded-3xl flex justify-between items-center
}

.balance__title h3 {
  @apply text-lg text-pure-white/65
}

.balance__value h2 {
  @apply font-secondary font-bold text-[24px]
}

.balance__action svg {
  @include transitions();
  @apply fill-pure-white/65 hover:fill-pure-white
}
</style>