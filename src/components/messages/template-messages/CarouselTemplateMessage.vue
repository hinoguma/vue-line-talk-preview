<template>

  <div class="vlp-message-template vlp-flex">

    <Column v-for="(column, index) in columns" :key="index"
            :actions="column.actions"
            :text="column.text"
            :title="column.hasOwnProperty('title') ? column.title : ''"
            :thumbnailImageUrl="column.hasOwnProperty('thumbnailImageUrl') ? column.thumbnailImageUrl : ''"
            :imageBackgroundColor="column.hasOwnProperty('imageBackgroundColor') ? column.imageBackgroundColor : '#FFFFFF'"
            :image-size="imageSize"
            :image-aspect-ratio="imageAspectRatio"
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
    columns: function () {
      if (Object.prototype.hasOwnProperty.call(this.lineJson.template, 'columns') === false) {
        return []
      }
      return this.lineJson.template.columns
    },
    imageAspectRatio: function () {
      if (Object.prototype.hasOwnProperty.call(this.lineJson.template, 'imageAspectRatio') === false) {
        return 'rectangle'
      }
      return this.lineJson.template.imageAspectRatio
    },
    imageSize: function () {
      if (Object.prototype.hasOwnProperty.call(this.lineJson.template, 'imageSize') === false) {
        return 'cover'
      }
      return this.lineJson.template.imageSize
    }

  }
}
</script>

<style scoped>

</style>
