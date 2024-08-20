<script setup lang="ts">
const props = defineProps(['title'])
</script>

<template>
  <div class="container-title">
    <h2>
      {{ props.title }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.container-title {
  margin-bottom: 15px;
  h2 {
    @apply text-lg font-bold leading-[24px]
  }
}
</style>