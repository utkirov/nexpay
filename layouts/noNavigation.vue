<script setup lang="ts">
useHead({
  meta: [{
    name: 'theme-color',
    content: '#17153B'
  }]
})
</script>
<template>

  <div class="mobile-container">
    <slot>

    </slot>
  </div>

</template>

<style scoped>

.mobile-container {
  @apply mx-auto max-w-[500px] relative px-[16px]

}

</style>
<script setup lang="ts">
</script>