<template>
  <div class="team">
    <Toast />
    <navigation-the-top-title :title="$t('teams.title')" />
    <page-components-team-balance :balance="balance" />
    <div class="team__actions">
      <nuxt-link v-wave :to="localeLocation('/recharge')">
        <PhosphorIconHandWithdraw :size="32" color="rgba(255,255,255,0.65)" />
        {{ $t("recharge.title") }}
      </nuxt-link>

      <nuxt-link v-wave :to="localeLocation('/withdraw')">
        <PhosphorIconHandDeposit :size="32" color="rgba(255,255,255,0.65)" />
        {{ $t("withdraw.title") }}
      </nuxt-link>
    </div>

    <page-components-team-invite
      :total="referrals.total"
      :refer="profile"
      @share="copyReferral"
    />

    <page-components-team-steps />
  </div>
</template>

<script setup>
import { useTeam } from "~/stores/team.js";
import { useProfile } from "~/stores/profile.js";
const { text, isSupported, copy } = useClipboard();
import { useToast } from "primevue/usetoast";
const toast = useToast();

const { t } = useI18n();

const copyReferral = function () {
  copy(
    `Website: https://nexpay.top, Your referral code: ${profile.value.invite_code}`
  );
  toast.add({
    severity: "info",
    summary: "Copy!",
    detail: `${t("misc.copy")}`,
    life: 3000,
  });
};

definePageMeta({
  layout: "no-top-navigation-bar",
});

const storeProfile = useProfile();
const store = useTeam();
const balance = computed(() => store.balance);
const referrals = computed(() => store.referrals);
const profile = computed(() => storeProfile.profile);
onMounted(() => {
  store.getBalance();
  store.getReferrals();
  storeProfile.getProfileInfo();
});

const title = ref(`NexPAY - Teams`);

useHead({
  title,
});
</script>

<style scoped lang="scss">
.team {
  @apply my-[124px];
}

.balance {
  background: radial-gradient(
    48% 70.88% at 52% 50%,
    rgba(151, 71, 255, 0.49) 0%,
    rgba(67, 1, 158, 0.49) 100%
  );
}

.balance {
  @apply p-[20px] rounded-3xl gap-y-[30px];
}

.balance__title h3 {
  @apply text-lg text-pure-white/65;
}

.balance__value h2 {
  @apply font-secondary font-bold text-[24px];
}

.balance__action svg {
  @include transitions();
  @apply fill-pure-white/65 hover:fill-pure-white;
}

.team__actions {
  @apply mt-[15px] flex gap-[10px];
}

.team__actions a {
  @apply inline-flex w-full px-[10px] py-[12px] bg-pure-white/5 rounded-3xl justify-center gap-[5px] items-center text-pure-white/65;
}

.team__actions svg {
  @apply fill-pure-white/65;
}
</style>
