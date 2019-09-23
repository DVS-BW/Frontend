import React from 'react';
import {connect} from 'react-redux';
import './App.scss';
// import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import { calcDebtAC } from './actions';

// import Debt from './components/Debt/debt';
// import Food from './components/Food/food';
// import Health from './components/Health/health';
// import Security from './components/Security/security';

// import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Nav />

      {/* <Debt /> */}
      {/* <Food /> */}
      {/* <Health /> */}
      {/* <Security /> */}

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