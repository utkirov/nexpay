<script setup lang="ts">
import {useUserAuth} from "@/stores/auth";

const store = useUserAuth();

const logOut = function () {

  store.logOut()

}
</script>

<template>

  <div class="links">
    <div class="links-container">
      <nuxt-link to="/team" class="link" v-wave>
        <div class="link__icon">
          <button>
            <PhosphorIconMailbox :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
        <div class="link__title">
          <h2>
            Invitation Letter

          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="links-container">
      <nuxt-link to="/profile/info" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconUserCircle :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
        <div class="link__title">
          <h2>
            Personal information

          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </nuxt-link>
      <nuxt-link to="/recharge" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconHandDeposit :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
        <div class="link__title">
          <h2>
            Recharge

          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </nuxt-link>
      <nuxt-link to="/withdraw" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconHandWithdraw :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
        <div class="link__title">
          <h2>

            Withdrawal

          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </nuxt-link>
      <nuxt-link to="https://t.me/NEXPAY_support" target="_blank" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconHeadset :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
        <div class="link__title">
          <h2>
            Contact customer service

          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="links-container">
      <div v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconGearSix :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
        <div class="link__title">
          <h2>
            Settings

          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </div>
      <nuxt-link to="/profile/terms" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconBookOpenText :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
        <div class="link__title">
          <h2>
            Terms and Conditions

          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </nuxt-link>
      <nuxt-link to="/profile/faq" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconLifebuoy :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
        <div class="link__title">
          <h2>

            Help Center

          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </nuxt-link>
      <div v-wave class="link danger" @click="logOut()">
        <div class="link__icon">
          <button>
            <PhosphorIconBooks :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
        <div class="link__title">
          <h2>
            Log Out

          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>
          </button>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped lang="scss">
.link.danger {
  @include border-glass(0, 0);
  @apply text-danger bg-transparent hover:bg-danger/15 mt-[15px]
}

.link.danger svg {
  @apply fill-danger
}

.links {
  @apply flex flex-col gap-[30px]
}

.link__icon, .link__last-icon {
  @apply inline-flex items-center
}

.link {
  @include transitions;
  @include border-glass(0, 1);
  @apply relative flex gap-[10px] px-[20px] py-[15px] bg-pure-white/5 rounded-2xl items-center justify-between hover:bg-pure-white/15 hover:cursor-pointer

}

.links-container {
  @apply flex flex-col  gap-[10px]
}


.link__title {
  @apply w-full
}

.link__title р2 {
  @apply text-lg
}
</style>