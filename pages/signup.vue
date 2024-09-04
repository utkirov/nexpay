<script setup>
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})
import {useUserAuth} from "@/stores/auth";
import {defineRule, configure} from 'vee-validate';
import {required, confirmed, min, max} from '@vee-validate/rules';
import {localize} from '@vee-validate/i18n';
import {useToast} from 'primevue/usetoast';

const toast = useToast();

defineRule('required', required);
defineRule('confirmed', confirmed);
defineRule('min', min);
defineRule('max', max);

configure({
  generateMessage: localize('en', {
    messages: {
      required: 'This field is required',
    },
  }),
});

const showSuccess = () => {
  toast.add({severity: 'success', summary: store.responce.message, life: 3000});
};

const showError = () => {
  toast.add({severity: 'error', summary: store.responce.message, life: 3000});
};

const store = useUserAuth();
const code = computed(() => store.code);
const message = computed(() => store.message);
const phone = ref('');
const password = ref('');
const name = ref('');
const confirmPassword = ref('');
const checked = ref(false)
const refer = ref('');
const secretCode = ref('');
const confirmSecretCode = ref('');

const passwordShow = ref('password')
const secretCodeShow = ref('password')


const signingUp = async function () {
  await store.signUp(name.value, phone.value, password.value, refer.value, secretCode.value);
}
const checking = function () {
  checked.value = checked.value !== true;
}

const showInputs = function (type) {
  if (type === 'password') {
    passwordShow.value = passwordShow.value === 'password' ? 'text' : 'password';
  } else if (type === 'secret') {
    secretCodeShow.value = secretCodeShow.value === 'password' ? 'text' : 'password';
  }
}


// veevalidate

const schema = {
  phone: 'required',
  password: 'required|min:5',
  name: 'required',
  refer: 'required',
  secretCode: 'required|max:6',
  confirmSecretCode: 'required|confirmed:@secretCode',
  confirmPassword: 'required|confirmed:@password',
};

const submit = async function () {
  await signingUp()

  console.log(code.value)
  console.log(message.value)

  if (code.value === 200) {
    toast.add({
      severity: 'success',
      summary: 'Info',
      detail: message,
      life: 3000
    });
  } else if (code.value === 403) {
    toast.add({
      severity: 'warn',
      summary: 'Info',
      detail: message,
      life: 3000
    });
  } else if (code.value === 404) {
    toast.add({
      severity: 'error',
      summary: 'Info',
      detail: message,
      life: 3000
    });
  }

}
</script>

