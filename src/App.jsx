import Header from 'components/Header';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Register from 'pages/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import 'style.scss';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  </div>
);

export default App;
