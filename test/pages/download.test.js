import { shallowMount } from '@vue/test-utils'
import download from '../../pages/download'

describe('download', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(download)

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
