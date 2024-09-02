<template>
    <div class="level">
        <div class="level__selected" v-if="props.is_active">
            <PhosphorIconMagnet :size="24" color="#fff"/>
            <h3>
                Ваш уровень
            </h3>
        </div>

        <div class="level__header">
            <div class="level__header-title">
                <h2>
                    {{ props.name }}
                </h2>
            </div>
            <div class="level__header-amount">
                <h2>
                    {{ props.price }}$
                </h2>
            </div>
        </div>

        <div class="level__body">
            <div class="level__body-item">
                <div class="level__body-item__title">
                    Финансировение дней
                </div>
                <div class="level__body-item__value">
                    {{ props.days }}
                </div>
            </div>

            <div class="level__body-item" v-if="props.is_active">
                <div class="level__body-item__title">
                    Оставшиеся дни
                </div>
                <div class="level__body-item__value">
                    {{ props.expire_at }}
                </div>
            </div>

            <div class="level__body-item">
                <div class="level__body-item__title">
                    Ежедневный Доход
                </div>
                <div class="level__body-item__value">
                    {{ props.percent }}%
                </div>
            </div>

            <div class="level__body-item">
                <div class="level__body-item__title">
                    Возможная прибль
                </div>
                <div class="level__body-item__value">
                    400 $
                </div>
            </div>
        </div>

        <div class="level__footer">
            <button class="take" v-if="props.is_active">
                <span class="take__title">
                       <PhosphorIconMagnet :size="24" color="#fff"/>  Получить
                </span>
                <span class="take__value">
                    {{ props.percent }}$
                </span>
            </button>

            <button class="upgrade">
                <span class="upgrade__title">
                       <PhosphorIconMagnet :size="24" color="#fff"/>  Получить
                </span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['is_active', 'name', 'days', 'expire_at', 'price', 'percent'])
</script>

<style lang="scss">
.level {
  @apply p-[15px] flex flex-col gap-[20px] bg-pure-white/5 rounded-3xl
}

.level__selected {
  @apply flex items-center gap-[5px]
}

.level__selected h3 {
  @apply text-base
}

.level__header {
  @apply flex items-center justify-between border-b border-pure-white/15
}

.level__header-title h2 {
  @apply text-[36px] font-bold font-secondary
}

.level__header-amount h2 {
  @apply text-xl font-bold font-secondary
}

.level__body {
  @apply flex flex-col gap-[10px] border-b border-pure-white/15 pb-[15px]
}

.level__body-item {
  @apply flex justify-between
}

.level__body-item__title {
  @apply text-pure-white/65
}

.level__footer button {
  @apply flex py-[15px] px-[20px] bg-pure-white/5 w-full rounded-3xl
}

button.take {
  @apply justify-between
}

.take__title {
  @apply inline-flex gap-[5px] items-center
}

.upgrade {
  @apply justify-center
}

.upgrade__title {
  @apply flex gap-[5px]
}

</style>