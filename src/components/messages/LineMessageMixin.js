import { Utils } from '../../libs/utils'

export default {
  props: {
    lineJson: { type: Object, default: () => {} }
  },
  data () {
    return {
      utilsStatic: Utils
    }
  }
}
