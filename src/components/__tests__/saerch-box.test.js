import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { shallow, render, mount } from 'enzyme';
import SearchBox from '../search-box';
import store from '../../store';

const Component = (
  <Router>
    <Provider store={store}>
      <SearchBox />
    </Provider>
  </Router>
);

describe('<SearchBox />', () => {
  it('should render correctly', () => {
    const wrapper = mount(Component);
    expect(wrapper.find('[data-test="search-input"]')).toHaveLength(1);
  });
  it('should filter result when input changed', () => {
    const wrapper = mount(Component);
    wrapper
      .find('[data-test="search-input"]')
      .first()
      .simulate('change', {
        target: { value: 'g' },
      });
    expect(wrapper.find('[data-test="search-result-item"]').length).toBeGreaterThanOrEqual(1);
    expect(wrapper.find('[data-test="search-empty"]')).toHaveLength(0);
  });
  it('should show empty message when there no search result', () => {
    const wrapper = mount(Component);
    wrapper
      .find('[data-test="search-input"]')
      .first()
      .simulate('change', {
        target: { value: 'hashemkhalifa@gmail.com' },
      });
    expect(wrapper.find('[data-test="search-empty"]')).toHaveLength(1);
  });
});
