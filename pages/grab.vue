<template>
  <div class="grab">
    <page-components-grab-the-grabbing-button/>
    <page-components-grab-the-membership-level/>
  </div>
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

<style lang="scss">
.grab {
  padding-top: 20px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 74px;
  height: calc(100vh - 156px);
  position: relative;
}

</style>
