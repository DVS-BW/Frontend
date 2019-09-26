import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Signup from '../Signup';
import Login from '../Login';


//Styled Components

const Container = styled.div`
    height: 100px;
`
const CopyRight = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 45px;
`

const MiniNav = styled.div`
    display: flex;
    justify-content: space-between;
    
`



const Footer = () => {
    
    return (
        <Router>
            <Container>
                <MiniNav>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign-Up</Link>
                        <Link to="#">About</Link>
                        <Link to="#">Support</Link>
                </MiniNav>
                <CopyRight>Copyright DVS</CopyRight>
            </Container>
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
        </Router>
    )
}


export default Footer;