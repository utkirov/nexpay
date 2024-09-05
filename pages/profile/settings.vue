<template>
  <div class="settings">
    <navigation-the-top-title :title="$t('settings.title')"/>

    <div class="language">
      <button v-wave @click="setLocale(item.code)" v-for="item in langs" :key="item.id" class="language__item">
        <div class="language__item-body">
          <img :src="item.src" :alt="item.name"/>
          <h2>
            {{ item.name }}
          </h2>
        </div>
        <div class="language__item-cheked">

          <PhosphorIconCheck :size="24" color="#fff" v-if="locale===item.code"/>
        </div>


      </button>
    </div>


  </div>
</template>

<script setup>
const {locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})

const langs = ref([
  {
    id: 1,
    code: 'uz',
    src: '/lang/uz.svg',
    name: "O'zbekcha"
  },
  {
    id: 2,
    code: 'ru',
    src: '/lang/ru.svg',
    name: "Русский"
  },
  {
    id: 3,
    code: 'en',
    src: '/lang/en.svg',
    name: "English"
  },
  {
    id: 4,
    code: 'tr',
    src: '/lang/tr.svg',
    name: "Turkey"
  }
])
</script>

<style scoped>
.settings {
  @apply my-[124px]
}

.language {
  @apply flex flex-col gap-4
}

.language button {
  @apply flex w-full p-4 bg-pure-white/5 rounded-3xl items-center gap-4
}

.language button img {
  @apply w-[36px]
}
.language__item {
  @apply justify-between
}
.language__item-body {
  @apply flex gap-4 items-center
}

</style>