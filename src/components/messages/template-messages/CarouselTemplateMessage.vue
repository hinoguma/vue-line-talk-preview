<template>

  <div :class="carouselClass">

    <Column v-for="(column, index) in columns" :key="index"
            :actions="utilsStatic.getProperty(column, 'actions', [])"
            :text="utilsStatic.getProperty(column, 'text', '')"
            :title="utilsStatic.getProperty(column, 'title', '')"
            :thumbnailImageUrl="utilsStatic.getProperty(column, 'thumbnailImageUrl', '')"
            :imageBackgroundColor="utilsStatic.getProperty(column, 'imageBackgroundColor', '#FFFFFF')"
            :image-size="utilsStatic.getProperty(template, 'imageAspectRatio', 'rectangle')"
            :image-aspect-ratio="utilsStatic.getProperty(template, 'imageSize', 'cover')"
            :is-user="isUser"
    />
  </div>

</template>

<script>
import LineMessageMixin from '../LineMessageMixin'
import Column from './Column'

export default {
  name: 'CarouselTemplateMessage',
  components: { Column },
  mixins: [LineMessageMixin],
  computed: {
    template: function () {
      return this.utilsStatic.getProperty(this.lineJson, 'template', {})
    },
    columns: function () {
      return this.utilsStatic.getProperty(this.template, 'columns', [])
    },
    carouselClass: function () {
      return {
        'vlp-message-template': true,
        'vlp-flex': true,
        'vlp-flex-direction-row-reverse': this.isUser
      }
    }
  }
}
</script>

<style scoped>

</style>
