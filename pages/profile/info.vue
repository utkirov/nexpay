<script setup lang="ts">
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})

import {useProfile} from "~/stores/profile.js";

const store = useProfile()

const profile = computed(() => store.profile)

onMounted(() => {
  store.getProfileInfo()
})

const title = ref(`NexPAY - Personal information`)

useHead({
  title,
})
</script>

<template>
  <section class="personal-info">
    <navigation-the-top-title :title="$t('profile.info.title')"/>

    <div class="personal-info__contaner">

      <div class="info">
        <div class="user-avatar">
          <img src="/user.png">
        </div>
        <div class="info__item">
          <div class="info__item-title">
            <PhosphorIconUserCircle :size="24" color="#fff"/>
            <h2>
              {{ $t('profile.info.username') }}
            </h2>
          </div>
          <div class="info__item-value">
            <h2>
              {{ profile.phone }}
            </h2>
            <!--            <button>-->
            <!--              <PhosphorIconPencil :size="24" color="#fff"/>-->
            <!--            </button>-->
          </div>
        </div>
        <div class="info__item">
          <div class="info__item-title">
            <PhosphorIconIdentificationBadge :size="24" color="#fff"/>
            <h2>
              ID
            </h2>
          </div>
          <div class="info__item-value">
            <h2>
              {{ profile.user_id }}
            </h2>
          </div>
        </div>
        <div class="info__item">
          <div class="info__item-title">
            <PhosphorIconPhone :size="24" color="#fff"/>
            <h2>
              {{ $t('profile.info.phone') }}
            </h2>
          </div>
          <div class="info__item-value">
            <h2>
              {{ profile.phone }}
            </h2>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.personal-info {
  @apply mt-[124px]
}

.user-avatar {
  @apply flex justify-center mb-[20px]
}

.user-avatar img {
  @apply w-[80px] h-[80px]
}

.personal-info .info {
  @include border-glass(0, 1);
  @apply flex flex-col p-[20px] bg-pure-white/5 rounded-[25px] gap-[30px]
}

.personal-info .info .info__item {
  @apply flex w-full justify-between
}

.info__item-title, .info__item-value {
  @apply flex gap-[5px]
}

.info__item-value {
  @apply text-pure-white/65
}

.info__item-value svg {
  @apply fill-pure-white/65
}
</style>