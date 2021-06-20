import React from 'react';

/* React components */
import { Container, Grow, Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup'

// import useStyles from './styles';

const App = () => {
    // const classes = useStyles();

    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signup" exact component={Signup} />
                </Switch>
            </Container>
        </BrowserRouter>
        
    );

}

export default App;