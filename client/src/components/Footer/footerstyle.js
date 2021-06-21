import styled from 'styled-components';

export const Box = styled.div`
    background: black; 
    padding: 20px 15px; 
    position: absolute; 
    bottom: 0; 
    left: 0; 
    width: 100%; 

    @media (min-width: 1000px){
        padding: 18px 8px
    }
`; 

export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    max-width: 1000px
    margin: 0 auto; 
`;

export const Column = styled.div`
    display: flex; 
    flex-direction: column; 
    text-align: left; 
    margin-left: 70px 
`; 

export const Header = styled.div`
    font-size: 21px; 
    color: #fff; 
    margin-bottom: 8px; 
    font-weight: bold; 
`; 

export const Row = styled.div`
    display: grid; 
    grid-template-columns: repeat( auto-fill,  minmax(185px, 1fr) );
    grid-gap: 10px; 

    @media (max-width: 1000px){
        grid-template-columns: repeat( auto-fill,  minmax(200px, 1fr) );
    }
`; 

export const FooterLink = styled.a`
    color: #fff; 
    margin-bottom: 6px; 
    font-size: 15px; 
    text-decoration: none; 

    &:hover{
        color: red; 
        transition: 200ms ease-in; 
    }
`; 

// export default {Box, Container, Header, Row, FooterLink, Column}; 
