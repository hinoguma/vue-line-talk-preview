<template>

  <div class="vlp-message vlp-message-image">
    <template v-if="lineJson.hasOwnProperty('previewImageUrl')" >
      <img class="vlp-round-message vlp-message-image-content" :src="lineJson.previewImageUrl"  alt="">
    </template>
  </div>

</template>

<script>
import LineMessageMixin from './LineMessageMixin'
export default {
  name: 'ImageMessage',
  mixins: [LineMessageMixin]
}
</script>

<style scoped>

</style>
