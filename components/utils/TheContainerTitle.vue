<script setup lang="ts">
const props = defineProps(['title', 'second'])
</script>

<template>
  <div class="container-title">
    <h2>
      {{ props.title }}
    </h2>
    <h4 v-if="second">
      <PhosphorIconInfo :size="18" color="#B0B0B0"/>
      {{ second }}
    </h4>
  </div>
</template>

<style lang="scss" scoped>
.container-title {
  margin-bottom: 15px;

  h2 {
    @apply text-lg font-bold leading-[24px] mb-[5px]
  }

  h4 {
    @apply inline-flex gap-[5px] items-center text-base text-pure-white/65 leading-[24px]
  }
}
</style>