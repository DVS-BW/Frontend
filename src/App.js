import React from 'react';
import {connect} from 'react-redux';
import './App.scss';
import styled from 'styled-components';
// import * as Tabs from './Components/Tabs/tabs.js'
// import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import Nav from './components/Nav/nav';
import { calcDebtAC } from './actions';
import HealthCosts from './components/Health/health';
// import Debt from './components/Debt/debt';
import FoodCosts from './components/Food/food';
import SecurityCosts from './components/Security/security';
import TransCosts from './components/Transportation/transportation';


import { calcSecurityAC, calcHealthAC, calcFoodAC, calcTransAC } from './actions';










// styles

const Total=styled.h1`
    height:150px;
    display:flex;
    justify-content:center;
    padding-top:75px;
    font-size:2.5rem;
    font-family:sans-serif;
`
const MainStyles = styled.div`
    background:white;
    color:#800080;
    font-family:sans-serif;
    font-size:2rem;
    border: 1px solid green;
`


const App = props => {
  
  const submitHandler = (e, item) => {
    console.log('made it to SubmitHandler', item)
    e.preventDefault();
    if (item.isHealthEditing === true ) {
      props.calcHealthAC(item);
    }
    else if (item.isSecurityEditing === true) {
      props.calcSecurityAC(item);
    }
    else if (item.isFoodEditing === true) {
      props.calcFoodAC(item);
    }
    else if (item.isTransEditing === true) {
      props.calcTransAC(item);
    }
  }

  return (
    <MainStyles>
    <div className="App">

      {/* <Tabs/> */}
      


      {/* <Header /> */}
      <Nav />


      

      <FoodCosts 
      submitHandler={submitHandler}/>

 

      <HealthCosts
      submitHandler={submitHandler}/>

      <SecurityCosts 
      submitHandler={submitHandler} />

      <TransCosts 
      submitHandler={submitHandler} />

    <div>
      <Total>Total cost is ${props.totalCost}.</Total>
      {/* <div>{props.obj.monthly_security} {props.obj.phone_change}</div> */}
    </div>

      <Footer />

    </div>
    </MainStyles>
  );
}

//Helper function that tells connector (below) which pieces of state we need.
const mapStateToProps = state => {
  return {
    totalCost: state.totalCost,
    obj: state.security
  }
}

//Connect will join this component with the state from Redux.
export default connect(
  mapStateToProps,
  {calcSecurityAC, calcHealthAC, calcFoodAC, calcTransAC }
  )(App);