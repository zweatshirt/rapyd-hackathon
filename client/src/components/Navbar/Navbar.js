import React, { useState, useEffect} from 'react';
import { AppBar, Typography, Button, Toolbar, Avatar } from '@material-ui/core';
import useStyles from './styles'; // module that contains all the CSS styling for component
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    // user state
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    // useEffect hook for user 
    useEffect(() => {
        // const token = user?.token;
        // finish
        // Check for JWT as well:
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    // dispatch SIGNOUT to reducers, clearing local storage and user auth data
    // Then, push back to home and clear user data
    const signout = () => {
        dispatch({type: 'SIGNOUT'})
        history.push('/')
        setUser(null)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" className={classes.title}>
                    Gryzzly
                </Typography>
                <Toolbar className={classes.btns}>
                 
                    { user ? (
                        <div className={classes.profile}>

                            <Typography className={classes.userName} variant="h6">
                                { user.profObj ? (
                                    "Welcome, " + user.profObj.name
                                ) : (
                                    " Welcome, " + user.result.name
                                )}
                            </Typography>
                            <Button component={Link} to="/profile" className={classes.profBtn} color="inherit">Your Profile</Button>
                            <Button className={classes.logoutBtn} variant="contained" color="inherit" onClick={signout}>Sign out</Button>
                        </div>
                    ) : (


                        <div className={classes.loggedOut}>
                            <Button component={Link} to="/auth" className={classes.signupBtn} variant="contained" color="inherit">Sign in</Button>
                        </div>

                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
