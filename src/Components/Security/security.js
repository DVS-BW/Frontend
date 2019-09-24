import React, {useState} from 'react';
import {Form, Field, withFormik, Formik} from 'formik';
import * as Yup from 'yup';


function SecurityCosts(){
    const [securityCost, setSecurityCost]=useState(0);

    return(
        <Formik>
        <Form>
            <div className='Security-Costs'>
                <h4>Security Expenses</h4>
                <div className='Security-Form'>
                Monthly Security Costs:
                    <Field
                    type='text'
                    className='Monthly-Security'
                    name='Monthly-Security'
                    placeholder='$ Ongoing Monthly Expense'></Field>

                Phone Number Change:
                    <Field
                    type='text'
                    className='Phone'
                    placeholder='$ Cost to Change Phone #'></Field>

                Change Locks Cost:
                    <Field
                    type='text'
                    className='change-locks'
                    placeholder='Cost to change locks'></Field>

                Extra Security Cost:
                    <Field
                    type='text'
                    className='extra-security'
                    placeholder='Any Extra security measures needed'></Field>

                    <button type='submit' className='submitBTN'>Next</button>
                </div>
                
            </div>
            
        </Form>
        </Formik>
    )
}

export default SecurityCosts;