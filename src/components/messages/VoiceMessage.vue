<template>

  <div class="vlp-message vlp-round-message vlp-message-voice vlp-tail">
    <div class="vlp-message-audio-start-btn">
      <div class="vlp-message-audio-start-btn-icon">
      </div>
    </div>
    <div class="vlp-message-audio-duration">{{durationTime}}</div>
    <div class="vlp-flex vlp-flex-align-center">
      <div class="vlp-message-audio-wave vlp-message-audio-wave-small"></div>
      <div class="vlp-message-audio-wave vlp-message-audio-wave-medium"></div>
      <div class="vlp-message-audio-wave vlp-message-audio-wave-small"></div>
      <div class="vlp-message-audio-wave vlp-message-audio-wave-small"></div>
      <div class="vlp-message-audio-wave vlp-message-audio-wave-large"></div>
      <div class="vlp-message-audio-wave vlp-message-audio-wave-large"></div>
      <div class="vlp-message-audio-wave vlp-message-audio-wave-small"></div>
      <div class="vlp-message-audio-wave vlp-message-audio-wave-medium"></div>
      <div class="vlp-message-audio-wave vlp-message-audio-wave-small"></div>
    </div>

  </div>

</template>

<script>
import LineMessageMixin from './LineMessageMixin'

export default {
  name: 'VoiceMessage',
  mixins: [LineMessageMixin],
  computed: {
    durationTime: function () {
      if (Object.prototype.hasOwnProperty.call(this.lineJson, 'duration') === false) {
        return '0:00'
      }
      return this.convertTimeStrFromMils(this.lineJson.duration)
    }
  },
  methods: {
    convertTimeStrFromMils: function (duration) {
      const second = duration / 1000
      if (second < 60) {
        return '0:' + second
      }
      const minute = second / 60
      let sec = second % 60
      sec = ('00' + sec).slice(-2)
      return minute + ':' + sec
    }
  }
}
</script>

<style scoped>
</style>
