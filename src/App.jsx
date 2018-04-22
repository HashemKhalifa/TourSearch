import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';
import store from './store';
import SearchBox from './components/search-box';
import TourDetails from './components/tour-details';

const history = createHistory();
const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Route exact path="/" component={SearchBox} />
        <Route path="/:query" component={TourDetails} />
      </div>
    </Provider>
  </Router>
);

export default App;
