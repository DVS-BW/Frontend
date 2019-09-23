import React, {useState} from 'react';
import Formik, {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';


function SecurityCosts(){
    const [foodCost, setFoodCost]=useState(0);
    return(
        <Form>
            <div className='Security-Costs'>
                <h4>Security Expenses</h4>
                <div className='Security-Form'>
                    <Field
                    type='text'
                    className='Monthly-Security'
                    name='Monthly-Security'
                    placeholder='$ Ongoing Monthly Expense'>Monthly Security Costs:</Field>

                    <Field
                    type='text'
                    className='Phone'
                    placeholder='$ Cost to Change Phone #'>Phone Number Change:</Field>

                    <Field
                    type='text'
                    className='change-locks'
                    placeholder='Cost to change locks'>Change Locks Cost:</Field>

                    <Field
                    type='text'
                    className='extra-security'
                    placeholder='Any Extra security measures needed'>Extra Security Cost:</Field>

                    <button type='submit' className='submitBTN'>Next</button>
                </div>
                
            </div>
            
        </Form>
    )
}

export default SecurityCosts;