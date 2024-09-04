<script setup lang="ts">
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})

import {useToast} from 'primevue/usetoast';
import {useStacking} from "@/stores/stacking";

onMounted(() => {
  store.getStacking();
});

const store = useStacking()
const toast = useToast();

const plans = computed(() => store.plans)
const code = computed(() => store.code)
const loading = computed(() => store.loading)

const buyPlan = async function (id: any) {
  await store.buyPlan(id)
}

const claim = async function (id: any) {
  await store.claim(id)

  if (code.value === 404) {
    toast.add({
      severity: 'warn',
      summary: 'Info',
      detail: 'Не найдено',
      life: 3000
    });
  } else if (code.value === 303) {
    toast.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Вы уже кликали',
      life: 3000
    });
  }
  else if (code.value === 200) {
    toast.add({
      severity: 'success',
      summary: 'Info',
      detail: 'Вы получили доход',
      life: 3000
    });
  }
}

const showToast = async function (id: any) {
  await buyPlan(id)
  if (code.value === 301) {
    toast.add({
      severity: 'warn',
      summary: 'Info',
      detail: 'Не достаточна баланса',
      life: 3000
    });
  } else if (code.value === 302) {
    toast.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Уже купил такой стейкинг пакет',
      life: 3000
    });
  }
else if (code.value === 200) {
    toast.add({
      severity: 'success',
      summary: 'Info',
      detail: 'Уже купил такой стейкинг пакет',
      life: 3000
    });
  }

}


</script>

<template>
  <navigation-the-top-title title="Stacking"/>

  <section class="stacking">
    <Toast/>

    <div class="stacking__body" v-if="plans">
      <page-components-stacking-levels
          v-for="plan in plans" :key="plan.id"
          :id="plan.id"
          :is_active=plan.is_active
          :name="plan.name"
          :days="plan.days"
          :expire_at=plan.expire_at
          :price="plan.price"
          :percent="plan.percent"
          :earn="plan.earn"
          :plan="plan"
          @show-toast="showToast"
          @claim="claim"

      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stacking {
  @apply mt-[124px] pb-[50px]
}

.stacking__body {
  @apply flex flex-col gap-[15px]
}
</style>