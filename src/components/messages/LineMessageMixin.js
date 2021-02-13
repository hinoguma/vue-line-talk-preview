import { Utils } from '../../libs/utils'
import { LineMessage } from '../../libs/line-message'

export default {
  props: {
    lineJson: { type: Object, default: () => {} }
  },
  data () {
    return {
      utilsStatic: Utils
    }
  },
  computed: {
    isUser: function () {
      return LineMessage.isUser(this.lineJson)
    }
  }
}
