import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const placeholder = '选择日期'
    const wrapper = mount(HelloWorld, { props: { placeholder: placeholder, customClass: 'test-date-picker' }, attachTo: document.body })

    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe(placeholder);

    const datepicker = wrapper.find('.test-date-picker');
    expect(datepicker.exists()).toBe(true);
    datepicker.trigger('click');
    
    const popup = wrapper.findAll('.t-popup');
    console.log(popup.length);
  })
})
