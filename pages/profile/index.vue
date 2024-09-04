<script setup lang="ts">
definePageMeta({
  layout: 'no-top-navigation-bar'
})

import {useProfile} from "~/stores/profile.js";

const store = useProfile()

const profile = computed(() => store.profile)

onMounted(() => {
  store.getProfileInfo()
})

</script>

<template>


  <div class="profile">
    <page-components-profile-the-top
    :profile="profile"
    />
    <page-components-profile-the-links/>
  </div>

</template>

<style scoped lang="scss">
.profile {
  @apply pt-[50px] flex flex-col gap-[30px] pb-[150px]
}

</style>