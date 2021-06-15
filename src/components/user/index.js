import { useEffect, useState } from 'react';
import DrawerComponent from '../drawer';
import Header from '../header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useRouteMatch, Switch, Route } from 'react-router';
import Profile from '../profile';
import Checkout from './checkout';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import RentCrew from './rentCrew';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 60,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 230,
    },
}));


const UserDashboard = () => {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const [currentUser, setCurrentUser] = useState({});
    const history = useHistory();

    const handleDrawerOpen = () => {
        console.log('drawer opened');
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        if (currentUser) {
            if (currentUser) {
                return;
            }
        }
        Swal.fire({
            icon: 'error',
            title: 'Not Permitted',
            text: 'You do not have admin permission'
        })
        history.push('/app/login');
    }, [])


    let { path, url } = useRouteMatch();

    const drawerOptions = [
        {
            name: "Profile",
            icon: <AccountBoxIcon />,
            link: `${url}/profile`
        }
    ]

    return (
        <div>
            <Header open={open} setOpen={setOpen} drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} />
            <DrawerComponent open={open} setOpen={setOpen} drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} drawerOptions={drawerOptions} />

            <div className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <Switch>
                    <Route path={`${path}/profile`} component={Profile} />
                    <Route exact path={`${path}`}>
                        <Profile />
                    </Route>
                    <Route path={`${path}/checkout`}>
                        <Checkout />
                    </Route>
                    <Route path={`${path}/rentcrew`}>
                        <RentCrew />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}


export default UserDashboard;