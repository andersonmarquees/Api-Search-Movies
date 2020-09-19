import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import App from './App';

import Reset from './styles/reset/Reset';
import Colors from './styles/settings/Colors';
import Base from './styles/settings/Base';

ReactDOM.render(
  <React.StrictMode>
    <Reset/>
    <Colors/>
    <Base/>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