<template>
  <section class="login">
    <Toast/>


    <Form @submit="submit" :validation-schema="schema" v-slot="{ errors }" class="form">


      <div class="form__title">
        <h1>
          Sign Up
        </h1>
      </div>

      <div class="form__container">
        <div class="input" :class="{'danger': errors.name}">
          <div class="input__icon">
            <PhosphorIconUserCircle :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <Field name="name" v-model="name" placeholder="Your name" type="text"/>

          </div>
        </div>
        <Message severity="error" v-if="errors.name">
          <ErrorMessage name="name"/>
        </Message>
        <div class="input" :class="{'danger': errors.phone}">
          <div class="input__icon">
            <PhosphorIconPhone :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <Field name="phone" v-model="phone" placeholder="Phone number"
                   type="text"/>

          </div>
        </div>
        <Message severity="error" v-if="errors.phone">
          <ErrorMessage name="phone"/>
        </Message>
        <div class="input" :class="{'danger': errors.password}">
          <div class="input__icon">
            <PhosphorIconPassword :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <Field name="password" v-model="password" placeholder="Password"
                   :type="passwordShow"/>
          </div>
          <div class="input__last-icon" @click="showInputs('password')">
            <PhosphorIconEye :size="24" v-if="passwordShow==='password'" color="#7B7B7B"/>
            <PhosphorIconEyeSlash :size="24" v-if="passwordShow==='text'" color="#7B7B7B"/>
          </div>
        </div>
        <Message severity="error" v-if="errors.password">
          <ErrorMessage name="password"/>
        </Message>
        <div class="input" :class="{'danger': errors.confirmPassword}">
          <div class="input__icon">
            <PhosphorIconPassword :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <Field name="confirmPassword" v-model="confirmPassword" placeholder="Confirm Password"
                   :type="passwordShow"/>
          </div>
          <div class="input__last-icon" @click="showInputs('password')">
            <PhosphorIconEye :size="24" v-if="passwordShow==='password'" color="#7B7B7B"/>
            <PhosphorIconEyeSlash :size="24" v-if="passwordShow==='text'" color="#7B7B7B"/>
          </div>
        </div>
        <Message severity="error" v-if="errors.confirmPassword">
          <ErrorMessage name="confirmPassword"/>
        </Message>

        <div class="input" :class="{'danger': errors.refer}">
          <div class="input__icon">
            <PhosphorIconLink :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <Field name="refer" v-model="refer" placeholder="Referral code"
                   type="text"/>
          </div>
        </div>
        <Message severity="error" v-if="errors.refer">
          <ErrorMessage name="refer"/>
        </Message>

        <div class="input" :class="{'danger': errors.secretCode}">
          <div class="input__icon">
            <PhosphorIconLockLaminated :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <Field name="secretCode" v-model="secretCode" placeholder="Secret code"
                   :type="secretCodeShow"/>
          </div>
          <div class="input__last-icon" @click="showInputs('secret')">
            <PhosphorIconEye :size="24" v-if="secretCodeShow==='password'" color="#7B7B7B"/>
            <PhosphorIconEyeSlash :size="24" v-if="secretCodeShow==='text'" color="#7B7B7B"/>
          </div>
        </div>
        <Message severity="error" v-if="errors.secretCode">
          <ErrorMessage name="secretCode"/>
        </Message>

        <div class="input" :class="{'danger': errors.confirmSecretCode}">
          <div class="input__icon">
            <PhosphorIconLockLaminated :size="24" color="#17153B"/>
          </div>
          <div class="input__type">
            <Field name="confirmSecretCode" v-model="confirmSecretCode" placeholder="Confirm Secret code"
                   :type="secretCodeShow"/>
          </div>
          <div class="input__last-icon" @click="showInputs('secret')">
            <PhosphorIconEye :size="24" v-if="secretCodeShow==='password'" color="#7B7B7B"/>
            <PhosphorIconEyeSlash :size="24" v-if="secretCodeShow==='text'" color="#7B7B7B"/>
          </div>
        </div>
        <Message severity="error" v-if="errors.confirmSecretCode">
          <ErrorMessage name="confirmSecretCode"/>
        </Message>

        <div class="form__submit">
          <button>
            Sign Up
          </button>
        </div>
      </div>
    </Form>


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

      <nuxt-link to="https://t.me/NEXPAY_support" target="_blank" class="login__actions__item">
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
        2017 | NEXPAY LLC.
      </p>
    </div>


  </section>
</template>

<style scoped lang="scss">
.input__error {
  @apply font-bold text-danger
}

.input.danger {
  @apply border-2 border-danger text-danger bg-danger/50
}

.input.danger svg {
  @apply fill-pure-white
}

.input.danger input {
  @apply text-pure-white
}

////
.login {
  @apply h-screen flex flex-col justify-between py-[100px] gap-[30px]

}

.login h1 {
  @apply text-3xl font-bold mb-[20px]
}

.form .form__container {
  @apply flex flex-col gap-[8px] w-full
}

.input {
  @apply w-full px-[15px] py-[12px] flex bg-pure-white rounded-2xl gap-[10px] mb-[5px]
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
  @apply p-[12px] leading-[24px] py-4 text-base font-bold w-full text-center bg-secondary-color rounded-2xl text-primary-color hover:bg-secondary-color/90 active:scale-95

}

.form__submit button:disabled {
  @include transitions();
  @apply bg-pure-white/25 rounded-2xl text-primary-color active:scale-100

}

.form__submit-policy p {
  @apply text-sm text-pure-white/65 text-center
}

.login__actions {
  @apply flex gap-[10px]
}

.login__actions__item {
  @include transitions();
  @apply p-[10px] py-[15px] w-full flex flex-col gap-[px] items-center justify-center bg-pure-white/5 rounded-[30px] hover:bg-pure-white/10 hover:cursor-pointer active:bg-pure-white/5
}

.login__actions__item-title h3 {
  @apply text-center text-sm max-w-[110px] text-pure-white/65
}

.login__copyright p {
  @apply text-[14px] font-medium text-pure-white/65 text-center
}
</style>