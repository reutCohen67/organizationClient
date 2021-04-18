import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes.json';
import Users from './screens/Users';
import User from './screens/User';
import Landing from './screens/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route key='users' exact path={routes.USERS} component={Users} />
          <Route
            key='landing'
            exact
            path={routes.LANDING}
            component={Landing}
          />
          <Route key='login' exact path={routes.LOGIN} component={Login} />
          <Route
            key='register'
            exact
            path={routes.REGISTER}
            component={Register}
          />
          <Route
            key='users'
            exact
            path={`${routes.USERS}/:id`}
            component={User}
          />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
