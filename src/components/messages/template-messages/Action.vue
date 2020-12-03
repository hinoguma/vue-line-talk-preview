<template>
  <div class="vlp-message-template-action">
    <div class="vlp-message-template-action-text">
      {{label}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Action',
  props: {
    action: { type: Object, default: () => {} }
  },
  computed: {
    label: function () {
      if (
        this.action &&
        Object.prototype.hasOwnProperty.call(this.action, 'label') === false
      ) {
        return ''
      }
      return this.action.label
    }
  }
}
</script>

<style scoped>

</style>
