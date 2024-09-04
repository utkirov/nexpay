<template>
  <div class="team">
    <navigation-the-top-title title="Successful invitation"/>

    <div class="referrals" v-if="referrals.total>0">
      <div class="referrals__title">
        <h2>
          ID
        </h2>
        <h2>
          Статус
        </h2>
        <h2>
          Дата регистрации
        </h2>
      </div>

      <div
          class="referrals__body"
          v-for="referral in referrals.list" :key="referral.id"
      >
        <h3>
          {{ referral.user_id }}
        </h3>
        <h3>
          <span v-if="referral.is_active">
            <PhosphorIconChecks :size="24" color="rgba(255,255,255,0.65)"/>
          </span>
          <span v-if="!referral.is_active">
            <PhosphorIconCheck :size="24" color="rgba(255,255,255,0.65)"/>
          </span>
        </h3>
        <h3>
          {{ referral.created_at }}
        </h3>
      </div>
    </div>

  </div>
</template>

<script setup>
import {useTeam} from "~/stores/team.js";

const store = useTeam()
onMounted(() => {
  store.getReferrals()
})
const referrals = computed(() => store.referrals)
</script>

<style scoped lang="scss">
.referrals {
  @apply flex w-full my-[124px] px-[1rem] flex flex-col gap-[15px]
}

.referrals__title, {
  @apply grid grid-cols-3 w-full font-bold
}

.referrals__body {
  @apply grid grid-cols-3 w-full items-center
}
</style>