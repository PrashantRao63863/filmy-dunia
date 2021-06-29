import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { UserContext, UserProvider } from "./providers/userContext";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import Admin from './components/admin';
import UserDashboard from './components/user';
import AppComponent from './components/authentication';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useContext } from 'react';
import HomeComponent from './components/home';
import { EquipmentProvider } from './providers/equipmentContext';
import { CrewProvider } from './providers/crewContext';
import { OrderProvider } from './providers/orderContext';



function App() {

  const stripe = loadStripe(
    "pk_test_51IwtOaSHbldaLzMhlMq8Gj2yMsJqonqkUOH64wiBEdZt2IjVcub1Cmb3GeTBT5rSSepeZMC2Mdb7D8pNqJSpyacs00zY2b3ngv"
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
        <CrewProvider>
          <EquipmentProvider>
            <OrderProvider>
              <Router>
                <Switch>
                  <Redirect exact path="/" to="/home"></Redirect>
                  <Route path="/app" component={AppComponent}></Route>
                  <Route path="/admin" component={Admin}></Route>
                  <Route path="/home" component={HomeComponent}></Route>
                  <Elements stripe={stripe}>
                    <Route path="/user" component={UserDashboard}></Route>
                  </Elements>

                </Switch>

              </Router>
            </OrderProvider>
          </EquipmentProvider>
        </CrewProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;