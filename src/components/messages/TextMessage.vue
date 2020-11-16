<template>

  <div class="vlp-message vlp-round-message vlp-message-text vlp-tail">
    {{lineJson.text}}
  </div>

</template>

<script>
import LineMessageMixin from './LineMessageMixin'

export default {
  name: 'TextMessage',
  mixins: [LineMessageMixin]
}
</script>

<style scoped>
</style>
