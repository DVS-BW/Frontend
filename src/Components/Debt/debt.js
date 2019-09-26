import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import {connect} from 'react-redux';
import axios from 'axios';
// import * as Yup from 'yup';


function Debt(props) {
    const [debt, setDebt] = useState({});

    const changeHandler = event => {

        let val = parseFloat(event.target.value);
        if(isNaN(val)) {
            setDebt({[event.target.name]: ''})
        }
        else {
            setDebt({
                ...debt,
                isDebtEditing: true,
                [event.target.name]: val
            })};
    }

    const sendData = () => {
        console.log(props.state);
        axios.put('https://dvs-bw-lambda.herokuapp.com/api/calc', props.state)
        .then(res => {
            console.log('Data was saved successfully. Result', res);
            props.history.push('/');
        })
        .catch(err => {
            console.log('Sorry but you have to be logged in!', err)
        })
    }

    return (
        <Formik className='debt'> 
        <Form onSubmit={(e) => { props.submitHandler(e, debt) }} >
        <h1> Debt </h1>

        <div className='container'>

        <label>Credit Card {" "}
        <Field
            type='text'
            className='input'
            name='credit_card'
            value={debt.credit_card}
            placeholder='$ Credit Card'
            onChange={changeHandler}/>
                        
        </label>

        <label>Personal Loan {" "}
        <Field
            className='input'
            type='text'
            name='personal_loan'
            value={debt.personal_loan}
            placeholder='$ Personal Loan'
            onChange={changeHandler}/>
                        
            </label>

        <label> Car Loan {" "}
        <Field
            className='input'
            type='text'
            name='car_loan'
            value={debt.car_loan}
            placeholder='$ Car Loan'
            onChange={changeHandler}/>
                        
            </label>
        
        <label> Mortgage {" "}
        <Field
            className='input'
            type='text'
            name='mortgage'
            value={debt.mortgage}
            placeholder='$ Mortgage'
            onChange={changeHandler}/>
                        
            </label>
        <label>student loans {" "}
        <Field
            type='text'
            className='input'
            name='student_loans'
            value={debt.student_loans}
            placeholder='$ Student Loans'
            onChange={changeHandler}/>
            </label>

            <label> Other {" "}
            <Field
            className='input'
            type='text'
            name='other'
            value={debt.other}
            placeholder='$ other'
            onChange={changeHandler}/>
                        
            </label>
            
           
                <button type='submit' className='submitBTN' onClick={sendData}>Submit</button>
                </div>
            </Form>
        </Formik>
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
{}
)(Debt);