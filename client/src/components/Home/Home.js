import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';


const Home = () => (
    <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="strech" spacing="3">
                <Grid item xs={12} sm={7}> <Posts /> </Grid>
                <Grid item xs={12} sm={4}> <Form /> </Grid>
            </Grid>
        </Container>
    </Grow>
)

export default Home;