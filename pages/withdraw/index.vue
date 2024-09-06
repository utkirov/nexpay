<script setup lang="ts">
definePageMeta({
  layout: "no-bottom-navigation-bar",
});
import { useToast } from "primevue/usetoast";

const toast = useToast();
import { defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);

import { useTransaction } from "@/stores/transactions";

const store = useTransaction();
const balanceStore = useMainPage();

const code = computed(() => store.code);
const message = computed(() => store.message);
const amountCalc = computed(() => store.amountCalc);
const balance = computed(() => balanceStore.balance);

const schema = {
  amount: "required",
  address: "required",
};

const amount = ref("");
const address = ref("");

const withdraw = async function () {
  await store.withdraw(amount.value, address.value);
};

const submit = async function () {
  await withdraw();

  if (code.value === 200) {
    toast.add({
      severity: "success",
      summary: "Info",
      detail: message,
      life: 3000,
    });
  } else if (code.value === 304) {
    toast.add({
      severity: "warn",
      summary: "Info",
      detail: message,
      life: 3000,
    });
  } else if (code.value === 301) {
    toast.add({
      severity: "error",
      summary: "Info",
      detail: message,
      life: 3000,
    });
  } else if (code.value === 302) {
    toast.add({
      severity: "error",
      summary: "Info",
      detail: message,
      life: 3000,
    });
  }

  const title = ref(`NexPAY - Withdraw`);

  useHead({
    title,
  });
};
const calc = async function () {
  await store.getCalc();
  amount.value = amountCalc.value;
};
</script>

<template>
  <section class="withdraw">
    <Toast />
    <navigation-the-top-title :title="$t('withdraw.title')" />

    <div class="withdraw__channel" v-wave>
      <h2>
        {{ $t("withdraw.channel") }}
      </h2>
      <h2>TRC20</h2>
    </div>

    <page-components-main-balance />

    <Form
      @submit="submit"
      :validation-schema="schema"
      v-slot="{ errors }"
      class="withdraw__form"
    >
      <div class="charge-input" :class="{ danger: errors.amount }">
        <utils-the-container-title
          :title="$t('withdraw.address')"
          :second="`${$t('withdraw.amount')} ${balance} USDT`"
        />
        <div class="charge-input__field">
          <Field
            name="amount"
            v-model="amount"
            :placeholder="$t('withdraw.inputAmount')"
            type="text"
          />
          <div @click="calc" class="cursor-pointer">
            <PhosphorIconMagnet :size="24" color="#fff" />
          </div>
        </div>
      </div>
      <Message severity="error" v-if="errors.amount">
        <ErrorMessage name="amount" />
      </Message>

      <div class="charge-input" :class="{ danger: errors.address }">
        <utils-the-container-title :title="$t('withdraw.paymentAddress')" />
        <div class="charge-input__field">
          <Field
            name="address"
            v-model="address"
            :placeholder="$t('withdraw.addressWith')"
            type="text"
          />
        </div>
      </div>
      <Message severity="error" v-if="errors.address">
        <ErrorMessage name="address" />
      </Message>

      <div class="withdraw__form-button">
        <button v-wave>
          {{ $t("withdraw.confirm") }}
        </button>
      </div>
    </Form>

    <div class="bottom__bar">
      <div class="bottom__bar-container">
        <nuxt-link v-wave :to="localeLocation('/transactions')">
          <PhosphorIconClockCounterClockwise :size="24" color="#fff" />
          {{ $t("withdraw.transactions") }}
        </nuxt-link>
      </div>
    </div>

    <div class="instructions">
      <div class="instructions__title">
        <h3>
          <PhosphorIconInfo :size="24" color="#fff" />
          {{ $t("withdraw.instructions") }}
        </h3>
      </div>
      <div class="instructions__body">
        <p>
          • The recharge address is USDT-TRC20, please check carefully before
          recharging
        </p>
        <p>
          • The minimum deposit amount is 50USDT. Amounts below 50USDT will not
          be credited
        </p>
        <p>
          • After the recharge is successful, it will be automatically credited
          within 3-5 minutes
        </p>
        <p>
          • Each time you recharge, you need to obtain a new recharge address.
          Please do not save the address and recharge multiple times
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.withdraw {
  @apply flex flex-col gap-[30px] my-[116px];
}

.withdraw__channel {
  @apply p-4 flex justify-between text-pure-white/65 rounded-2xl bg-pure-white/5;
}

.withdraw__form {
  @apply flex flex-col gap-[15px];
}

.withdraw__form-button {
  @apply mt-[15px];
}

.withdraw__form-button button {
  @include transitions();
  @apply text-lg px-[12px] py-[16px] leading-[24px] flex w-full justify-center bg-pure-white/5 bg-secondary-color text-primary-color font-bold rounded-2xl;
}

.withdraw__form-button button:disabled {
  @apply bg-pure-white/5 opacity-50 text-pure-white/65;
}

//
.instructions .instructions__title h3 {
  @apply flex gap-[10px] items-center text-lg font-bold text-pure-white/65 mb-[15px];
}

.instructions .instructions__body p {
  @apply text-pure-white/65 mb-[15px];
}

//
.charge-input .charge-input__field {
  @apply p-4  bg-pure-white/5 flex rounded-xl gap-[5px];
}

.charge-input .charge-input__field input {
  @apply w-full bg-transparent;
}

.charge-input .charge-input__field svg {
  @apply fill-secondary-color;
}
</style>
