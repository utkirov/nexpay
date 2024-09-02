<script setup lang="ts">
definePageMeta({
  layout: 'no-top-navigation-bar'
})


</script>

<template>


  <div class="profile">
    <page-components-profile-the-top/>
    <page-components-profile-the-links/>
  </div>

</template>

<style scoped lang="scss">
.profile {
  @apply pt-[50px] flex flex-col gap-[30px] pb-[150px]
}

</style>