<script setup>
const props = defineProps({
  checked: Boolean,
});
</script>

<template>
  <div class="checkbox" :class="{'checked': props.checked}">
    <div class="checkbox__container">
      <div class="checkbox__checked" v-if="props.checked">
        <PhosphorIconCheck :size="14" color="#fff"/>
      </div>
    </div>
    <div class="checkbox__title">
      <h3>
        Remember password
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  @apply flex  items-center gap-[5px]
}

.checkbox:hover {
  .checkbox__title h3 {
    @apply text-pure-white
  }

  .checkbox__container {
    @apply bg-pure-white
  }
}

.checkbox .checkbox__title h3 {
  @include transitions();
  @apply text-pure-white/65
}

.checkbox .checkbox__container {
  @include transitions();
  @apply w-[18px] h-[18px] bg-pure-white/65 inline-flex items-center  justify-center rounded
}

.checkbox.checked .checkbox__container {
  @apply bg-secondary-color
}

.checkbox.checked svg {
  @apply fill-primary-color
}

</style>