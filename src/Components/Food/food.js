import React from 'react';
import Formik, {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';

const DVtheme = {
    primary:'#800080',
    secondary:'white',
    third:'#2D182E',
}

const label=styled.label`
font-family:sans-serif, serif;
color:#b865b8;
font-size:2.5rem;

`


function FoodCosts(){
    const [foodCosts, setFoodCosts]=useState(0);
    return(
        <ThemeProvider theme={DVtheme}>
        <Form>
            <div className='Food-Costs'>
                <h4>Food Expenses</h4>
                <div className='Food-Form'>
                <label> Monthly Food Expenses:
                    <Field
                    type='text'
                    className='Monthly-costs'
                    name='Monthly-Costs'
                    placeholder='$ Ongoing Monthly Expense'/>
                </label>

                <label>One Time Stock Up Expense:
                    <Field
                    type='text'
                    className='Stock-up'
                    placeholder='$ One time cost to stock up'/>
                </label>

                <label>Dine Out Expense:
                    <Field
                    type='text'
                    className='DineOut'
                    placeholder='Monthly Dining Cost'/>
                </label>

                <button type='submit' className='submitBTN'>Next</button>
                </div> 
                
            </div>
            
        </Form>
        </ThemeProvider>
    )
}

export default FoodCosts;


<Form>
            

            <button type='submit'>Next</button>
        </Form>