import React from 'react';
import {connect} from 'react-redux';
import './App.scss';
// import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import { calcDebtAC } from './actions';
import reducer from './reducers';

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
      <p>Total cost is ${props.totalCost}.</p>
    </div>

      {/* <Footer /> */}
    </div>
  );
}

//Helper function that tells connector (below) which pieces of state we need.
const mapStateToProps = state => {
  return {
    totalCost: state.totalCost
    // INCLUDE THE REST OF THE USER TOTALS HERE AS PROPS
  }
}

//Connect will join this component with the state from Redux.
export default connect(
  mapStateToProps,
  {calcDebtAC }
  )(App);