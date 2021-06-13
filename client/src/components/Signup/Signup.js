import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'

export const Signup = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="s">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Sign up</Typography>
            </Paper>
        </Container>
    )
}

export default Signup;
