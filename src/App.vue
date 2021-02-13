<template>

  <div class="vlp-talk-preview">
    <div class="vlp-talk-header vlp-border-box">
      <div>プレビュー</div>
    </div>
    <TalkRoom :messages="messages" />
  </div>

</template>

<script>
import TalkRoom from './components/room/TalkRoom'

export default {
  name: 'App',
  components: {
    TalkRoom
  },
  props: {

  },
  data: function () {
    return {
      messages: [
        { type: 'text', text: 'アベンジャーズ観た？' },
        { isUser: true, type: 'text', text: 'まだ' },
        { isUser: true, type: 'image', previewImageUrl: 'https://sm.mashable.com/mashable_in/seo/default/8-years-of-the-avengers-how-joss-whedons-risk-became-crucial_5z9w.jpg' },
        { type: 'video', previewImageUrl: 'https://sm.mashable.com/mashable_in/seo/default/8-years-of-the-avengers-how-joss-whedons-risk-became-crucial_5z9w.jpg' },
        {
          isUser: true,
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
        {
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
        },
        {
          type: 'template',
          altText: 'this is a carousel template',
          template: {
            type: 'carousel',
            columns: [
              {
                thumbnailImageUrl: 'https://example.com/bot/images/item1.jpg',
                imageBackgroundColor: '#FFFFFF',
                title: 'this is menu',
                text: 'description',
                defaultAction: {
                  type: 'uri',
                  label: 'View detail',
                  uri: 'http://example.com/page/123'
                },
                actions: [
                  {
                    type: 'postback',
                    label: 'Buy',
                    data: 'action=buy&itemid=111'
                  },
                  {
                    type: 'postback',
                    label: 'Add to cart',
                    data: 'action=add&itemid=111'
                  },
                  {
                    type: 'uri',
                    label: 'View detail',
                    uri: 'http://example.com/page/111'
                  }
                ]
              },
              {
                thumbnailImageUrl: 'https://example.com/bot/images/item2.jpg',
                imageBackgroundColor: '#000000',
                title: 'this is menu',
                text: 'description',
                defaultAction: {
                  type: 'uri',
                  label: 'View detail',
                  uri: 'http://example.com/page/222'
                },
                actions: [
                  {
                    type: 'postback',
                    label: 'Buy',
                    data: 'action=buy&itemid=222'
                  },
                  {
                    type: 'postback',
                    label: 'Add to cart',
                    data: 'action=add&itemid=222'
                  },
                  {
                    type: 'uri',
                    label: 'View detail',
                    uri: 'http://example.com/page/222'
                  }
                ]
              }
            ],
            imageAspectRatio: 'rectangle',
            imageSize: 'cover'
          }
        },
        {
          isUser: true,
          type: 'template',
          altText: 'this is a carousel template',
          template: {
            type: 'carousel',
            columns: [
              {
                thumbnailImageUrl: 'https://example.com/bot/images/item1.jpg',
                imageBackgroundColor: '#FFFFFF',
                title: 'this is menu',
                text: 'description',
                defaultAction: {
                  type: 'uri',
                  label: 'View detail',
                  uri: 'http://example.com/page/123'
                },
                actions: [
                  {
                    type: 'postback',
                    label: 'Buy',
                    data: 'action=buy&itemid=111'
                  },
                  {
                    type: 'postback',
                    label: 'Add to cart',
                    data: 'action=add&itemid=111'
                  },
                  {
                    type: 'uri',
                    label: 'View detail',
                    uri: 'http://example.com/page/111'
                  }
                ]
              },
              {
                thumbnailImageUrl: 'https://example.com/bot/images/item2.jpg',
                imageBackgroundColor: '#000000',
                title: 'this is menu',
                text: 'description',
                defaultAction: {
                  type: 'uri',
                  label: 'View detail',
                  uri: 'http://example.com/page/222'
                },
                actions: [
                  {
                    type: 'postback',
                    label: 'Buy',
                    data: 'action=buy&itemid=222'
                  },
                  {
                    type: 'postback',
                    label: 'Add to cart',
                    data: 'action=add&itemid=222'
                  },
                  {
                    type: 'uri',
                    label: 'View detail',
                    uri: 'http://example.com/page/222'
                  }
                ]
              }
            ],
            imageAspectRatio: 'rectangle',
            imageSize: 'cover'
          }
        },
        {
          type: 'audio',
          originalContentUrl: 'https://example.com/original.m4a',
          duration: 60000
        },
        {
          isUser: true,
          type: 'audio',
          originalContentUrl: 'https://example.com/original.m4a',
          duration: 60000
        },
        {
          baseUrl: 'https://sm.mashable.com/mashable_in/seo/default/8-years-of-the-avengers-how-joss-whedons-risk-became-crucial_5z9w.jpg',
          baseSize: {
            width: 1040,
            height: 700
          }
        }
      ]
    }
  }
}
</script>

<style>

  @import "./assets/css/common.css";
</style>
