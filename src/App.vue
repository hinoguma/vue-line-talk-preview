<template>

  <div class="vlp-talk-preview">
    <div class="vlp-talk-header">
      <div>プレビュー</div>
    </div>
    <div class="vlp-talk-content">

      <div class="vpl-talk-record">
        <UserIcon />
      </div>

    </div>
  </div>

</template>

<script>
import UserIcon from './components/UserIcon'

export default {
  name: 'App',
  components: { UserIcon },
  props: {

  }
}
</script>

<style>

  @import "./assets/css/common.css";
</style>
