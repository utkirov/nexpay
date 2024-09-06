<script setup lang="ts">
const info = ref(false)
const upgrade = ref(false)
const props = defineProps(['plans', 'currentPlan'])


</script>

<template>
  <div class="membership">
    <Dialog v-model:visible="upgrade" :header="$t('grabbing.membership.infoAboutLevels')"
            :style="{ width: '100%', 'max-width': '500px', 'max-height': '80vh', 'overflow-y': 'scroll' }"
            position="bottom"
            :draggable="false">
      <div class="level__container">
        <page-components-grab-the-membership-level-upgrade
            v-for="plan in props.plans" :key="plan.id"
            :plan="plan"
            :currentPlan="currentPlan"
        />

      </div>
    </Dialog>
    <utils-the-container-title :title="$t('grabbing.membership.title')"/>
    <div class="level">
      <div class="level__body">
        <div class="level__body-title">
          <h2>
            {{ props.currentPlan.name }}
          </h2>
        </div>
        <div class="level__body-icon">
          <PhosphorIconSketchLogo :size="56" weight="duotone" color="#ffd14a"/>
        </div>
      </div>

      <page-components-grab-the-membership-level-information
          :currentPlan="props.currentPlan"
          :percent="props.currentPlan.percent"
      />


      <div class="level__actions">
        <button class="level__actions-item" v-wave @click="upgrade=true">
          <PhosphorIconTrendUp :size="24" color="#fff"/>
          {{ $t('grabbing.membership.upgrade') }}
        </button>
      </div>
    </div>

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
  @apply text-4xl font-secondary font-black
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
</style>