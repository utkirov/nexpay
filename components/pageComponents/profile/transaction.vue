<template>
  <div class="transaction" v-wave
       :class="{'plus': props.transaction.type==='debit', 'minus': props.transaction.type==='credit'}">
    <h2 class="transaction__title">
      {{ props.transaction.method }}
    </h2>
    <div class="transaction__value">
      <h2>
        {{ props.transaction.amount }}
      </h2>
      <small>$</small>
    </div>
    <div class="transaction__data">
      <PhosphorIconClockCountdown :size="24" color="#fff"/>
      {{ props.transaction.created_at }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['transaction'])
</script>

<style lang="scss" scoped>
.transaction {
  @include transitions();
  @apply p-6 bg-pure-white/5 rounded-3xl flex flex-col gap-[10px] hover:bg-pure-white/15
}

.transaction.plus .transaction__value h2 {
  @apply text-success
}

.transaction.minus .transaction__value h2 {
  @apply text-danger
}

.transaction__title {
  @apply text-pure-white/65 text-lg
}

.transaction__value {
  @apply flex items-center gap-[5px]
}


.transaction__value h2 {
  @apply font-secondary font-bold flex items-end text-4xl
}

.transaction__value small {
  @apply text-pure-white/65 text-base
}

.transaction__data {
  @apply flex items-center text-pure-white/65 gap-[5px] mt-[10px]
}

.transaction__data svg {
  @apply fill-pure-white/65
}

</style>