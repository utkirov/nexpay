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


    <h1>
      team preparing...sad
    </h1>
  </section>
</template>

<style scoped lang="scss">
.login {
  @apply h-screen flex flex-col justify-between py-[150px]

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