<script setup lang="ts">
const props = defineProps(['plan', 'currentPlan'])
</script>

<template>
  <div class="level">
    <div class="level__picked" v-if="plan.is_active">
      <PhosphorIconSealCheck  :size="24" color="#fff"/>
      <h3>
        Ваш пакет
      </h3>
    </div>
    <div class="level__body">
      <div class="level__body-title">
        <h2>
          {{ plan.name }}
        </h2>
      </div>
      <div class="level__body-icon">
        <PhosphorIconSketchLogo :size="56" weight="duotone" color="#ffd14a"/>
      </div>
    </div>

    <page-components-grab-the-membership-level-information
        :price="plan.price"
        :refer="plan.referrals"
        :currentPlan="currentPlan"
    />





  </div>
</template>

<style scoped lang="scss">
.level {
  @include transitions();
  @apply py-4 px-4 rounded-3xl bg-pure-white/5 flex flex-col gap-[10px]
}

.level__body {
  @apply flex justify-between items-center
}

.level__body .level__body-title h2 {
  @apply text-5xl font-secondary font-black
}

.level__actions {
  @apply flex gap-[10px]
}

.level__actions button {
  @include transitions();
  @apply inline-flex items-center justify-center p-4 w-full gap-[5px] bg-pure-white/5 rounded-[30px]  active:scale-95 relative
}

.level__actions button:last-child {
  background: radial-gradient(48% 70.88% at 52% 50%, #9747FF 0%, #43019E 100%);
}

.level__container {
  @apply flex flex-col gap-[15px]
}
.level__picked {
  @apply flex w-full items-center justify-center gap-[5px]
}
</style>