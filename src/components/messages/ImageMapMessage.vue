<template>
  <div class="vlp-message vlp-message-imagemap">
    <img ref="vlp_imagemap_img" class="vlp-message-imagemap-content vlp-round-message"
         :style="imagemapImgStyle"
         :src="lineJson.baseUrl" alt="">
  </div>
</template>

<script>
import LineMessageMixin from './LineMessageMixin'

export default {
  name: 'ImageMapMessage',
  mixins: [LineMessageMixin],
  data: function () {
    return {
      imgWidthPixel: 0
    }
  },
  computed: {
    baseWidth: function () {
      if (this.lineJson && Object.prototype.hasOwnProperty.call(this.lineJson, 'baseSize') === false) {
        return 0
      }
      if (Object.prototype.hasOwnProperty.call(this.lineJson.baseSize, 'width') === false) {
        return 0
      }
      if (isNaN(this.lineJson.baseSize.width)) {
        return 0
      }
      return this.lineJson.baseSize.width
    },
    baseHeight: function () {
      if (this.lineJson && Object.prototype.hasOwnProperty.call(this.lineJson, 'baseSize') === false) {
        return 0
      }
      if (
        this.lineJson.baseSize &&
          Object.prototype.hasOwnProperty.call(this.lineJson.baseSize, 'height') === false
      ) {
        return 0
      }
      if (isNaN(this.lineJson.baseSize.height)) {
        return 0
      }
      return this.lineJson.baseSize.height
    },
    heightRatio: function () {
      if (this.baseWidth === 0 || this.baseHeight === 0) {
        return 0
      }
      return (Math.round(this.baseHeight / this.baseWidth * 100) / 100)
    },
    imgHeightPixel: function () {
      return Math.round(Math.round(this.imgWidthPixel) * this.heightRatio)
    },
    imagemapImgStyle: function () {
      return {
        height: this.imgHeightPixel + 'px'
      }
    }
  },
  mounted () {
    this.imgWidthPixel = this.$refs.vlp_imagemap_img.getBoundingClientRect().width
  }

}
</script>

<style scoped>

</style>
