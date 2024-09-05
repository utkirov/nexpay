<script setup lang="ts">

</script>

<template>
  <div>
    <ScriptYouTubePlayer ref="video" video-id="d_IFKP1Ofq0">
    </ScriptYouTubePlayer>

    <input type="text" v-model="videoIdInput" class="bg-transparent"/>

    <button @click="videoId=videoIdInput" class="bg-pure-white/5 p-10">
      video
    </button>
  </div>
</template>