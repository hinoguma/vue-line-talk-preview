import { Utils } from './utils'

export class LineMessage {
  static isUser (lineJson) {
    const is = Utils.getProperty(lineJson, 'isUser', false)
    return typeof is === 'boolean' ? is : false
  }
}
