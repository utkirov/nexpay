<script setup lang="ts">
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})

const store = useProfile()

const faq = computed(() => store.faq)

const indexAccardion = ref()

onMounted(async () => {
  await store.getFAQ()
})

</script>

<template>
  <section class="faq">
    <navigation-the-top-title title="FAQ"/>

    <div class="accardion" :class="{'active': indexAccardion===index}" v-for="(item, index) in faq" :key="item.id">
      <div class="accardion__title">
        <h2 v-if="faq">
          {{ item.name }}
          {{}}
        </h2>
        <PhosphorIconCaretUp v-if="indexAccardion===index" :size="24" color="#fff"/>
        <PhosphorIconCaretDown v-if="indexAccardion!==index" :size="24" color="#fff"/>
      </div>

      <div class="accardion__body">
        <p v-if="faq">
          {{ item.text }}
        </p>
      </div>

      <span class="accardion__button" @click="indexAccardion=index">

      </span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.faq {
  @apply mt-[124px] flex flex-col gap-[15px]
}

.accardion {
  @apply py-4 px-8 bg-pure-white/5  rounded-3xl relative
}

.accardion__title {
  @apply flex justify-between cursor-pointer
}

.accardion__title h2 {
  @apply text-lg font-bold
}

.accardion__body {
  @include transitions();
  @apply h-[0] opacity-0
}

.accardion.active .accardion__body {
  @apply h-auto opacity-100
}

.accardion__body {
  @apply text-pure-white/65
}

.accardion__button {
  @apply absolute left-0 top-0 w-full h-full inline-flex cursor-pointer
}
</style>