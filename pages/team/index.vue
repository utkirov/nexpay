<template>
  <div class="team">
    <navigation-the-top-title title="Team"/>
    <page-components-team-balance
        :balance="balance"

    />
    <div class="team__actions">
      <nuxt-link v-wave to="/recharge">
        <PhosphorIconHandDeposit :size="32" color="rgba(255,255,255,0.65)"/>
        Recharge
      </nuxt-link>

      <nuxt-link v-wave to="/withdraw">
        <PhosphorIconHandWithdraw :size="32" color="rgba(255,255,255,0.65)"/>
        Withdraw
      </nuxt-link>
    </div>

    <page-components-team-invite
        :total="referrals.total"
        @share="startShare"
    />

    <page-components-team-steps/>
  </div>
</template>

<script setup>
import { useShare } from '@vueuse/core'

const { share, isSupported } = useShare()

function startShare() {
  share({
    title: 'Hello',
    text: 'Hello my friend!',
    url: location.href,
  })
}
import {useTeam} from "~/stores/team.js";

const store = useTeam()
onMounted(() => {
  store.getBalance()
  store.getReferrals()
})
const balance = computed(() => store.balance)
const referrals = computed(() => store.referrals)
</script>

<style scoped lang="scss">
.team {
  @apply my-[124px] px-[1rem]
}

.balance {
  background: radial-gradient(48% 70.88% at 52% 50%, rgba(151, 71, 255, 0.49) 0%, rgba(67, 1, 158, 0.49) 100%);
}

.balance {
  @apply p-[20px] rounded-3xl gap-y-[30px]
}

.balance__title h3 {
  @apply text-lg text-pure-white/65
}

.balance__value h2 {
  @apply font-secondary font-bold text-[24px]
}

.balance__action svg {
  @include transitions();
  @apply fill-pure-white/65 hover:fill-pure-white
}

.team__actions {
  @apply mt-[15px] flex gap-[10px]
}

.team__actions a {
  @apply inline-flex w-full px-[10px] py-[12px] bg-pure-white/5 rounded-3xl justify-center gap-[5px] items-center text-pure-white/65
}

.team__actions svg {
  @apply fill-pure-white/65
}
</style>