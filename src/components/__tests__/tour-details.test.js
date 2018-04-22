import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import TourDetails from '../tour-details';
import store from '../../store';

const Component = props => (
  <Router>
    <Provider store={store}>
      <TourDetails {...props} />
    </Provider>
  </Router>
);

const props = {
  match: {
    params: {
      query: '',
    },
  },
};
describe('<TourDetails />', () => {
  it('should render correctly', () => {
    const wrapper = mount(Component(props));
    expect(wrapper.find('[data-test="tour-details"]')).toHaveLength(1);
  });
  it('should show empty message when there no search result', () => {
    const wrapper = mount(Component(props));
    expect(wrapper.find('[data-test="search-empty"]')).toHaveLength(1);
  });
  it('should show search result when the url have query', () => {
    props.match.params.query = 'g';
    const wrapper = mount(Component(props));
    expect(wrapper.find('[data-test="search-result-item"]').length).toBeGreaterThanOrEqual(1);
    expect(wrapper.find('[data-test="search-empty"]')).toHaveLength(0);
  });
});
