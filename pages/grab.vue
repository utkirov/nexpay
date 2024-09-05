<template>
  <div class="grab">
    <Toast/>
    <page-components-grab-the-membership-level
        :plans="plans"
        :currentPlan="currentPlan"
    />
    <page-components-grab-the-grabbing-button
        :count="currentPlan.earn_count"
        @earning="earning"
    />

  </div>
</template>

<script setup>
import {useToast} from "primevue/usetoast";

const title = ref(`NexPAY - Grabbing`)

useHead({
  title,
})


import {useEarning} from "@/stores/earning";

const store = useEarning()
const toast = useToast();
const plans = computed(() => store.plans)
const code = computed(() => store.code)
const currentPlan = computed(() => store.currentPlan)
const {t} = useI18n()
onMounted(() => {
  store.getCurrentPlan()
  store.getPlans()
})
const earning = async function () {

  await store.earn()
  if (code.value === 301) {
    toast.add({
      severity: 'warn',
      summary: 'Info',
      detail: `${t('grabbing.toasts.noBalance')}`,
      life: 3000
    });
  } else if (code.value === 303) {
    toast.add({
      severity: 'info',
      summary: 'Info',
      detail: `${t('grabbing.toasts.requirement')}`,
      life: 3000
    });
  } else if (code.value === 200) {
    toast.add({
      severity: 'success',
      summary: 'Info',
      detail: `${t('grabbing.toasts.completed')}`,
      life: 3000
    });


    await store.getPlans()
    await store.getCurrentPlan()
  }
}

</script>

<style lang="scss">
.grab {
  padding-top: 20px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 74px;
  height: calc(100vh - 156px);
  position: relative;
}

</style>
