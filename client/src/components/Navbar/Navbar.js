import React, { useState, useEffect} from 'react';
import { AppBar, Typography, Button, Toolbar, Avatar } from '@material-ui/core';
import useStyles from './styles';
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
        const token = user?.token;

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
                    <Button className={classes.helpBtn} color="inherit">Help</Button>
                 
                    { user ? (
                        <div className={classes.profile}>
                            { user.profObj.name }
                            {/* <Avatar className={user.profObj.name}>
                                { user.profObj.name }
                            </Avatar> */}
                            <Typography className={classes.userName} variant="h6">
                                { user.profObj.userName}
                            </Typography>
                            <Button className={classes.logoutBtn} variant="contained" color="inherit" onClick={signout}>Sign out</Button>
                        </div>
                    ) : (


                        <div className={classes.loggedOut}>
                            <Button component={Link} to="/signup" className={classes.signupBtn} variant="contained" color="inherit">Sign in</Button>
                        </div>

                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
