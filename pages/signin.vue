<script setup lang="ts">

definePageMeta({
  layout: 'no-bottom-navigation-bar'
})

const checked = ref(false)

const checking = function () {
  checked.value = checked.value !== true;
}
</script>

<template>
  <section class="login">


    <form action="#" class="form" @submit.prevent="default">
      <div class="form__title">
        <h1>
          Sign In
        </h1>
      </div>
      <div class="form__container">
        <div class="input">
          <div class="input__icon">
            <PhosphorIconUserCircle :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <input type="text" placeholder="Mobile phone or number">
          </div>
          <div class="input__last-icon">
            <PhosphorIconCaretDown :size="24" color="#7B7B7B"/>
          </div>
        </div>
        <div class="input">
          <div class="input__icon">
            <PhosphorIconNumpad :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <input type="password" placeholder="Verification code">
          </div>
          <div class="input__last-icon">
            <PhosphorIconEye :size="24" color="#7B7B7B"/>
          </div>
        </div>

        <div class="input">
          <div class="input__icon">
            <PhosphorIconEnvelope :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <input type="password" placeholder="Invivation code (required)">
          </div>
          <div class="input__last-icon">
            <PhosphorIconEye :size="24" color="#7B7B7B"/>
          </div>
        </div>
        <div class="input">
          <div class="input__icon">
            <PhosphorIconPassword :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <input type="password" placeholder="Login password">
          </div>
          <div class="input__last-icon">
            <PhosphorIconEye :size="24" color="#7B7B7B"/>
          </div>
        </div>
        <div class="input">
          <div class="input__icon">
            <PhosphorIconPassword :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <input type="password" placeholder="Confirm login password again">
          </div>
          <div class="input__last-icon">
            <PhosphorIconEye :size="24" color="#7B7B7B"/>
          </div>
        </div>
        <div class="input">
          <div class="input__icon">
            <PhosphorIconKey :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <input type="password" placeholder="Fund password">
          </div>
          <div class="input__last-icon">
            <PhosphorIconEye :size="24" color="#7B7B7B"/>
          </div>
        </div>
        <div class="input">
          <div class="input__icon">
            <PhosphorIconKey :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <input type="password" placeholder="Re-confirm funding password">
          </div>
          <div class="input__last-icon">
            <PhosphorIconEye :size="24" color="#7B7B7B"/>
          </div>
        </div>

        <div class="form__submit">
          <button>
            Sign In
          </button>
        </div>
      </div>
    </form>

    <div class="login__actions">
      <nuxt-link to="/login" class="login__actions__item">
        <div class="login__actions__item-icon">
          <PhosphorIconSignIn :size="48" color="#fff"/>
        </div>
        <div class="login__actions__item-title">
          <h3>
            Already have an account
          </h3>
        </div>
      </nuxt-link>

      <nuxt-link to="#!" class="login__actions__item">
        <div class="login__actions__item-icon">
          <PhosphorIconDownloadSimple :size="48" color="#fff"/>
        </div>
        <div class="login__actions__item-title">
          <h3>
            Download Application
          </h3>
        </div>
      </nuxt-link>

      <nuxt-link to="#!" class="login__actions__item">
        <div class="login__actions__item-icon">
          <PhosphorIconHeadset :size="48" color="#fff"/>
        </div>
        <div class="login__actions__item-title">
          <h3>
            Contact customer service
          </h3>
        </div>
      </nuxt-link>
    </div>

    <div class="login__copyright">
      <p>
        Copyright 2020 Takorp All rights Reserved
      </p>
    </div>


  </section>
</template>

<style scoped lang="scss">
.login {
  @apply h-screen flex flex-col justify-between py-[100px] gap-[30px]

}

.login h1 {
  @apply text-3xl font-bold mb-[20px]
}

.form .form__container {
  @apply flex flex-col gap-[15px] w-full
}

.input {
  @apply w-full px-[15px] py-[12px] flex bg-pure-white rounded-2xl gap-[10px]
}

.input .input__type {
  @apply w-full
}

.input .input__type input {
  @apply w-full bg-transparent text-primary-color
}

.form__actions {
  @apply flex justify-between mt-[10px]
}

.form__actions h3 {
  @include transitions();
  @apply text-pure-white/65 hover:text-pure-white
}

.form__submit {
  @apply mt-[20px] flex flex-col gap-[10px]
}

.form__submit button {
  @include transitions();
  @apply p-[12px] leading-[24px] text-base font-bold w-full text-center bg-secondary-color rounded-2xl text-primary-color hover:bg-secondary-color/90 active:scale-95

}

.form__submit button:disabled {
  @include transitions();
  @apply bg-pure-white/25 rounded-2xl text-primary-color active:scale-100

}

.form__submit-policy p {
  @apply text-sm text-pure-white/65 text-center
}

.login__actions {
  @apply flex justify-between
}

.login__actions__item {
  @include transitions();
  @apply p-[10px] w-[145px] h-[145px] flex flex-col gap-[10px] items-center justify-center bg-pure-white/5 rounded-[30px] hover:bg-pure-white/10 hover:cursor-pointer active:bg-pure-white/5
}

.login__actions__item-title h3 {
  @apply text-center text-sm max-w-[110px] text-pure-white/65
}

.login__copyright p {
  @apply text-[14px] font-medium text-pure-white/65 text-center
}
</style>