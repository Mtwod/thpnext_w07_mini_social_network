import Header from 'components/Header';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Register from 'pages/Register';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import store from 'state/store';
import 'style.scss';
import { checkAuthentication, noAuthentication } from 'utils/cookieUtils';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <PrivateRoute
            path="/register"
            condition={noAuthentication}
            component={Register}
            redirectionPath="/profile"
          />
          <PrivateRoute
            path="/login"
            condition={noAuthentication}
            component={Login}
            redirectionPath="/profile"
          />
          <PrivateRoute
            path="/profile"
            condition={checkAuthentication}
            component={Profile}
            redirectionPath="/login"
          />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
