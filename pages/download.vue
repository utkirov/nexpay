<template>
  <div class="download">
    <navigation-the-top-title :title="$t('download.title')"/>
    <nuxt-link v-wave to="https://files.nexpay.top/uploads/nexpay.apk" target="_blank"  class="download__item">
      <div class="login__actions__item-icon">
        <PhosphorIconGooglePlayLogo :size="48" color="#fff"/>
      </div>
      <div class="login__actions__item-title">
        <h3>
          {{ $t('download.google') }}
        </h3>
      </div>
    </nuxt-link>

    <nuxt-link v-wave to="https://files.nexpay.top/uploads/nexpay.mobileconfig" target="_blank" class="download__item">
      <div class="login__actions__item-icon">
        <PhosphorIconAppStoreLogo :size="48" color="#fff"/>
      </div>
      <div class="login__actions__item-title">
        <h3>
          {{ $t('download.apple') }}
        </h3>
      </div>
    </nuxt-link>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})
</script>


<style scoped>
.download {
  @apply flex flex-col h-screen items-center justify-center gap-8
}

.download__item {
  @apply bg-pure-white/5 inline-flex p-6 rounded-3xl items-center  gap-4 text-lg w-full justify-center
}

</style>