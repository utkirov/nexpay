<script setup lang="ts">
import { useToast } from "primevue/usetoast";

const toast = useToast();

const show = () => {
  toast.add({ severity: 'info', summary: 'Copy!', detail: 'Copied to clipboard', life: 3000 });
};
</script>

<template>
  <Toast />
  <div class="profile-top">
    <div class="profile-top__avatar">
      <img src="/user.png">
      <h1>
        998336666444
      </h1>
    </div>

    <div class="profile-top__actions">
      <div class="profile-action">
        <div class="profile-action-title">
          <h2>
            User ID:
          </h2>
        </div>
        <div class="profile-action-variable">
          <h2>
            1150256
          </h2>
        </div>
      </div>
      <div class="profile-action">
        <div class="profile-action-title">
          <h2>
            Invitation code:
          </h2>
        </div>
        <div class="profile-action-variable">
          <h2>
            34QYL5
          </h2>
          <button @click="show()">
            <PhosphorIconCopy :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.profile-top {
  @apply flex flex-col gap-[10px]
}

.profile-top__avatar {
  @apply flex w-full flex-col justify-center items-center gap-[5px]
}

.profile-top__avatar img {
  @apply w-[80px] h-[80px]
}

.profile-top__avatar h1 {
  @apply text-lg font-bold font-secondary
}

.profile-top__actions {
  @apply flex justify-between items-center
}

.profile-action {
  @apply flex gap-[5px] items-center
}

.profile-action h2 {
  @apply text-base
}

.profile-action-title h2 {
  @apply text-pure-white/65 font-normal
}

.profile-action-variable {
  @apply flex gap-[5px]
}

.profile-action-variable h2 {
  @apply font-secondary
}

</style>