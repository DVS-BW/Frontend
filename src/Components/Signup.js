import React, {useState} from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const Signup = props => {

    const [credentials, setCredentials] = useState({});

    const changeHandler = e => {
        console.log(credentials);
        setCredentials({
          ...credentials, 
          [e.target.name]: e.target.value,
        });
      }

    const signupHandler = e => {
        e.preventDefault();
        axiosWithAuth().post('https://dvs-bw-lambda.herokuapp.com/api/auth/register', credentials)
      .then(res => {
          console.log('Logged in result', res);
      })
      .catch(err => {
        console.log(err)
      })
      }
    

    return (
        <div className="signup-div">
            <form onSubmit={signupHandler}>
                <label>Username: 
                <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={changeHandler}
                >
                </input>
                </label>

                <label>Password: 
                <input
                type="password"
                name='password'
                value={credentials.password}
                onChange={changeHandler}>
                </input>
                </label>

                {/* <label>Email: 
                <input
                type="email"
                name='email'
                value={credentials.email}
                onChange={changeHandler}>
                </input>
                </label> */}

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Signup;