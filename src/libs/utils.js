export class Utils {
  static isObject (val) {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase() === 'object'
  }

  static hasProperty (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key)
  }

  static getProperty (obj, key, defaultValue) {
    if (
      Utils.isObject(obj) &&
      Utils.hasProperty(obj, key)
    ) {
      return obj[key]
    }
    return defaultValue
  }
}
