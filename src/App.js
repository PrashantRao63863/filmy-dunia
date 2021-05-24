import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Header from "./components/header";
import Register from "./components/authentication/register";
import Login from "./components/authentication/login";
import { UserProvider } from "./providers/userContext";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green, purple } from '@material-ui/core/colors';
import Admin from './components/admin';
import ManageUser from './components/admin/manageuser';
import UserDashboard from './components/user';
import AppComponent from './components/authentication';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



function App() {

  const stripe = loadStripe(
    "pk_test_Vmvhpm2TASsGcgF4RcyQfkF000KwucQJR1"
  );

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[500],
      },
    },
    transitions: {
      duration: {
        shortest: 100,
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserProvider>

          <Elements stripe={stripe}>
            <Route path="/user">
              <UserDashboard />
            </Route>
          </Elements>

          <Route exact path="/">
            <Redirect to="/admin" />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/app">
            <AppComponent />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/admin/manageuser">
            <ManageUser />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;