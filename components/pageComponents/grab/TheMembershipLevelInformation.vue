<script setup lang="ts">

</script>

<template>
  <div class="level-information">
    <div class="levels__info">
      <utils-the-container-title title="Условия обновления VIPIII"/>
      <div class="level-information__actions">
        <div v-wave class="level-information__actions__item">
          <div class="level-information__actions__item-icon">
            <PhosphorIconSignIn :size="48" color="#fff"/>
          </div>
          <div class="level-information__actions__item-title">
            <h3>
              Баланс
            </h3>
          </div>

          <div class="level-information__actions__item-value">
            <h3>
              3
            </h3>
            <h3>
              /
            </h3>
            <h3>
              30$
            </h3>
          </div>
        </div>

        <div v-wave class="level-information__actions__item">
          <div class="level-information__actions__item-icon">
            <PhosphorIconSignIn :size="48" color="#fff"/>
          </div>
          <div class="level-information__actions__item-title">
            <h3>
              Приглашения
            </h3>
          </div>

          <div class="level-information__actions__item-value">
            <h3>
              3
            </h3>
            <h3>
              /
            </h3>
            <h3>
              30$
            </h3>
          </div>
        </div>

      </div>
    </div>
    <div class="levels__info">
      <utils-the-container-title title="Условия обновления VIPIII"/>
      <div class="level-information__actions">
        <div v-wave class="level-information__actions__item">
          <div class="level-information__actions__item-icon">
            <PhosphorIconSignIn :size="48" color="#fff"/>
          </div>
          <div class="level-information__actions__item-title">
            <h3>
              Баланс
            </h3>
          </div>

          <div class="level-information__actions__item-value">
            <h3>
              3
            </h3>
            <h3>
              /
            </h3>
            <h3>
              30$
            </h3>
          </div>
        </div>

        <div v-wave class="level-information__actions__item">
          <div class="level-information__actions__item-icon">
            <PhosphorIconSignIn :size="48" color="#fff"/>
          </div>
          <div class="level-information__actions__item-title">
            <h3>
              Приглашения
            </h3>
          </div>

          <div class="level-information__actions__item-value">
            <h3>
              3
            </h3>
            <h3>
              /
            </h3>
            <h3>
              30$
            </h3>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.level-information {
  @apply flex flex-col gap-[20px]
}

.levels__info svg {
  @apply fill-secondary-color
}


.level-information__actions {
  @apply flex gap-[10px]
}

.level-information__actions__item {
  @include transitions();
  @apply p-[15px] w-full flex flex-col gap-[10px] items-center justify-center bg-pure-white/5 rounded-[30px] hover:bg-pure-white/10 hover:cursor-pointer active:bg-pure-white/5
}

.level-information__actions__item-title h3 {
  @apply text-center text-lg text-pure-white
}

.level-information__actions__item-value {
  @apply flex gap-[5px]
}

.level-information__actions__item-value h3 {
  @apply text-center text-xl font-secondary text-pure-white/65
}

.level-information__actions__item-value h3:first-child {
  @apply text-pure-white
}
</style>