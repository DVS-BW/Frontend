import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
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
            
           
                <button type='submit' className='submitBTN'>Next</button>
                </div>
            </Form>
        </Formik>
    )
}






export default Debt;