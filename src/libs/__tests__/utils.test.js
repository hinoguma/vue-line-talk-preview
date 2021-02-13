import { Utils } from '../utils'

describe('Utils Class', () => {
  it('test isObject', () => {
    expect(Utils.isObject({})).toBe(true)
    expect(Utils.isObject({ type: 'object' })).toBe(true)
    expect(Utils.isObject([])).toBe(false)
    expect(Utils.isObject(0)).toBe(false)
    expect(Utils.isObject(undefined)).toBe(false)
    expect(Utils.isObject(null)).toBe(false)
    expect(Utils.isObject(Math)).toBe(false)
  })

  it('test hasProperty', () => {
    expect(Utils.hasProperty({ isObject: true }, 'isObject')).toBe(true)
    expect(Utils.hasProperty({ isObject: true }, 'notExistsKey')).toBe(false)
    expect(Utils.hasProperty('not object', 'key')).toBe(false)
  })

  it('test getProperty', () => {
    expect(Utils.getProperty({ name: 'name' }, 'name')).toBe('name')
    expect(Utils.getProperty({ name: 'name' }, 'name2')).toBe(undefined)
    expect(Utils.getProperty({ name: 'name' }, 'name2', 'defaultValue')).toBe('defaultValue')
    expect(Utils.getProperty('not object', 'key')).toBe(undefined)
  })
})
