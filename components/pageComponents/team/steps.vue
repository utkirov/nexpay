<script setup lang="ts">

</script>

<template>

  <div class="steps">
    <utils-the-container-title :title="$t('teams.steps.title')"/>
    <div class="steps__container">
      <div class="steps__item">
        <div class="steps__item-img">
          <img src="/steps/1.png"/>
        </div>
        <div class="steps__item-title">
          <h2>
            {{ $t('teams.steps.first') }}
          </h2>
        </div>
      </div>

      <div class="steps__item">
        <div class="steps__item-img">
          <img src="/steps/2.png"/>

        </div>
        <div class="steps__item-title">
          <h2>
            {{ $t('teams.steps.second') }}
          </h2>
        </div>
      </div>

      <div class="steps__item">
        <div class="steps__item-img">
          <img src="/steps/3.png"/>
        </div>
        <div class="steps__item-title">
          <h2>
            {{ $t('teams.steps.third') }}
          </h2>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.steps {
  @apply mt-[20px]
}

.steps__container {
  @apply flex justify-between
}

.steps__item {
  @apply flex w-[33%] flex-col items-center gap-[10px]
}

.steps__item h2 {
  @apply text-center
}
</style>