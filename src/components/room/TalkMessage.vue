<template>
  <div :class="wrapClass">
    <TextMessage v-if="messageType === 'text'" :line-json="message" />
    <ImageMessage v-else-if="messageType === 'image'" :line-json="message" />
    <VideoMessage v-else-if="messageType === 'video'" :line-json="message" />
    <VoiceMessage v-else-if="messageType === 'audio'" :line-json="message" />
    <ButtonTemplateMessage
      v-else-if="messageType === 'template' && templateType === 'buttons'"
      :line-json="message" />
    <CarouselTemplateMessage
      v-else-if="messageType === 'template' && templateType === 'carousel'"
      :line-json="message" />
    <ConfirmTemplateMessage
      v-else-if="messageType === 'template' && templateType === 'confirm'"
      :line-json="message" />
  </div>
</template>

<script>
import { Utils } from '../../libs/utils'
import TextMessage from '../messages/TextMessage'
import ImageMessage from '../messages/ImageMessage'
import VideoMessage from '../messages/VideoMessage'
import VoiceMessage from '../messages/VoiceMessage'
import ButtonTemplateMessage from '../messages/template-messages/ButtonTemplateMessage'
import CarouselTemplateMessage from '../messages/template-messages/CarouselTemplateMessage'
import ConfirmTemplateMessage from '../messages/template-messages/ConfirmTemplateMessage'

export default {
  name: 'TalkMessage',
  components: {
    ConfirmTemplateMessage,
    CarouselTemplateMessage,
    ButtonTemplateMessage,
    VoiceMessage,
    VideoMessage,
    ImageMessage,
    TextMessage
  },
  props: {
    message: { type: Object, default: () => {} },
    isUser: { type: Boolean, default: false }
  },
  data () {
    return {
      utilsStatic: Utils
    }
  },
  computed: {
    wrapClass: function () {
      return {
        'vlp-talk-message': true,
        'vlp-border-box': true,
        'vlp-talk-side-user': this.isUser
      }
    },
    messageType: function () {
      return this.utilsStatic.getProperty(this.message, 'type', '')
    },
    templateType: function () {
      const defaultVal = ''
      if (this.messageType !== 'template') {
        return defaultVal
      }
      const template = this.utilsStatic.getProperty(this.message, 'template', {})
      return this.utilsStatic.getProperty(template, 'type', defaultVal)
    }
  }
}
</script>

<style scoped>

</style>
