import React from 'react';
import './App.scss';
import styled from 'styled-components';
import SimpleTabs from './Components/Tabs/tabs.js'
// import Header from './components/Header/header';
import Footer from './Components/Footer/footer';

import Nav from './Components/Nav/nav';
import HealthCosts from './Components/Health/health';
// import Debt from './components/Debt/debt';
import FoodCosts from './Components/Food/food';
import SecurityCosts from './Components/Security/security';
import TransCosts from './Components/Transportation/transportation';
import Debt from '../src/Components/Debt/debt';










// styles

const MainStyles = styled.div`
    background:white;
    color:#fac8c8;
    font-family:sans-serif;
    font-size:1rem;
    padding:25px;
    margin:0 auto;
`


const App = props => {

  return (
    <MainStyles>
    <div className="App">
      {/* <Header /> */}
      <Nav/>

      <SimpleTabs/>

      <Footer />

    </div>
    </MainStyles>
  );
}
export default App;