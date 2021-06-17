import React from 'react';
import { AppBar, Typography, Button, Toolbar, Avatar } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" className={classes.title}>
                    Gryzzly
                </Typography>
                <Toolbar className={classes.btns}>
                    <Button className={classes.helpBtn} color="inherit">Help</Button>
                    <Button component={Link} to="/signup" className={classes.signupBtn} variant="contained" color="inherit">Sign up</Button>
                    {/* user ? (
                        <div className={classes.profile}>
                            <Avatar className={user.result.name}>
                                { user.result.name }
                            </Avatar>
                            <Typography className={classes.userName} variant="h6">
                                { user.result.userName}
                            </Typography>
                            <Button className={classes.logoutBtn} variant="contained" color="inherit">Sign out</Button>
                        </div>
                    ) : (
                        <div className={classes.loggedOut}>
                            <Button component={Link} to="/signup" className={classes.signupBtn} variant="contained" color="inherit">Sign up</Button>
                            <Button component={Link} to="/signin" className={classes.signinBtn} variant="contained" color="inherit">Sign in</Button>
                        </div>

                    ) */}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
