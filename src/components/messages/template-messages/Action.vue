<template>
  <div class="vlp-message-template-action">
    <div class="vlp-message-template-action-text">
      {{utilsStatic.getProperty(action, 'label', '')}}
    </div>
  </div>
</template>

<script>
import { Utils } from '../../../libs/utils'

export default {
  name: 'Action',
  props: {
    action: { type: Object, default: () => {} }
  },
  data () {
    return {
      utilsStatic: Utils
    }
  }
}
</script>

<style scoped>

</style>
