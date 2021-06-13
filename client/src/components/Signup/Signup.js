import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import useStyles from './styles'

export const Signup = () => {
    const classes = useStyles();
    const handleSubmit = () => {


    }
    return (
        <Container component="main" maxWidth="s">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography variant="h5">Sign up</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
  
                        
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Signup;
