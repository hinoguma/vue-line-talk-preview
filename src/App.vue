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

      <div class="vlp-talk-record vlp-flex vlp-flex-wrap">
        <UserIcon />

        <div class="vlp-talk-message vlp-border-box">
          <ImageMapMessage :line-json="richmessage" />
        </div>

      </div>

      <div class="vlp-talk-record vlp-flex vlp-flex-wrap">
        <UserIcon />

        <div class="vlp-talk-message vlp-border-box">
          <ButtonTemplateMessage :line-json="btnTemplate" />
        </div>

      </div>

      <div class="vlp-talk-record vlp-flex vlp-flex-wrap">
        <UserIcon />

        <div class="vlp-talk-message vlp-border-box">
          <ButtonTemplateMessage :line-json="confirmTemplate" />
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
import ImageMapMessage from './components/messages/ImageMapMessage'
import ButtonTemplateMessage from './components/messages/template-messages/ButtonTemplateMessage'

export default {
  name: 'App',
  components: { ButtonTemplateMessage, ImageMapMessage, VideoMessage, ImageMessage, TextMessage, UserIcon },
  props: {

  },
  data: function () {
    return {
      richmessage: {
        baseUrl: 'https://sm.mashable.com/mashable_in/seo/default/8-years-of-the-avengers-how-joss-whedons-risk-became-crucial_5z9w.jpg',
        baseSize: {
          width: 1040,
          height: 700
        }
      },
      btnTemplate: {
        type: 'template',
        altText: 'This is a buttons template',
        template: {
          type: 'buttons',
          thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
          imageAspectRatio: 'rectangle',
          imageSize: 'cover',
          imageBackgroundColor: '#FFFFFF',
          title: 'Menu',
          text: 'Please select',
          defaultAction: {
            type: 'uri',
            label: 'View detail',
            uri: 'http://example.com/page/123'
          },
          actions: [
            {
              type: 'postback',
              label: 'Buy',
              data: 'action=buy&itemid=123'
            },
            {
              type: 'postback',
              label: 'Add to cart',
              data: 'action=add&itemid=123'
            },
            {
              type: 'uri',
              label: 'View detail',
              uri: 'http://example.com/page/123'
            }
          ]
        }
      },
      confirmTemplate: {
        type: 'template',
        altText: 'this is a confirm template',
        template: {
          type: 'confirm',
          text: 'Are you sure?',
          actions: [
            {
              type: 'message',
              label: 'Yes',
              text: 'yes'
            },
            {
              type: 'message',
              label: 'No',
              text: 'no'
            }
          ]
        }
      }
    }
  }
}
</script>

<style>

  @import "./assets/css/common.css";
</style>
