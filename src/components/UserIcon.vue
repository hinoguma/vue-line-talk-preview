<template>
  <div class="vlp-user-icon-wrapper">
    <img class="vlp-user-icon-img" :src="iconSrc"/>
  </div>
</template>

<script>
import NoProfileImage from '../assets/images/no-image-profile.png'

export default {
  name: 'UserIcon',
  props: {
    iconUrl: { type: String, default: '' }
  },
  computed: {
    iconSrc: function () {
      if (this.iconUrl !== '') {
        return this.iconUrl
      }
      return NoProfileImage
    }
  }
}
</script>

<style scoped>

</style>
