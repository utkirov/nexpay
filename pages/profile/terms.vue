<script setup lang="ts">
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})
</script>

<template>
  <navigation-the-top-title title="Terms and conditions"/>

  <section class="terms">
    <div class="terms__title">
      <h2>
        Recharge instructions
      </h2>
    </div>

    <div class="temrs__body">
      <p>
        • The recharge address is USDT-TRC20, please check carefully before recharging
      </p>
      <p>
        • The minimum deposit amount is 30USDT. Amounts below 30USDT will not be credited
      </p>
      <p>
        • After the recharge is successful, it will be automatically credited within 3-5 minutes
      </p>
      <p>
        • Each time you recharge, you need to obtain a new recharge address. Please do not save the address and recharge
        multiple times
      </p>
      <p>
        •TAKORP is the leading platform for global smart APP promotion. Its business covers many countries around the
        world. Each country uses different legal currencies. Takorp uses USDT as the settlement currency, which is
        faster, safer and more efficient.
      </p>
    </div>


  </section>
</template>

<style scoped lang="scss">
.terms {
  @apply mt-[124px]
}

.terms h2, .terms p {
  @apply text-pure-white/65
}

.terms__title {
  @apply text-lg mb-[20px]
}

.temrs__body {
  @apply flex flex-col gap-[10px]
}
</style>