import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
// imports for components
import HealthCosts from '../Health/health';
import FoodCosts from '../Food/food';
import SecurityCosts from '../Security/security';
import TransCosts from '../Transportation/transportation';
import Debt from '../Debt/debt';
import { calcSecurityAC, calcHealthAC, calcFoodAC, calcTransAC, calcDebtAC } from '../../actions';
import {connect} from 'react-redux';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}
const Total=styled.h1`
    height: 20px;
    display:flex;
    justify-content:center;
    padding-top:15px;
    font-size:2.5rem;
    font-family:sans-serif;
`

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:theme.palette.background.paper,
    
  },
}));

const SimpleTabs = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//Add a new Action --> after a successful log-in, push the new data into Redux to replace InitialState.

const submitHandler = (e, item) => {
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
    else if (item.isDebtEditing === true) {
      props.calcDebtAC(item);
    }
  }
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="DVS calculator">
          <Tab label="Food" {...a11yProps(0)} />
          <Tab label="Health" {...a11yProps(1)} />
          <Tab label="Security" {...a11yProps(2)} />
          <Tab label="Transportation" {...a11yProps(3)} />
          <Tab label="Debt" {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      
      <Total>Total cost is ${props.totalCost}.</Total>
      
      <TabPanel value={value} index={0}>
         
        <FoodCosts 
      submitHandler={submitHandler} handleChange={handleChange}  setValue={setValue}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        
        <HealthCosts
      submitHandler={submitHandler} handleChange={handleChange} setValue={setValue}/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        
        <SecurityCosts 
      submitHandler={submitHandler} handleChange={handleChange}/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        
        <TransCosts 
      submitHandler={submitHandler} handleChange={handleChange}/>
      </TabPanel>

      <TabPanel value={value} index={4}>
      <Debt submitHandler={submitHandler} handleChange={handleChange}/>
      </TabPanel>
      
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
  {calcSecurityAC, calcHealthAC, calcFoodAC, calcTransAC, calcDebtAC }
  )(SimpleTabs);