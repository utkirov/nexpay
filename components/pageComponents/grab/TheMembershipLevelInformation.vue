<script setup lang="ts">
const props = defineProps(['currentPlan', 'refer', 'price','percent'])
</script>

<template>
  <div class="level-information">
    <div class="levels__info">
      <utils-the-container-title :title="$t('grabbing.membership.upgrading.title')"/>
      <div class="level-information__actions">
        <div v-wave class="level-information__actions__item">
          <div class="level-information__actions__item-icon">
            <PhosphorIconMoneyWavy :size="36" color="#fff"/>
          </div>
          <div class="level-information__actions__item-title">
            <h3>
              {{ $t('grabbing.membership.upgrading.balance') }}
            </h3>
          </div>

          <div class="level-information__actions__item-value">
            <h3>
              {{ props.currentPlan.balance }}
            </h3>
            <h3>
              /
            </h3>
            <h3 v-if="props.price">
              {{ props.price }}
            </h3>
            <h3 v-if="!props.price">
              {{ props.currentPlan.price }}
            </h3>
          </div>
        </div>

        <div v-wave class="level-information__actions__item">
          <div class="level-information__actions__item-icon">
            <PhosphorIconLink :size="36" color="#fff"/>
          </div>
          <div class="level-information__actions__item-title">
            <h3>
              {{ $t('grabbing.membership.upgrading.invitation') }}
            </h3>
          </div>

          <div class="level-information__actions__item-value">
            <h3>
              {{ props.currentPlan.referals }}
            </h3>
            <h3>
              /
            </h3>
            <h3 v-if="props.refer">
              {{ props.refer }}
            </h3>
            <h3 v-if="!props.refer">
              {{ props.currentPlan.referals }}
            </h3>
          </div>
        </div>
        <div v-wave class="level-information__actions__item">
          <div class="level-information__actions__item-icon">
            <PhosphorIconSealPercent :size="36" color="#fff"/>
          </div>
          <div class="level-information__actions__item-title">
            <h3>
              {{ $t('grabbing.membership.upgrading.percent') }}
            </h3>
          </div>

          <div class="level-information__actions__item-value">
            <h3>
              {{ props.currentPlan.percent }}
            </h3>
            <h3>
              /
            </h3>
            <h3 v-if="props.refer">
              {{ props.percent }}
            </h3>
            <h3 v-if="!props.refer">
              {{ props.currentPlan.percent }}
            </h3>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.level-information {
  @apply flex flex-col gap-[20px]
}

.levels__info svg {
  @apply fill-secondary-color
}

.level-information__actions__item-icon {
  @apply mb-[5px]
}

.level-information__actions {
  @apply flex gap-[10px]
}

.level-information__actions__item {
  @include transitions();
  @apply p-2 w-full flex flex-col items-center justify-center bg-pure-white/5 rounded-[30px] hover:bg-pure-white/10 hover:cursor-pointer active:bg-pure-white/5
}

.level-information__actions__item-title h3 {
  @apply text-center text-base font-bold text-pure-white
}

.level-information__actions__item-value {
  @apply flex gap-[5px]
}

.level-information__actions__item-value h3 {
  @apply text-center text-base font-secondary text-pure-white/65
}

.level-information__actions__item-value h3:first-child {
  @apply text-pure-white
}
</style>