<script setup>
import {useGrabbing} from "~/stores/grab.js";

const visible = ref(false)

const store = useGrabbing()

const props = defineProps(['count'])

const emit = defineEmits(['earning'])

const videoId = computed(() => store.videoId)


const earning = async function () {
  await store.getVideos()
  visible.value = true

  emit('earning')


}


</script>

<template>

  <Dialog
      pt:root:class="bg-primary-color/65"
      :visible="visible" header="Watch ad" :style="{ width: '100%', 'max-width': '500px'
  }">
    <ScriptYouTubePlayer ref="video" :video-id="videoId.url" @ready="isLoaded = true" @state-change="stateChange">
      <template #awaitingLoad>
        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
          <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
            <path
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#f00"/>
            <path d="M 45,24 27,14 27,34" fill="#fff"/>
          </svg>
        </div>
      </template>
    </ScriptYouTubePlayer>

    <button v-wave @click="visible=false" class="p-4 bg-pure-white/5 flex w-full rounded-xl justify-center mt-4">
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