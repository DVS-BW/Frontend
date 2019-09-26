import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// imports for components
import HealthCosts from '../Health/health';
import FoodCosts from '../Food/food';
import SecurityCosts from '../Security/security';
import TransCosts from '../Transportation/transportation';
import Debt from '../Debt/debt';


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

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const App = props =>{
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
    else if (item.isDebtEditing === true) {
      props.calcDebtAC(item);
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
      <TabPanel value={value} index={0}>
        Food 
        <FoodCosts 
      submitHandler={submitHandler}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Health
        <HealthCosts
      submitHandler={submitHandler}/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        Security
        <SecurityCosts 
      submitHandler={submitHandler} />
      </TabPanel>

      <TabPanel value={value} index={3}>
        Transportation
        <TransCosts 
      submitHandler={submitHandler} />
      </TabPanel>

      <TabPanel value={value} index={4}>
      <Debt submitHandler={submitHandler} />
      </TabPanel>
    </div>
  );
  }}}
