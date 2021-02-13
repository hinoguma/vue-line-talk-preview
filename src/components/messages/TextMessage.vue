<template>

  <div :class="styleClass">
    {{utilsStatic.getProperty(lineJson, 'text', '')}}
  </div>

</template>

<script>
import LineMessageMixin from './LineMessageMixin'

export default {
  name: 'TextMessage',
  mixins: [LineMessageMixin],
  computed: {
    styleClass: function () {
      return {
        'vlp-message': true,
        'vlp-round-message': true,
        'vlp-message-text': true,
        'vlp-tail': true,
        'vlp-tail-left': !this.isUser,
        'vlp-tail-right': this.isUser
      }
    }
  }
}
</script>

<style scoped>
</style>
