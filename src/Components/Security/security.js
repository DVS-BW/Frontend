import React, {useState} from 'react';
import {Form, Field, withFormik, Formik} from 'formik';
import * as Yup from 'yup';
// import {calcDebtAC} from '../../actions';



const SecurityCosts = props => {

    const [securityCost, setSecurityCost]=useState({});
    console.log(securityCost);

    const changeHandler = event => {
        console.log(event.target.value);
        setSecurityCost({
            ...securityCost,
            [event.target.name]: parseFloat(event.target.value)
    })} 

    // const submitHandler = e => {
    //     e.preventDefault();
    //      calcDebtAC();
    //   }

    return(
        <Formik>
        <Form onSubmit={(e) => {props.submitHandler(e, securityCost)}}>

            <div className='Security-Costs'>
                <h4>Security Expenses</h4>
                <div className='Security-Form'>

                    <label>Monthly Security Costs:
                        <Field
                        type='text'
                        className='Monthly_Security'
                        name='monthly_security'
                        placeholder='$ Ongoing Monthly Expense'
                        value={securityCost.monthly_security}
                        onChange={changeHandler}/>
                    </label>

                    <label>Phone Number Change:
                        <Field
                        type='text'
                        className='Phone'
                        name='phone_change'
                        placeholder='$ Cost to Change Phone #'
                        value={securityCost.phone_change}
                        onChange={changeHandler}/>
                    </label>

                    <label>Change Locks Cost:
                        <Field
                        type='text'
                        className='change_locks'
                        name='locks_change'
                        placeholder='Cost to change locks'
                        value={securityCost.locks_change}
                        onChange={changeHandler}/>
                    </label>

                    <label>Extra Security Cost:
                        <Field
                        type='text'
                        className='extra_security'
                        name='extra_security'
                        placeholder='Any Extra security measures needed'
                        value={securityCost.extra_security}
                        onChange={changeHandler}/>
                    </label>

                    <button type='submit' className='submitBTN'>Next</button>
                </div>
                
            </div>
            
        </Form>
        </Formik>
    )
}

export default SecurityCosts;