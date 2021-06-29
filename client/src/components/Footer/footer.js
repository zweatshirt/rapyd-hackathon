import React from 'react'; 
import FooterUl from './FooterUl/FooterUl';

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Header,
    FooterLi
  } from './footerstyle'


const copyright = <p> &copy; 2021 GRYZZLY</p>; 

const Footer = () => {
    return ( <Box>
            
        {/* <h2 style = {{
            color: "White",
            textAlign: "left", 
            marginTop: "10px"  }}>
            GRYZLY
        </h2> */}

        <Container>
            <Row>
                
                <Column>
                    <Header>Gryzzly</Header>
                    <FooterLink href="https://github.com/zweatshirt/rapyd-hackathon">Github Repo</FooterLink>
                </Column> 

                <Column>
                    <Header>Team</Header>
                    <FooterLink href="https://github.com/zweatshirt">Zach</FooterLink>
                    <FooterLink >Gauri</FooterLink>
                    <FooterLink href="https://github.com/rrtyagii">Rishabh</FooterLink>
                    <FooterLink>Yeshwanth</FooterLink>
                </Column>


                <Column>
                    <Header> How we built it</Header>
                    <FooterLi>
                        MERN stack: MongoDB, Express, React, Node and a collection of libraries.
                    </FooterLi>
                </Column>


            </Row>
        </Container>
    </Box> );
}
 
export default Footer;
