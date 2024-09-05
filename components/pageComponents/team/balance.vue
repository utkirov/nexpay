<script setup lang="ts">
const props = defineProps(['balance'])
</script>

<template>
  <section class="balance grid  grid-cols-2">
    <div class="balance__container">
      <div class="balance__title">
        <h3>
          Balance
          {{ $t('teams.balance.title') }}
        </h3>
      </div>
      <div class="balance__value">

        <h2>
          {{ props.balance.total_balance }}$
        </h2>
      </div>
    </div>

    <div class="balance__container">
      <div class="balance__title">
        <h3>
          {{ $t('teams.balance.total') }}
        </h3>
      </div>
      <div class="balance__value">

        <h2>
          {{ props.balance.total_earn_from_referrals }}$
        </h2>
      </div>
    </div>

    <div class="balance__container">
      <div class="balance__title">
        <h3>
          {{ $t('teams.balance.passed') }}
        </h3>
      </div>
      <div class="balance__value">

        <h2>
          {{ props.balance.passed_days }}
        </h2>
      </div>
    </div>

    <div class="balance__container">
      <div class="balance__title">
        <h3>
          {{ $t('teams.balance.referrals') }}
        </h3>
      </div>
      <div class="balance__value">

        <h2>
          {{ props.balance.total_referrals }}
        </h2>
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">

</style>