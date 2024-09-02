<script setup lang="ts">
import {useQRCode} from '@vueuse/integrations/useQRCode'

import {useRecharge} from "@/stores/recharge";

const store = useRecharge()
store.legacy = true
store.getRecharge()
const text = store.address
const qrcode = useQRCode(text)

</script>

<template>
    <img :src="qrcode" :alt="store.address"/>
</template>

<style scoped lang="scss">
img {
  @apply w-[350px]
}
</style>