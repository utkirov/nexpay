<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
const {setLocale} = useI18n()
onMounted(() => {
  const lang = useCookie('lang')
  if (lang) {
    setLocale(lang.value)
  }
})

</script>

