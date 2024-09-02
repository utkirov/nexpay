<!--suppress ALL -->
<script setup>
definePageMeta({
    layout: 'no-bottom-navigation-bar'
})
import {useUserAuth} from "@/stores/auth";
import {defineRule, configure} from 'vee-validate';
import {required, email, min} from '@vee-validate/rules';
import {localize} from '@vee-validate/i18n';
import {useToast} from 'primevue/usetoast';

const toast = useToast();

defineRule('required', required);
defineRule('min', min);

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
const phone = ref('');
const password = ref('');
const checked = ref(false)

const logIn = function () {
    store.logIn(phone.value, password.value);
}
const checking = function () {
    checked.value = checked.value !== true;
}


// veevalidate

const schema = {
    phone: 'required',
    password: 'required',
};

const submit = function () {
    logIn()
    if (store.responce.code === 200) {
        showSuccess()
    } else {
        showError()
    }

}
</script>

<template>
    <section class="login">
        <Toast/>
        {{ store.res }}
        <Form @submit="submit" :validation-schema="schema" v-slot="{ errors }" class="form">


            <div class="form__title">
                <h1>
                    Log in
                </h1>
            </div>

            <div class="form__container">
                <div class="input" :class="{'danger': errors.phone}">
                    <div class="input__icon">
                        <PhosphorIconUserCircle :size="24" color="#17153B"/>
                    </div>
                    <div class="input__type">
                        <Field name="phone" v-model="phone" placeholder="Mobile phone or number" type="text"/>

                    </div>
                    <div class="input__last-icon">
                        <PhosphorIconCaretDown :size="24" color="#7B7B7B"/>
                    </div>
                </div>
                <div class="input__error">
                    <ErrorMessage name="phone"/>
                </div>
                <div class="input" :class="{'danger': errors.phone}">
                    <div class="input__icon">
                        <PhosphorIconPassword :size="24" color="#17153B"/>
                    </div>
                    <div class="input__type">
                        <Field name="password" type="password" v-model="password" placeholder="Password"/>
                    </div>
                    <div class="input__last-icon">
                        <PhosphorIconEye :size="24" color="#7B7B7B"/>
                    </div>
                </div>
                <div class="input__error">
                    <ErrorMessage name="password"/>
                </div>
<!--                <div class="form__actions">-->
                <!--                    <button class="form__actions-remember">-->
                <!--                        <utils-checkbox id="checkbox" @click="checking()" :checked="checked"/>-->
                <!--                    </button>-->
                <!--                    <nuxt-link to="#!">-->
                <!--                        <h3>-->
                <!--                            Forgot password?-->
                <!--                        </h3>-->
                <!--                    </nuxt-link>-->
                <!--                </div>-->
                <div class="form__submit">
                    <button>
                        Login
                    </button>
                    <div class="form__submit-policy">
                        <p>
                            By clicking “Login”, I Agree to Takorp’s
                        </p>
                        <p>
                            Terms of Service and Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
        </Form>


        <div class="login__actions">
            <nuxt-link to="/signin" class="login__actions__item">
                <div class="login__actions__item-icon">
                    <PhosphorIconUserCirclePlus :size="48" color="#fff"/>
                </div>
                <div class="login__actions__item-title">
                    <h3>
                        Register an account
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

// errors
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
  @include transitions();
  @apply w-full px-[15px] py-[12px] flex bg-pure-white rounded-2xl gap-[10px] border-2 border-transparent
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