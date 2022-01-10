import React from 'react';
import { render } from 'react-dom';
import { Provider, useSelector } from 'react-redux';

import './style.css';

import Counter from './src/components/Counter';
import store from './src/store/index';
import Header from './src/components/Header';
import Auth from './src/components/Auth';
import UserProfile from './src/components/UserProfile';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
