<script setup lang="ts">
definePageMeta({
    layout: 'no-bottom-navigation-bar'
})
import {useRecharge} from "@/stores/recharge";

const store = useRecharge()
await store.getRecharge()
const input = ref('')
input.value = store.address

import {useClipboard} from '@vueuse/core'

const source = ref('Hello')
const {text, copy, copied, isSupported} = useClipboard({source})
</script>

<template>
    <section class="recharge">
        <navigation-the-top-title title="Recharge"/>

        <div class="qr">
            <div class="qr__container">
                <div class="qr__body">
                    <page-components-profile-recharge-qr/>
                </div>
                <div class="qr__bottom">
                    <div class="qr__bottom-title">
                        <h2>
                            Mainnet:
                        </h2>
                        <h2>
                            TRC20
                        </h2>
                    </div>
                    <nuxt-link
                            to="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/QR_icon.svg/1200px-QR_icon.svg.png"
                            download="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/QR_icon.svg/1200px-QR_icon.svg.png"
                            class="qr__bottom-btn">
                        Save QR code
                    </nuxt-link>
                </div>
            </div>


        </div>

        <div class="charge-input">
            <utils-the-container-title title="Recharge address"/>
            <div class="charge-input__field">
                <input type="text" disabled v-model="input">
                <button @click="copy(input)">
                    <PhosphorIconCopy :size="24" color="#fff"/>
                </button>
            </div>

        </div>

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
                    • Each time you recharge, you need to obtain a new recharge address. Please do not save the address
                    and
                    recharge multiple times
                </p>

            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.recharge {
  @apply flex flex-col gap-[30px] mt-[116px]
}

.qr {
  @apply flex justify-center flex-col items-center
}

.qr__container {
  @apply flex max-w-[350px] p-[15px] bg-pure-white/5 rounded-[30px] gap-[20px] flex-col
}

.qr__code {
  @apply flex w-full
}

.qr__body {
  @apply flex w-full justify-between
}

.qr__bottom {
  @apply flex flex-col gap-[10px]
}

.qr__bottom .qr__bottom-title {
  @apply flex justify-between
}

.qr__bottom .qr__bottom-btn {
  @include transitions;
  @apply flex w-full p-[12px] bg-pure-white/5 rounded-3xl justify-center hover:bg-pure-white/15
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