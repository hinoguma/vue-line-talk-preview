<template>
  <div class="vlp-message vlp-message-video">
    <template v-if="lineJson.hasOwnProperty('previewImageUrl')" >
      <img class="vlp-message-video-content vlp-round-message" :src="lineJson.previewImageUrl" alt="">

      <div class="vlp-message-video-shadow vlp-round-message"></div>
      <div class="vlp-message-video-start-btn vlp-round-message">
        <div class="vlp-message-video-start-btn-circle">
          <div class="vlp-message-video-start-btn-icon">

          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import LineMessageMixin from './LineMessageMixin'

export default {
  name: 'VideoMessage',
  mixins: [LineMessageMixin]
}
</script>

<style scoped>

</style>
