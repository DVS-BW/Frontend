import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

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
        // localStorage.setItem('token', res.data.payload);
        props.history.push('/');
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

export default Login;