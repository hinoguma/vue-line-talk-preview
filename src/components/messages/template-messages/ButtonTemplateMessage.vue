<template>

  <div class="vlp-message-template">

    <Column :text="text"
            :actions="lineJson.template.actions"
            :title="title"
    />

  </div>

</template>

<script>
import LineMessageMixin from '../LineMessageMixin'
import Column from './Column'

export default {
  name: 'ButtonTemplateMessage',
  components: { Column },
  mixins: [LineMessageMixin],
  computed: {
    title: function () {
      if (Object.prototype.hasOwnProperty.call(this.lineJson.template, 'title') === false) {
        return ''
      }
      return this.lineJson.template.title
    },
    text: function () {
      if (Object.prototype.hasOwnProperty.call(this.lineJson.template, 'text') === false) {
        return ''
      }
      return this.lineJson.template.text
    }
  }
}
</script>

<style scoped>

</style>
