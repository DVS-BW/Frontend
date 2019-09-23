import React from 'react';
import Formik, {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';


function FoodCosts(){
    return(
        <Form>
            <Field
            type='text'
            className='Monthly-costs'
            name='Monthly-Costs'
            placeholder='$ Ongoing Monthly Expense'>Monthly Food Costs:</Field>

            <Field
            type='text'
            className='Stock-up'
            placeholder='$ One time cost to stock up'>Stock Up Cost:</Field>

            <Field
            type='text'
            className='DineOut'
            placeholder='Monthly Dining Cost'>Dine Out Cost:</Field>

            <button type='submit'>Next</button>
        </Form>
    )
}

export default FoodCosts;
