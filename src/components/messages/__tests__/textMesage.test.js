import { mount } from '@vue/test-utils'
import TextMessage from '@/components/messages/TextMessage'

describe('TextMessage Component', () => {
  it('has text props', () => {
    const wrapper = mount(TextMessage, {
      props: {
        lineJson: {
          type: 'text',
          text: 'text'
        }
      }
    })
    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find('div').text()).toBe('text')
  })

  it('does not have text props', () => {
    const wrapper = mount(TextMessage, {
      props: {
        lineJson: {
          type: 'text'
        }
      }
    })
    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find('div').text()).toBe('')
  })
})
