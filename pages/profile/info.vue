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
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.personal-info .info {
  @include border-glass(0,1);
  @apply flex flex-col p-4 bg-pure-white/5 rounded-2xl
}
.personal-info .info .info__item {
  @apply flex
}
</style>