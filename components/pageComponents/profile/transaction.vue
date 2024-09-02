<template>
    <div class="transaction plus" v-wave>
        <h2 class="transaction__title">
            {{ props.title }}
        </h2>
        <div class="transaction__value">
            <h2>
                {{ props.price }}
            </h2>
            <small>сум</small>
        </div>
        <div class="transaction__data">
            <PhosphorIconBell :size="24" color="#fff"/>
            {{ props.data }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'price', 'data'])
</script>

<style lang="scss" scoped>
.transaction {
  @include transitions();
  @apply p-8 bg-pure-white/5 rounded-3xl flex flex-col gap-[10px] hover:bg-pure-white/15
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
  @apply flex items-end
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