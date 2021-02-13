<template>
  <div class="vlp-talk-content vlp-border-box">

    <template v-for="(message, index) in messages" :key="index">
      <div v-if="utilsStatic.getProperty(message, 'isUser', false)"
           class="vlp-talk-record vlp-flex">
        <TalkMessage :message="message" :isUser="true" />
        <UserIcon />
      </div>
      <div v-else class="vlp-talk-record vlp-flex">
        <UserIcon />
        <TalkMessage :message="message" />
      </div>
    </template>

  </div>
</template>

<script>
import UserIcon from '../UserIcon'
import { Utils } from '../../libs/utils'
import TalkMessage from './TalkMessage'

export default {
  name: 'TalkRoom',
  components: {
    UserIcon, TalkMessage
  },
  props: {
    messages: { type: Array, default: () => [] }
  },
  data () {
    return {
      utilsStatic: Utils
    }
  }
}
</script>

<style>

  @import "../../assets/css/common.css";
</style>
