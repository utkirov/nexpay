<template>
  <div class="level">
    <div class="level__selected" v-if="props.plan.is_active">
      <PhosphorIconSealCheck :size="24" color="#fff"/>
      <h3>
        {{ $t('stacking.level.yourLevel') }}
      </h3>
    </div>

    <div class="level__header">
      <div class="level__header-title">
        <h2>
          {{ props.plan.name }}
        </h2>
      </div>
      <div class="level__header-amount">
        <h2>
          {{ props.plan.price }}$
        </h2>
      </div>
    </div>

    <div class="level__body">
      <div class="level__body-item">
        <div class="level__body-item__title">
          {{ $t('stacking.level.financing') }}
        </div>
        <div class="level__body-item__value">
          {{ props.plan.days }}
        </div>
      </div>

      <div class="level__body-item" v-if="props.plan.is_active">
        <div class="level__body-item__title">
          {{ $t('stacking.level.remaining') }}
        </div>
        <div class="level__body-item__value">
          {{ props.plan.expire_at }}
        </div>
      </div>

      <div class="level__body-item">
        <div class="level__body-item__title">
          {{ $t('stacking.level.income') }}
        </div>
        <div class="level__body-item__value">
          {{ props.plan.earn }}$
        </div>
      </div>

      <div class="level__body-item">
        <div class="level__body-item__title">
          {{ $t('stacking.level.potential') }}
        </div>
        <div class="level__body-item__value">
          {{ props.plan.total_earn }}
        </div>
      </div>
    </div>

    <div class="level__footer">
      <button @click="claim(props.plan.id)" class="take" v-if="props.plan.is_active"
              :disabled="!props.plan.claim_active">
                <span class="take__title" v-if="props.plan.claim_active">
                        <PhosphorIconMagnet :size="24" color="#fff"/>
                        {{ $t('stacking.level.profit') }}
                </span>
        <span class="take__value" v-if="props.plan.claim_active">
                    {{ props.plan.earn }}$
                </span>
        <span class="flex items-center gap-[5px] justify-center w-full" v-if="!props.plan.claim_active">
          <PhosphorIconInfo :size="24" color="#fff"/>
           {{ $t('stacking.level.alreadyReceived') }}
        </span>
      </button>

      <button class="upgrade" @click="buyPlan(props.plan.id)" v-if="!props.plan.is_active">
                <span class="upgrade__title">
                       <PhosphorIconMagnet :size="24" color="#fff"/>
                        {{ $t('stacking.level.upgradePlan') }}
                </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['plan'])
const emit = defineEmits(['showToast', 'claim'])

const buyPlan = function (id: any) {
  emit('showToast', id)
}

const claim = function (id: any) {
  emit('claim', id)
}
</script>

<style scoped lang="scss">
.upgrade {

}

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


.take__title {
  @apply inline-flex gap-[5px] items-center
}

.upgrade {
  @apply justify-center
}

button {
  @include transitions()
}

button.take:not(button.take:disabled) {
  @apply justify-between active:scale-95
}

.upgrade__title {
  @apply flex gap-[5px]
}

button.take:disabled {
  @apply bg-pure-white/5
}

button.take:not(button.take:disabled), button.upgrade:not(button.upgrade:disabled) {
  background: radial-gradient(48% 70.88% at 52% 50%, #9747FF 0%, #43019E 100%);
  box-shadow: 0 0 50px #4503A0;
  animation-name: button-shadow;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes button-shadow {
  0% {
    box-shadow: 0 0 15px #721ee5;
    transform: scale(1)
  }
  50% {
    box-shadow: 0 0 35px #4503A0;
    transform: scale(0.95)
  }
  100% {
    box-shadow: 0 0 15px #721ee5;
    transform: scale(1)
  }
}

</style>