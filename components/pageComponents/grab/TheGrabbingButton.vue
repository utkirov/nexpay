<script setup>
import {useGrabbing} from "~/stores/grab.js";

const showAd = ref(false)

const store = useGrabbing()

const props = defineProps(['count'])

const emit = defineEmits(['earning'])

const videoId = computed(() => store.videoId)


const earning = async function () {
  await store.getVideos()
  showAd.value = true

  emit('earning')


}


</script>

<template>

  <Dialog v-model:visible="showAd" modal header="Watch ad" :style="{ width: '100%', 'max-width': '500px'
  }">
    <ScriptYouTubePlayer ref="video" :video-id="videoId.url">
    </ScriptYouTubePlayer>
    <button v-wave @click="showAd=false" class="p-4 bg-pure-white/5 flex w-full rounded-xl justify-center mt-4">
      Close
    </button>
  </Dialog>
  <div class="grabbing">

    <div class="grabbing__button">
      <button @click="earning">
        <h3>
          {{ $t('grabbing.membership.button') }}
        </h3>
        <small>
          ({{ props.count }}/5)
        </small>
      </button>
    </div>

  </div>
</template>

<style scoped lang="scss">
.p-button-text.p-button-secondary {
  opacity: 0 !important;
}

.grabbing {
  background-image: url("/grab-bg.png")
}

.grabbing {
  @apply w-full h-1/2 flex justify-center bg-contain items-center  bg-center
}

.grabbing img {
  @apply w-full bottom-0 left-0 absolute  -z-10

}

.grabbing__button button {
  @apply py-[55px] px-[85px] bottom-[15%] left-1/4 flex flex-col items-center justify-center
}

.grabbing__button h3 {
  @apply text-2xl font-bold
}

.grabbing__button small {
  @apply text-pure-white/65 font-secondary text-base font-medium
}

.grabbing__button button {
  background-size: 1px 200px;
  background: radial-gradient(42.85% 184.29% at 15.34% 39.06%, rgba(131, 113, 243, 0.5) 0%, rgba(69, 156, 236, 0) 100%), radial-gradient(130.16% 129.69% at 63.64% -12.5%, #8528FB 0%, rgba(86, 84, 74, 0.12) 100%), radial-gradient(80.68% 51.24% at 19.32% 40.62%, #1864B7 0%, rgba(23, 61, 102, 0.88) 100%), radial-gradient(28.98% 110.94% at 43.75% -31.25%, rgba(24, 17, 24, 0.53) 21.25%, #000000 100%), #030303;
  box-shadow: 0px 20px 30px rgba(64, 100, 228, 0.3), -20px -20px 50px rgba(42, 94, 142, 0.5), 10px 20px 80px rgba(122, 33, 237, 0.3), inset 0px 0px 30px rgba(255, 255, 255, 0.3);
  animation-name: button-shadow;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  border-radius: 100px;
  background-position: center;
  @include transitions();

  &:hover {
    transform: scale(1.03);

  }

  &:active {
    transform: scale(0.9);

  }
}


@keyframes button-shadow {
  0% {
    box-shadow: 0px 20px 30px rgba(64, 100, 228, 0.3), -20px -20px 50px rgba(42, 94, 142, 0.5), 10px 20px 80px rgba(122, 33, 237, 0.3), inset 0px 0px 30px rgba(255, 255, 255, 0.3);

  }
  50% {
    box-shadow: 0px 20px 30px rgba(64, 100, 228, 0.8), -20px -20px 50px rgba(42, 94, 142, 1), 10px 20px 80px rgba(122, 33, 237, 0.8), inset 0px 0px 30px rgba(255, 255, 255, 0.8);

  }
  100% {
    box-shadow: 0px 20px 30px rgba(64, 100, 228, 0.3), -20px -20px 50px rgba(42, 94, 142, 0.5), 10px 20px 80px rgba(122, 33, 237, 0.3), inset 0px 0px 30px rgba(255, 255, 255, 0.3);

  }
}

</style>