<script setup lang="ts">

</script>

<template>


  <section class="links">
    <utils-the-container-title title="Быстрые ссылки"/>
    <div class="links__container inrow2">
      <nuxt-link v-wave to="/profile/withdraw" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconHandWithdraw :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            Вывести
          </h4>
        </div>

      </nuxt-link>
      <nuxt-link v-wave to="/profile/recharge" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconHandDeposit :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            Пополнить
          </h4>
        </div>

      </nuxt-link>
      <nuxt-link v-wave to="#!" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconVault :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            Стэйкинг
          </h4>
        </div>

      </nuxt-link>
      <nuxt-link v-wave to="profile/faq" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconQuestion :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            Помощь
          </h4>
        </div>

      </nuxt-link>
      <nuxt-link v-wave to="#!" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconUsersThree :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            Реферальная система
          </h4>
        </div>

      </nuxt-link>

      <nuxt-link v-wave to="#!" class="links-item">
        <div class="links-item-icon">
          <PhosphorIconTelegramLogo :size="48" weight="duotone" color="#fff"/>
        </div>
        <div class="links-item-title">
          <h4>
            Телеграм
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