<script setup lang="ts">
const info = ref(false)
const upgrade = ref(false)

</script>

<template>
  <div class="membership">
    <Dialog v-model:visible="info" header="Условия"
            :style="{ width: '100%', 'max-width': '500px', 'max-height': '80vh', 'overflow-y': 'scroll' }"
            position="bottom"
            :draggable="false">
      <page-components-grab-the-membership-level-information/>
    </Dialog>
    <Dialog v-model:visible="upgrade" header="Information about levels"
            :style="{ width: '100%', 'max-width': '500px', 'max-height': '80vh', 'overflow-y': 'scroll' }"
            position="bottom"
            :draggable="false">
      <div class="level__container">
        <div class="level">
          <div class="level__body">
            <div class="level__body-title">
              <h2>
                VIP I
              </h2>
            </div>
            <div class="level__body-icon">
              <PhosphorIconSketchLogo :size="94" weight="duotone" color="#ffd14a"/>
            </div>
          </div>


          <div class="level__actions">
            <button class="level__actions-item" v-wave @click="info=true">
              <PhosphorIconInfo :size="24" color="#fff"/>
              Подробнее
            </button>

            <button class="level__actions-item" v-wave>
              <PhosphorIconTrendUp :size="24" color="#fff"/>
              Улучшить
            </button>
          </div>
        </div>
        <div class="level">
          <div class="level__body">
            <div class="level__body-title">
              <h2>
                VIP II
              </h2>
            </div>
            <div class="level__body-icon">
              <PhosphorIconSketchLogo :size="94" weight="duotone" color="#ffd14a"/>
            </div>
          </div>


          <div class="level__actions">
            <button class="level__actions-item" v-wave @click="info=true">
              <PhosphorIconInfo :size="24" color="#fff"/>
              Подробнее
            </button>

            <button class="level__actions-item" v-wave>
              <PhosphorIconTrendUp :size="24" color="#fff"/>
              Улучшить
            </button>
          </div>
        </div>
        <div class="level">
          <div class="level__body">
            <div class="level__body-title">
              <h2>
                VIP III
              </h2>
            </div>
            <div class="level__body-icon">
              <PhosphorIconSketchLogo :size="94" weight="duotone" color="#ffd14a"/>
            </div>
          </div>


          <div class="level__actions">
            <button class="level__actions-item" v-wave @click="info=true">
              <PhosphorIconInfo :size="24" color="#fff"/>
              Подробнее
            </button>

            <button class="level__actions-item" v-wave>
              <PhosphorIconTrendUp :size="24" color="#fff"/>
              Улучшить
            </button>
          </div>
        </div>
        <div class="level">
          <div class="level__body">
            <div class="level__body-title">
              <h2>
                VIP IV
              </h2>
            </div>
            <div class="level__body-icon">
              <PhosphorIconSketchLogo :size="94" weight="duotone" color="#ffd14a"/>
            </div>
          </div>


          <div class="level__actions">
            <button class="level__actions-item" v-wave @click="info=true">
              <PhosphorIconInfo :size="24" color="#fff"/>
              Подробнее
            </button>

            <button class="level__actions-item" v-wave>
              <PhosphorIconTrendUp :size="24" color="#fff"/>
              Улучшить
            </button>
          </div>
        </div>
      </div>
    </Dialog>
    <utils-the-container-title title="Ваш уровень членство"/>
    <div class="level">
      <div class="level__body">
        <div class="level__body-title">
          <h2>
            VIP IV
          </h2>
        </div>
        <div class="level__body-icon">
          <PhosphorIconSketchLogo :size="94" weight="duotone" color="#ffd14a"/>
        </div>
      </div>


      <div class="level__actions">
        <button class="level__actions-item" v-wave @click="info=true">
          <PhosphorIconInfo :size="24" color="#fff"/>
          Подробнее
        </button>

        <button class="level__actions-item" v-wave @click="upgrade=true">
          <PhosphorIconTrendUp :size="24" color="#fff"/>
          Улучшить
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

.level {
  @include transitions();
  @apply py-4 px-8 rounded-3xl bg-pure-white/5 flex flex-col gap-[10px]
}

.level__body {
  @apply flex justify-between items-center
}

.level__body .level__body-title h2 {
  @apply text-6xl font-secondary font-black
}

.level__actions {
  @apply flex gap-[10px]
}

.level__actions button {
  @include transitions();
  @apply inline-flex items-center justify-center p-4 w-full gap-[5px] bg-pure-white/5 rounded-[30px]  active:scale-95 relative
}

.level__actions button:last-child {
  background: radial-gradient(48% 70.88% at 52% 50%, #9747FF 0%, #43019E 100%);
}

.level__container {
  @apply flex flex-col gap-[15px]
}
</style>