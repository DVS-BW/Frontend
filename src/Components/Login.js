import React, {useState} from 'react';
import axios from 'axios';
import {getSessionAC} from '../actions/index'; 
import {connect} from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';

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
        axiosWithAuth().post('https://dvs-bw-lambda.herokuapp.com/api/auth/login', credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          props.history.push('/');
        console.log('Logged in! Result', res);
      })
      // .then(res => {
      //   axios.get('https://dvs-bw-lambda.herokuapp.com/api/calc')
      //   .then(res => {
      //     console.log(res);
      //     props.getSessionAC();
      //   })
      // })
      .catch(err => {
        console.log(err)
      })
      }
      

    return (
    // <div className="ui modal">

    //       {/* <i className="close icon"></i> */}
    //       <div className="header">
    //         Profile Picture
    //       </div>
          
    //     <div className="image content">
    //         <div className="ui medium image">
    //           <img src="/images/avatar/large/chris.jpg"/>
    //         </div>

    //         <div className="description">
    //           <div className="ui header">We've auto-chosen a profile image for you.</div>
    //           <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
    //           <p>Is it okay to use this photo?</p>
    //         </div>
    //     </div>

    //     <div className="actions">
    //       <div className="ui black deny button">
    //         Nope
    //       </div>
    //       <div className="ui positive right labeled icon button">
    //         Yep, that's me
    //         {/* <i class="checkmark icon"></i> */}
    //       </div>
    //     </div>

    //   </div>
      
      <div>

        {/* <div className="container">
          <div className="interior">
            <a className="btn" href="#open-modal">👋 Basic CSS-Only Modal</a>
          </div>
        </div>

          <div id="open-modal" className="modal-window">
            <div>
            <a href="#" title="Close" className="modal-close">Close</a>
               <div>
              <form onSubmit={loginHandler}>
                  <input name="username" type="text" value={credentials.username} onChange={changeHandler}></input>
                  <input name="password" type="password" value={credentials.password} onChange={changeHandler}></input>
                  <button type="submit">
                      Login
                  </button>
              </form>
              </div>
            </div>
          </div> */}

          <div className="login-div">

              <form onSubmit={loginHandler}>
                  <input name="username" type="text" value={credentials.username} onChange={changeHandler}></input>

                  <input name="password" type="password" value={credentials.password} onChange={changeHandler}></input>

                  <button type="submit">
                      Login
                  </button>
                  
              </form>
              
              </div>
              
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