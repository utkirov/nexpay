<script setup lang="ts">
import {useMainPage} from "@/stores/mainPage";

const store = useMainPage()
store.getMainPage()
const newsOn = ref(false)
</script>

<template>
    <Dialog v-model:visible="newsOn" modal header="Watch ad" :style="{ width: '100%', 'max-width': '500px'
  }">
        <iframe width="100%" height="500" :src="store.videoSrc"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Dialog>
    <section class="news">
        <utils-the-container-title title="Новости о NEXPAY"/>

        <div class="news__container" @click="newsOn=true">
            <PhosphorIconPlayCircle :size="48" weight="duotone" color="#fff"/>
        </div>


    </section>
</template>

<style lang="scss">

.news__container {
  @include border-glass(0, 1);
  @include transitions;
  @apply bg-pure-white/5 p-4 rounded-2xl h-[200px] flex items-center justify-center hover:bg-pure-white/15 hover:cursor-pointer
}

</style>