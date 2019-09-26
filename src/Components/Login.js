import React, {useState} from 'react';
import axios from 'axios';
import {getSessionAC} from '../actions/index'; 
import {connect} from 'react-redux';

const Login = props => {
    const [credentials, setCredentials] = useState({});

    const changeHandler = e => {
        console.log(credentials);
        setCredentials({
          ...credentials, 
          [e.target.name]: e.target.value,
        });
      }
      const loginHandler = e => {
        e.preventDefault();
        axios.post('https://dvs-bw-lambda.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        console.log('Logged in! Result', res);
        props.history.push('/');
      })
      .then(res => {
        axios.get('https://dvs-bw-lambda.herokuapp.com/api/calc')
        .then(res => {
          console.log(res);
          props.getSessionAC();
        })
      })
      .catch(err => {
        console.log(err)
      })
      }
      

    return (
        <div>
            <form onSubmit={loginHandler}>
                <input name="username" type="text" value={credentials.username} onChange={changeHandler}></input>
                <input name="password" type="password" value={credentials.password} onChange={changeHandler}></input>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )

}

//Helper function that tells connector (below) which pieces of state we need.
const mapStateToProps = state => {
  return {
    totalCost: state.totalCost, state: state
  }
}

//Connect will join this component with the state from Redux.
export default connect(
mapStateToProps,
{getSessionAC}
)(Login);