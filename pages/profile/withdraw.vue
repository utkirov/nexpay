<script setup lang="ts">
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})

const inputFirst = ref('')
const inputSecond = ref('')
</script>

<template>
  <section class="withdraw">
    <navigation-the-top-title title="Withdraw"/>

    <div class="withdraw__channel" v-wave>
      <h2>
        Withdrawal channel
      </h2>
      <h2>
        TRC20
      </h2>
    </div>


    <form action="#!" class="withdraw__form">
      <div class="charge-input">
        <utils-the-container-title title="Recharge address" second="Amount that can be withdrawn 3 USDT"/>
        <div class="charge-input__field">
          <input type="text" placeholder="Please enter the withdrawal amount" v-model="inputFirst">
          <button>
            <PhosphorIconMagnet :size="24" color="#fff"/>
          </button>
        </div>
      </div>

      <div class="charge-input">
        <utils-the-container-title title="Payment address"/>
        <div class="charge-input__field">
          <input type="text" placeholder="Please enter the withdrawal address" v-model="inputSecond">
        </div>
      </div>

      <div class="withdraw__form-button">
        <button v-wave :disabled="!inputFirst || !inputSecond">
          Confirm withdrawal
        </button>
      </div>


    </form>

    <div class="instructions">
      <div class="instructions__title">
        <h3>
          <PhosphorIconInfo :size="24" color="#fff"/>
          Recharge instructions
        </h3>
      </div>
      <div class="instructions__body">
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
          • Each time you recharge, you need to obtain a new recharge address. Please do not save the address and
          recharge multiple times
        </p>

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.withdraw {
  @apply flex flex-col gap-[30px] mt-[116px]
}

.withdraw__channel {
  @apply p-4 flex justify-between text-pure-white/65 rounded-2xl bg-pure-white/5
}
.withdraw__form {
  @apply flex flex-col gap-[15px]
}

.withdraw__form-button {
  @apply mt-[15px]
}

.withdraw__form-button button {
  @include transitions();
  @apply text-lg px-[12px] py-[16px] leading-[24px] flex w-full justify-center bg-pure-white/5 bg-secondary-color text-primary-color font-bold rounded-2xl
}

.withdraw__form-button button:disabled {
  @apply bg-pure-white/5 opacity-50 text-pure-white/65
}


//
.instructions .instructions__title h3 {
  @apply flex gap-[10px] items-center text-lg font-bold text-pure-white/65 mb-[15px]
}

.instructions .instructions__body p {
  @apply text-pure-white/65 mb-[15px]
}

//
.charge-input .charge-input__field {
  @apply p-4  bg-pure-white/5 flex rounded-xl gap-[5px]
}

.charge-input .charge-input__field input {
  @apply w-full bg-transparent
}

.charge-input .charge-input__field svg {
  @apply fill-secondary-color
}
</style>