<template>
  <div class="settings">
    <navigation-the-top-title :title="$t('settings.title')" link="/profile"/>

    <div class="language">
      <button v-wave @click="setLocalLang(item.code)" v-for="item in langs" :key="item.id" class="language__item">
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

const {locale, setLocale} = useI18n()
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})

const setLocalLang = function (langCode) {
  const lang = useCookie('lang');
  setLocale(langCode)
  lang.value = langCode
}

const langs = ref([
  {
    id: 1,
    code: 'en',
    src: '/lang/en.svg',
    name: "English"
  },
  {
    id: 2,
    code: 'ru',
    src: '/lang/ru.svg',
    name: "Русский"
  },
  {
    id: 3,
    code: 'tr',
    src: '/lang/tr.svg',
    name: "Turkey"
  },
  {
    id: 4,
    code: 'kz',
    src: '/lang/kz.svg',
    name: "Қазақча"
  },
  {
    id: 5,
    code: 'uz',
    src: '/lang/uz.svg',
    name: "O'zbekcha"
  },


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