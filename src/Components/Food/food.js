import React from 'react';
import Formik, {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';


function FoodCosts(){
    const [foodCosts, setFoodCosts]=useState(0);
    return(
        <Form>
            <div className='Food-Costs'>
                <h4>Food Expenses</h4>
                <div className='Food-Form'>
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

                <button type='submit' className='submitBTN'>Next</button>
                </div>
                
            </div>
            
        </Form>
    )
}

export default FoodCosts;


<Form>
            

            <button type='submit'>Next</button>
        </Form>