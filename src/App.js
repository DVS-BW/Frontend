import React from 'react';
import {connect} from 'react-redux';
import './App.scss';
// import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import { calcDebtAC } from './actions';

// import Debt from './components/Debt/debt';
// import Food from './components/Food/food';
// import Health from './components/Health/health';
import SecurityCosts from './components/Security/security';

// import Footer from './components/Footer/footer';


const App = props => {
  
  const submitHandler = (e, securityCost) => {
    e.preventDefault();
    props.calcDebtAC(securityCost);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <Nav />

      {/* <Debt /> */}
      {/* <Food /> */}
      {/* <Health /> */}

      <SecurityCosts calcDebtAC={props.calcDebtAC} 
      submitHandler={submitHandler} />

    <div>
      {/* <h1>Total cost is ${props.totalCost}.</h1>
      <div>{props.obj.monthly_security} {props.obj.phone_change}</div> */}
    </div>

      {/* <Footer /> */}
    </div>
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
  {calcDebtAC }
  )(App);