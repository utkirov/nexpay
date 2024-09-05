<script setup lang="ts">
const props = defineProps(['total'])
const emit = defineEmits(['share'])

const share = function () {
  emit('share')
}
</script>

<template>
  <section class="invite">
    <utils-the-container-title
        :title="$t('teams.invitation.title')"
    />

    <div class="invite__button">
      <button v-wave @click="share">
        {{ $t('teams.invitation.button') }}
      </button>
      <p>
        {{ $t('teams.invitation.info') }}

      </p>
    </div>

    <nuxt-link to="/team/referrals" class="success__invitation" v-wave>
      <div class="success__invitation-title">
        <PhosphorIconLink :size="24" color="#fff"/>
        {{ $t('teams.invitation.successfull') }}
      </div>
      <div class="success__invitation-value">
        {{ props.total }} {{ $t('teams.invitation.people') }}
        <PhosphorIconCaretRight :size="24" color="#fff"/>
      </div>

    </nuxt-link>
  </section>
</template>

<style scoped lang="scss">
.invite {
  @apply mt-[30px]
}

.invite__button button {
  background: linear-gradient(90deg, #FBBC04 0%, #FFF1CA 100%);
}

.invite__button button {
  @include transitions();
  @apply p-[15px] text-base leading-[24px] flex justify-center font-bold w-full rounded-3xl text-primary-color active:scale-95
}

.invite__button {
  @apply flex flex-col gap-[10px] text-pure-white/65 text-center
}

.success__invitation {
  @include transitions();
  @apply p-[20px] text-base leading-[24px] flex w-full bg-pure-white/5 rounded-3xl items-center justify-between active:scale-95 mt-[20px]
}

.success__invitation-title {
  @apply flex gap-[5px]
}

.success__invitation-value {
  @apply flex gap-[5px] font-bold
}
</style>