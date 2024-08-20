<template>
<h1>
  hello
</h1>
</template>


<script setup lang="ts">
const title = ref('NexPAY')
const description = ref('My App Description')

// This will be reactive when you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>
