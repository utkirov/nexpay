<script setup lang="ts">

</script>

<template>


  <section class="links">
    <utils-the-container-title :title="$t('main.links.title')"/>
    <div class="links__container inrow2">
      <nuxt-link v-wave :to="localeLocation('/withdraw')" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconHandDeposit :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            {{ $t('main.links.withdraw') }}
          </h4>
        </div>

      </nuxt-link>
      <nuxt-link v-wave :to="localeLocation('/recharge')" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconHandWithdraw :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            {{ $t('main.links.deposit') }}
          </h4>
        </div>

      </nuxt-link>
      <nuxt-link v-wave :to="localeLocation('/stacking')" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconVault :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            {{ $t('main.links.stacking') }}
          </h4>
        </div>

      </nuxt-link>
      <nuxt-link v-wave :to="localeLocation('/profile/faq')" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconQuestion :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            {{ $t('main.links.help') }}
          </h4>
        </div>

      </nuxt-link>
      <nuxt-link v-wave :to="localeLocation('/team')" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconUsersThree :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            {{ $t('main.links.refer') }}
          </h4>
        </div>

      </nuxt-link>

      <nuxt-link v-wave target="_blank" to="https://t.me/NEXPAY_support" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconTelegramLogo :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            {{ $t('main.links.telegram') }}
          </h4>
        </div>
      </nuxt-link>
      <nuxt-link v-wave target="_blank" to="https://t.me/NEXPAY_support" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconInstagramLogo :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            {{ $t('main.links.instagram') }}
          </h4>
        </div>
      </nuxt-link>
      <nuxt-link v-wave target="_blank" to="https://t.me/NEXPAY_support" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconYoutubeLogo :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            {{ $t('main.links.youtube') }}
          </h4>
        </div>
      </nuxt-link>
    </div>


  </section>

</template>

<style scoped lang="scss">
.inrow2 svg {
  @apply fill-secondary-color
}

.links__container {
  @apply grid gap-[10px]
}

.links__container.inrow2 {
  @apply grid-cols-2 mb-[15px]
}

.links__container.inrow4 {
  @apply grid-cols-2
}

.links-item {
  @include transitions;
  @apply bg-pure-white/5 rounded-3xl flex flex-col items-center p-[15px] gap-[10px] hover:bg-pure-white/15 hover:cursor-pointer focus:bg-pure-white/20

}

.inrow2 .links-item .links-item-title h4 {
  @apply text-[14px]
}

.inrow4 .links-item .links-item-title h4 {
  @apply text-[14px]
}

</style>