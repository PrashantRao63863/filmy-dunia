import { useState } from 'react';
import Header from '../header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router';
import Login from './login';
import Register from './register';
import ListEquipments from './listEquipments';
import EquipmentDetails from './equipmentDetails';
import Checkout from './checkout';
import ForgotPassword from './forgotpassword';
import Rent from '../user/rent';
import ListCrew from './listCrew';
import CrewDetails from './crewDetails';

const drawerWidth = 240;

const AppComponent = () => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        console.log('drawer opened');
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    
    let { path, url } = useRouteMatch();

    const drawerOptions = [
        {
            name: "Profile",
            icon: <AccountBoxIcon />,
            link: `${url}/profile`
        }
    ]

    return (
        <div className="auth" style={{ height: '100vh' }}>
            <Header open={open} setOpen={setOpen} drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} />

            <div>
                <Switch>
                    <Route exact path="/app">
                        <Redirect to="/app/login" />
                    </Route>
                    <Route path={`${path}/login`} component={Login} />
                    <Route path={`${path}/register`} component={Register} />
                    <Route path={`${path}/reset`} component={ForgotPassword} />

                    <Route path={`${path}/listequipments`} component={ListEquipments} />
                    <Route path={`${path}/equipmentdetails/:id`} component={EquipmentDetails} />
                    <Route path={`${path}/checkout`} component={Checkout} />
                    <Route path={`${path}/listcrew`} component={ListCrew} />
                    <Route path={`${path}/crewdetails/:id`} component={CrewDetails} />
                    <Route path={`${path}/rent`} component={Rent} />
                </Switch>
            </div>
        </div>
    )
}


export default AppComponent;