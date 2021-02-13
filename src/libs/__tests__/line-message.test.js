import { LineMessage } from '../line-message'

describe('LineMessage Class', () => {
  it('test isUser', () => {
    expect(LineMessage.isUser({})).toBe(false)
    expect(LineMessage.isUser('not object')).toBe(false)
    expect(LineMessage.isUser({ isUser: false })).toBe(false)
    expect(LineMessage.isUser({ isUser: 'not boolean' })).toBe(false)
    expect(LineMessage.isUser({ isUser: true })).toBe(true)
  })
})
