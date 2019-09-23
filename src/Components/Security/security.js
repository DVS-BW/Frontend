import React from 'react';
import Formik, {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';


function SecurityCosts(){
    return(
        <Form>
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
        </Form>
    )
}

export default SecurityCosts;