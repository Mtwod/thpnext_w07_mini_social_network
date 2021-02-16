import Header from 'components/Header';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Register from 'pages/Register';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from 'state/store';
import 'style.scss';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
