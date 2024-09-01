<script setup lang="ts">
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})
</script>

<template>
  <section class="personal-info">
    <navigation-the-top-title title="Personal information"/>

    <div class="personal-info__contaner">

      <div class="info">
        <div class="user-avatar">
          <img src="/user.png">
        </div>
        <div class="info__item">
          <div class="info__item-title">
            <PhosphorIconUserCircle :size="24" color="#fff"/>
            <h2>
              Username
            </h2>
          </div>
          <div class="info__item-value">
            <h2>
              998335008200
            </h2>
            <button>
              <PhosphorIconPencil :size="24" color="#fff"/>
            </button>
          </div>
        </div>
        <div class="info__item">
          <div class="info__item-title">
            <PhosphorIconUserCircle :size="24" color="#fff"/>
            <h2>
              ID
            </h2>
          </div>
          <div class="info__item-value">
            <h2>
              1150256
            </h2>
          </div>
        </div>
        <div class="info__item">
          <div class="info__item-title">
            <PhosphorIconPhone :size="24" color="#fff"/>
            <h2>
              Mobile phone number
            </h2>
          </div>
          <div class="info__item-value">
            <h2>
              998335008200
            </h2>
            <button>
              <PhosphorIconPencil :size="24" color="#fff"/>
            </button>
          </div>
        </div>
        <div class="info__item">
          <div class="info__item-title">
            <PhosphorIconAt :size="24" color="#fff"/>
            <h2>
              Mail
            </h2>
          </div>
          <div class="info__item-value">
            <h2>
              Not bound
            </h2>
            <button>
              <PhosphorIconPencil :size="24" color="#fff"/>
            </button>
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