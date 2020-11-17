<template>

  <div class="vlp-talk-preview">
    <div class="vlp-talk-header vlp-border-box">
      <div>プレビュー</div>
    </div>
    <div class="vlp-talk-content vlp-border-box">

      <div class="vlp-talk-record vlp-flex">
        <UserIcon />

        <div class="vlp-talk-message vlp-border-box">
          <TextMessage :line-json="{text: 'テキスト'}" />
        </div>

      </div>

      <div class="vlp-talk-record vlp-flex vlp-flex-wrap">
        <UserIcon />

        <div class="vlp-talk-message vlp-border-box">
          <ImageMessage :line-json="{previewImageUrl: 'https://sm.mashable.com/mashable_in/seo/default/8-years-of-the-avengers-how-joss-whedons-risk-became-crucial_5z9w.jpg'}" />
        </div>

      </div>

      <div class="vlp-talk-record vlp-flex vlp-flex-wrap">
        <UserIcon />

        <div class="vlp-talk-message vlp-border-box">
          <VideoMessage :line-json="{previewImageUrl: 'https://sm.mashable.com/mashable_in/seo/default/8-years-of-the-avengers-how-joss-whedons-risk-became-crucial_5z9w.jpg'}" />
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import UserIcon from './components/UserIcon'
import TextMessage from './components/messages/TextMessage'
import ImageMessage from './components/messages/ImageMessage'
import VideoMessage from './components/messages/VideoMessage'

export default {
  name: 'App',
  components: { VideoMessage, ImageMessage, TextMessage, UserIcon },
  props: {

  }
}
</script>

<style>

  @import "./assets/css/common.css";
</style>
