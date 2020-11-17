import { mount } from '@vue/test-utils'
import TextMessage from '@/components/messages/TextMessage'

describe('ExampleComponent', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(TextMessage, {
      props: {
        lineJson: {
          type: 'text',
          text: 'text'
        }
      }
    })
    expect(wrapper.find('div').exists()).toBe(true)
    // expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
