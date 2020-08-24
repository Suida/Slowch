import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Pages from '@/pages';
import './index.css';

const { HomePage } = Pages;

export default () => {
  return (
    <div id='content-container' className='container'>
      <Switch>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
