import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { UserContext, UserProvider } from "./providers/userContext";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import Admin from './components/admin';
import UserDashboard from './components/user';
import AppComponent from './components/authentication';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { GuardedRoute, GuardProvider } from 'react-router-guards';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import AdminDashboard from './components/admin/dashboard';
import HomeComponent from './components/home';
import Login from './components/authentication/login';



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

  const userService = useContext(UserContext);

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (userService.loggedin) {
        console.log('missed')

        next();
      } else {
        console.log('not gone')
        next.redirect('/app/login');
      }


    } else {
      console.log('gone')
      next();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router>
          <GuardProvider guards={[requireLogin]}>
            <GuardedRoute path="/app/login" component={Login} />
            <GuardedRoute path="/admin" component={AdminDashboard} />
            <GuardedRoute path="/home" component={HomeComponent} />
            <Elements stripe={stripe}>
              <GuardedRoute path="/user" component={UserDashboard} meta={{ auth: true }} />
            </Elements>


          </GuardProvider>

        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;