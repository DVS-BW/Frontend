import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Signup from '../Signup';
import Login from '../Login';

const Nav = () => {
    return (
        <Router>
        <div className='navbar'>
            <div>
                Calculator Resource for Domestic Violence Survivors 
            </div>
            <ul>
                <Link to="/login"><li>Log In</li></Link>
                <Link to="/signup"><li>Sign-Up</li></Link>
                <li>About</li>
                <li>Support</li>
             </ul>   
             
        </div>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        </Router>
    )
}

export default Nav;