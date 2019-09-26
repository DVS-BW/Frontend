import React, { useState } from 'react';
import { Form, Field, withFormik, Formik } from 'formik';
import axios from 'axios';
// import * as Yup from 'yup';


function Debt(props) {
    const [debt, setDebt] = useState([]);

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
            console.log(event.target.value);
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
            name='credit card'
            placeholder='$ Credit Card'
            onChange={changeHandler}/>
                        
            </label>
        <label>Personal Loan {" "}
        <Field
            className='input'
            type='text'
            name='Personal Loan'
            placeholder='$ Personal Loan'
            onChange={changeHandler}/>
                        
            </label>
        <label> Car Loan {" "}
        <Field
            className='input'
            type='text'
            name='Personal Loan'
            placeholder='$ Car Loan'
            onChange={changeHandler}/>
                        
            </label>
        
        <label> Mortgage {" "}
        <Field
            className='input'
            type='text'
            name='Mortgage'
            placeholder='$ Mortgage'
            onChange={changeHandler}/>
                        
            </label>
        <label>student loans {" "}
        <Field
            type='text'
            className='input'
            name='Student loans'
            placeholder='$ Student Loans'
            onChange={changeHandler}/>
            </label>
            <label> Other {" "}
            <Field
            className='input'
            type='text'
            name='other'
            placeholder='$ other'
            onChange={changeHandler}/>
                        
            </label>
            
            </div>
                <h4> NEXT </h4>
                <h1>total Cost is $0</h1> 
            </Form>
        </Formik>
    )
}






export default Debt;