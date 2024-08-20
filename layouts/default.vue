<template>

  <div class="mobile-container">
    <navigation-the-top/>

    <slot>

    </slot>
    <navigation-the-bottom/>
  </div>

</template>

<style>

.mobile-container {
  @apply mx-auto max-w-[500px] h-screen relative mb-[150px]

}

</style>
<script setup lang="ts">
</script>