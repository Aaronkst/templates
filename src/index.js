import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';
import Hotel from './page/Hotel';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/hotel" component={ Hotel } />
        <Route path="/" component={ App } />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* //Route
    <Route path="/settings" component={ SettingsPage } />

    <Route path="/auth">
      <IndexRoute component={ AuthLoginPage } />
      <Route path="/login" component={ AuthLoginPage } />
      <Route path="/logout" component={ AuthLogoutPage } />
    </Route>

    <Route path="/articles/:id" component={ ArticlePage } />

    <Route path="*" component={ PageNotFound } />
*/