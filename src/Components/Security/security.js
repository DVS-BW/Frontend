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

                    <label>Monthly Security Costs:
                        <Field
                        type='text'
                        className='Monthly-Security'
                        name='Monthly-Security'
                        placeholder='$ Ongoing Monthly Expense'/>
                    </label>

                    <label>Phone Number Change:
                        <Field
                        type='text'
                        className='Phone'
                        placeholder='$ Cost to Change Phone #'/>
                    </label>

                    <label>Change Locks Cost:
                        <Field
                        type='text'
                        className='change-locks'
                        placeholder='Cost to change locks'/>
                    </label>

                    <label>Extra Security Cost:
                        <Field
                        type='text'
                        className='extra-security'
                        placeholder='Any Extra security measures needed'/>
                    </label>

                    <button type='submit' className='submitBTN'>Next</button>
                </div>
                
            </div>
            
        </Form>
        </Formik>
    )
}

export default SecurityCosts;