import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Alchemy from './components/main/Alchemy';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/start" component={Alchemy} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
