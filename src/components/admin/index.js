import { useEffect, useState } from 'react';
import DrawerComponent from '../drawer';
import Header from '../header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Route, useRouteMatch, Switch, useHistory } from 'react-router-dom';
import ManageUser from './manageuser';
import AdminDashboard from './dashboard';
import Profile from '../profile';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import AddEquipment from './addequipment';
import ManageEquipment from './manageequipment';
import AddCrew from './addcrew';
import UpdateEquipment from './updateEquipment';
import Swal from 'sweetalert2';

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

const Admin = () => {

    const [open, setOpen] = useState(true);

    const classes = useStyles();
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    let { path, url } = useRouteMatch();
    const history = useHistory();
    console.log(path)


    const drawerOptions = [
        {
            name: "Profile",
            icon: <AccountBoxIcon />,
            link: `${url}/profile`
        },
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            link: `${url}/dashboard`
        },
        {
            name: "ManageUsers",
            icon: <PeopleIcon />,
            link: "/admin/manageuser"
        },
        {
            name: "Add New Equipment",
            icon: <PeopleIcon />,
            link: "/admin/addequipment"
        },
        {
            name: "ManageEquipment",
            icon: <PeopleIcon />,
            link: "/admin/manageequipment"
        },
        {
            name: "Add Crew Member",
            icon: <PeopleIcon />,
            link: "/admin/addcrew"
        },
        // {
            //   name: "ManageStaff",
        //  icon: <PeopleIcon />,
            // link: "/admin/managestaff"
            //  },
    ]

    useEffect(() => {
        if (currentUser) {
            if (currentUser.isadmin) {
                return;
            }
        }
        Swal.fire({
            icon: 'error',
            title: ' Permitted',
            text: 'logout'
        })
        history.push('/app/login');
    }, [])


    const handleDrawerOpen = () => {
        console.log('drawer opened');
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className="admin" style={{ height: '100vh' }}>
            <Header open={open} drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} drawer={true} />
            <DrawerComponent
                open={open}
                setOpen={setOpen}
                drawerWidth={drawerWidth}
                handleDrawerClose={handleDrawerClose}
                drawerOptions={drawerOptions} />

            <div className={clsx("admindash", classes.content, {
                [classes.contentShift]: open,
            })}>
                <Switch>
                    <Route path={`${path}/profile`} component={Profile} />
                    <Route path={`${path}/dashboard`} component={AdminDashboard} />
                    <Route path={`${path}/manageuser`} component={ManageUser} />
                    <Route path={`${path}/addequipment`} component={AddEquipment} />
                    <Route path={`${path}/manageequipment`} component={ManageEquipment} />
                    <Route path={`${path}/addcrew`} component={AddCrew} />
                    
                    <Route path={`${path}/updatequipment/:id`} component={UpdateEquipment} />

                    <Route exact path={`${path}`}>
                        <Profile />
                    </Route>
                </Switch>

            </div>
        </div>
    )
}


export default Admin;