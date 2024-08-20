<script setup lang="ts">

</script>

<template>
  <section class="news">
    <utils-the-container-title title="Новости о NEXPAY"/>

    <div class="news__container">
      <PhosphorIconPlayCircle :size="48" weight="duotone" color="#fff"/>
    </div>


  </section>
</template>

<style lang="scss">

.news__container {
  @include border-glass(0,1);
  @include transitions;
  @apply bg-pure-white/5 p-4 rounded-2xl h-[200px] flex items-center justify-center hover:bg-pure-white/15 hover:cursor-pointer
}

</style>