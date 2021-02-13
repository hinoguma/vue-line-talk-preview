<template>

  <div class="vlp-message-template">

    <Column :text="text"
            :actions="actions"
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
    template: function () {
      return this.utilsStatic.getProperty(this.lineJson, 'template', {})
    },
    title: function () {
      return this.utilsStatic.getProperty(this.template, 'title', '')
    },
    text: function () {
      return this.utilsStatic.getProperty(this.template, 'text', '')
    },
    actions: function () {
      return this.utilsStatic.getProperty(this.template, 'actions', [])
    }
  }
}
</script>

<style scoped>

</style>
