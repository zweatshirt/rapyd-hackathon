import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import Input from './Input';
import { GoogleLogin } from 'react-google-login';
import useStyles from './styles';
import { useHistory } from 'react-router-dom'
import dotenv from 'dotenv';
import { useDispatch } from 'react-redux';

export const Signup = () => {
    const classes = useStyles;
    const history = useHistory();
    const dispatch = useDispatch();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const switchMode = () => {
        handleSubmit(false);
        handleShowPassword(false);
    }

    // client ID for Google OAuth
    dotenv.config({ path: 'client/.env' });
    const client_id = process.env.REACT_APP_CLIENT_ID;


    const handleSubmit = () => setIsSignup((prevIsSignup) => !prevIsSignup)

    const handleChange = () => {
    }

    // callbacks to handle on success and failure events
    // specifically related to Google sign-in/sign-up
    const googleSuccess = async (res) => {
        const profObj = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({'type': 'AUTH', data: {profObj, token}});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log("Google sign in failed. Please try again later.");
    }

    return (
        <Container component="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
                 <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                        {   // only ask for first and last name on sign up
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email" handleChange={handleChange} half type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} half type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        
                        {   // only ask for password confirmation on signup
                            isSignup && (
                                <>
                                    <Input name="confirmPass" label="Confirm Password" handleChange={handleChange} half type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                                </>
                            )
                        }
    
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign up' : 'Sign in' }
                    </Button>
                    <GoogleLogin
                        clientId={client_id}
                        render={(renderProps) => (
                            <Button className={classes.googleBtn}
                                color="primary"
                                fullWidth onClick={renderProps.onClick}
                                disabled={renderProps.disabled}  
                                variant="contained">
                                    Google Sign in
                            </Button>
                        // Once GoogleIcon component is created replace above with:
                        // <Button className={classes.googleBtn}
                        //     color="primary"
                        //     fullWidth onClick={renderProps.onClick}
                        //     disabled={renderProps.disabled} 
                        //     startIcon={<GoogleIcon/>} 
                        //     variant="contained">                            // </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="center">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already a guest user? Sign in.' : 'Create an account.' }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Signup;