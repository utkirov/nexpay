<script setup lang="ts">
import {useGrabbing} from "@/stores/grab";

const store = useGrabbing()
const videoSrc = computed(() => store.videoSrc)
const videoId = ref('')
const newsOn = ref(false)
onMounted(() => {

})

const show = async function () {
  console.log(videoSrc)
  console.log(videoId.value)
  await store.getMainVideo()

  videoId.value = videoSrc.value
  newsOn.value = true




}

</script>

<template>
  <Dialog v-model:visible="newsOn" modal header="Watch ad" :style="{ width: '100%', 'max-width': '500px'
  }">
    <ScriptYouTubePlayer ref="video" :video-id="videoId">
    </ScriptYouTubePlayer>
    <button v-wave @click="newsOn=false" class="p-4 bg-pure-white/5 flex w-full rounded-xl justify-center mt-4">
      Close
    </button>
  </Dialog>
  <section class="news">
    <utils-the-container-title :title="$t('main.news.title')"/>

    <div class="news__container" @click="show">
      <PhosphorIconPlayCircle :size="48" weight="duotone" color="#fff"/>
    </div>


  </section>
</template>

<style lang="scss">

.news__container {
  @include border-glass(0, 1);
  @include transitions;
  @apply p-4 bg-center bg-cover rounded-2xl h-[200px] flex items-center justify-center hover:bg-pure-white/15 hover:cursor-pointer
}

.news__container {
  background-image: url('/preview.jpg');

}

</style>