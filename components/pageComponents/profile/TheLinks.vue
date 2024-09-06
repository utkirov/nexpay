<script setup lang="ts">
import { useUserAuth } from "@/stores/auth";

const store = useUserAuth();

const logOut = function () {
  store.logOut();
};
</script>

<template>
  <div class="links">
    <div class="links-container">
      <nuxt-link :to="localeLocation('/profile/info')" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconUserCircle :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
        <div class="link__title">
          <h2>
            {{ $t("profile.personal") }}
          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </nuxt-link>
      <nuxt-link :to="localeLocation('/team')" class="link" v-wave>
        <div class="link__icon">
          <button>
            <PhosphorIconMailbox :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
        <div class="link__title">
          <h2>
            {{ $t("profile.invitation") }}
          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="links-container">
    
      <nuxt-link :to="localeLocation('/recharge')" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconHandWithdraw
              :size="24"
              color="rgba(255,255,255,0.65)"
            />
          </button>
        </div>
        <div class="link__title">
          <h2>
            {{ $t("profile.recharge") }}
          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </nuxt-link>
      <nuxt-link :to="localeLocation('/withdraw')" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconHandDeposit
              :size="24"
              color="rgba(255,255,255,0.65)"
            />
          </button>
        </div>
        <div class="link__title">
          <h2>
            {{ $t("profile.withdraw") }}
          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </nuxt-link>
      <nuxt-link :to="localeLocation('/transactions')" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconClockUser :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
        <div class="link__title">
          <h2>
            {{ $t("transactions.title") }}
          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </nuxt-link>
    
    </div>
    <div class="links-container">
      <nuxt-link
        to="https://t.me/NEXPAY_support"
        target="_blank"
        v-wave
        class="link"
      >
        <div class="link__icon">
          <button>
            <PhosphorIconHeadset :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
        <div class="link__title">
          <h2>
            {{ $t("profile.contact") }}
          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </nuxt-link>
      <nuxt-link :to="localeLocation('/profile/settings')" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconGearSix :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
        <div class="link__title">
          <h2>
            {{ $t("profile.settings") }}
          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </nuxt-link>
      <!--      <nuxt-link :to="localeLocation('')"/profile/terms" v-wave class="link">-->
      <!--        <div class="link__icon">-->
      <!--          <button>-->
      <!--            <PhosphorIconBookOpenText :size="24" color="rgba(255,255,255,0.65)"/>-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="link__title">-->
      <!--          <h2>-->
      <!--            {{ $t('profile.terms') }}-->

      <!--          </h2>-->
      <!--        </div>-->
      <!--        <div class="link__last-icon">-->
      <!--          <button>-->
      <!--            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)"/>-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </nuxt-link>-->
      <nuxt-link :to="localeLocation('/profile/faq')" v-wave class="link">
        <div class="link__icon">
          <button>
            <PhosphorIconLifebuoy :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
        <div class="link__title">
          <h2>
            {{ $t("profile.help") }}
          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </nuxt-link>
      <div v-wave class="link danger" @click="logOut()">
        <div class="link__icon">
          <button>
            <PhosphorIconSignOut :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
        <div class="link__title">
          <h2>
            {{ $t("profile.logout") }}
          </h2>
        </div>
        <div class="link__last-icon">
          <button>
            <PhosphorIconCaretRight :size="24" color="rgba(255,255,255,0.65)" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.link.danger {
  @include border-glass(0, 0);
  @apply text-danger bg-transparent hover:bg-danger/15 mt-[15px];
}

.link.danger svg {
  @apply fill-danger;
}

.links {
  @apply flex flex-col gap-[30px];
}

.link__icon,
.link__last-icon {
  @apply inline-flex items-center;
}

.link {
  @include transitions;
  @include border-glass(0, 1);
  @apply relative flex gap-[10px] px-[20px] py-[15px] bg-pure-white/5 rounded-2xl items-center justify-between hover:bg-pure-white/15 hover:cursor-pointer;
}

.links-container {
  @apply flex flex-col  gap-[10px];
}

.link__title {
  @apply w-full;
}

.link__title р2 {
  @apply text-lg;
}
</style>
