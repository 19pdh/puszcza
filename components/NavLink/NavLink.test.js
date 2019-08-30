import { mount } from '@vue/test-utils';
import NavLink from './index.vue';

describe('NavLink', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(NavLink);

  wrapper.setProps({ link: '/link', name: 'Link' });

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain(`  <li class="navlink">
    <a class="link" href="/link">Link</a>
  </li>`);
  });

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });
});
