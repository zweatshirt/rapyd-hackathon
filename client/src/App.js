import React from 'react';

/* React components */
import { Container, Grow, Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'
import Footer from './components/Footer/footer';

// import useStyles from './styles';

const App = () => {
    // const classes = useStyles();

    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
                
                <Footer/>
            </Container>

        </BrowserRouter>
        
    );

}

export default App;