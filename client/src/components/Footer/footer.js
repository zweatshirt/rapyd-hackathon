import React from 'react'; 

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Header,
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
                    <Header>GRYZZLY</Header>
                    <FooterLink href="https://github.com/zweatshirt/rapyd-hackathon">Github Repo</FooterLink>
                </Column> 

                <Column>
                    <Header>Team</Header>
                    <FooterLink href="https://github.com/zweatshirt">Zachery</FooterLink>
                    <FooterLink >Gauri</FooterLink>
                    <FooterLink href="https://github.com/rrtyagii">Rishabh</FooterLink>
                    <FooterLink>Yeshwanth</FooterLink>
                </Column>

                <Column>
                    <Header> What it does</Header>
                    <FooterLink>
                        Just some random text to fillup the third column
                    </FooterLink>
                </Column>

                <Column>
                    <Header> What it does</Header>
                    <FooterLink>
                        Just some random text to fillup the third column
                    </FooterLink>
                </Column>


            </Row>
        </Container>
    </Box> );
}
 
export default Footer;
