import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';

const Home = () => (
    <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}> <Posts /> </Grid>

            </Grid>
        </Container>
    </Grow>
)

export default Home;
