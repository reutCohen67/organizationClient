import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes.json';
import Users from './screens/Users';
import User from './screens/User';
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
