import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/root-reducer';

const renderWithReduxRouter = (
  component,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    history = createMemoryHistory(),
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>
    ),
    store,
  };
};

export default renderWithReduxRouter;
