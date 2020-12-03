<template>
  <div class="vlp-message-template-column">
    <div class="vlp-message-template-header">

      <div v-if="thumbnailImageUrl !== ''" class="vlp-message-template-header-img"
           :style="thumbnailImageStyle"
      >
        <img :class="headerImgClass" :src="thumbnailImageUrl">
      </div>

      <div class="vlp-message-template-header-text">
        <div v-if="title !== ''" class="vlp-message-template-title">
          {{title}}
        </div>
        <div class="vlp-message-template-text">
          {{text}}
        </div>
      </div>
    </div>
    <div :class="actionsClass">

      <Action v-for="(action, index) in actions" :key="index" :action="action" />

    </div>
  </div>
</template>

<script>
import Action from './Action'
export default {
  name: 'Column',
  components: { Action },
  props: {
    templateType: { type: String, default: '' },
    thumbnailImageUrl: { type: String, default: '' },
    imageAspectRatio: { type: String, default: 'rectangle' },
    imageSize: { type: String, default: 'cover' },
    imageBackgroundColor: { type: String, default: '#FFFFFF' },
    title: { type: String, default: '' },
    text: { type: String, default: '' },
    actions: { type: Array, default: () => [] }
  },
  computed: {
    actionsClass: function () {
      return {
        'vlp-message-template-actions': true,
        'vlp-message-template-actions-confirm': this.templateType === 'confirm'
      }
    },
    headerImgClass: function () {
      return {
        'vlp-message-template-header-img': true,
        rectangle: this.imageAspectRatio === 'rectangle',
        square: this.imageAspectRatio === 'square',
        cover: this.imageSize === 'cover',
        contain: this.imageSize === 'contain'
      }
    },
    thumbnailImageStyle: function () {
      return {
        'background-color': this.imageBackgroundColor
      }
    }
  }
}
</script>

<style scoped>

</style>
