<script setup lang="ts">
const props = defineProps(["profile"]);
import { useToast } from "primevue/usetoast";

const toast = useToast();

const { t } = useI18n();

const input = ref("");

const { text, isSupported, copy } = useClipboard();
const copyReferral = function () {
  copy(
    `Website: https://nexpay.top, Your referral code: ${props.profile.invite_code}`
  );
  toast.add({
    severity: "info",
    summary: "Copy!",
    detail: `${t("misc.copy")}`,
    life: 3000,
  });
};
</script>

<template>
  <Toast />
  <div class="profile-top">
    <div class="profile-top__avatar">
      <PhosphorIconUserCircle :size="100" color="#fff" />
      <h1>
        {{ props.profile.phone }}
      </h1>
    </div>

    <div class="profile-top__actions">
      <div class="profile-action">
        <div class="profile-action-title">
          <h2>
            {{ $t("profile.top.userid") }}
          </h2>
        </div>
        <div class="profile-action-variable">
          <h2>
            {{ props.profile.user_id }}
          </h2>
        </div>
      </div>
      <div class="profile-action">
        <div class="profile-action-title">
          <h2>
            {{ $t("profile.top.invitation") }}
          </h2>
        </div>
        <div class="profile-action-variable">
          <h2>
            {{ props.profile.invite_code }}
          </h2>
          <button @click="copyReferral()">
            <PhosphorIconCopy :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-top {
  @apply flex flex-col gap-[10px];
}

.profile-top__avatar {
  @apply flex w-full flex-col justify-center items-center gap-[5px];
}

.profile-top__avatar img {
  @apply w-[80px] h-[80px];
}

.profile-top__avatar h1 {
  @apply text-lg font-bold font-secondary;
}

.profile-top__actions {
  @apply flex flex-col items-center;
}

.profile-action {
  @apply flex gap-[5px] items-center;
}

.profile-action h2 {
  @apply text-base;
}

.profile-action-title h2 {
  @apply text-pure-white/65 font-normal;
}

.profile-action-variable {
  @apply flex gap-[5px];
}

.profile-action-variable h2 {
  @apply font-secondary;
}
</style>
