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
font-size:2.5rem;`

const FoodCosts = props => {
    const [foodCosts, setFoodCosts]=useState({});
    console.log(foodCosts);

    const changeHandler = event =>{
        console.log(event.target.value);
        setFoodCosts({...foodCosts, [event.target.name]:parseFloat(event.target.value)
        })}

    return(
        <Formik>
        <Form>
            <div className='Food-Costs'>
                <h4>Food Expenses</h4>
                <div className='Food-Form'>
                <label> Monthly Food Expenses:
                    <Field
                    type='text'
                    className='Monthly-costs'
                    name='Monthly_Costs'
                    placeholder='$ Ongoing Monthly Expense'
                    value={foodCosts.monthly_Costs}
                    onChange={changeHandler}/>
                </label>

                <label>One Time Stock Up Expense:
                    <Field
                    type='text'
                    className='Stock-up'
                    name='Stock_up'
                    placeholder='$ One time cost to stock up'
                    value={foodCosts.Stock_up}
                    onChange={changeHandler}/>
                </label>

                <label>Dine Out Expense:
                    <Field
                    type='text'
                    className='DineOut'
                    name='dineout'
                    placeholder='Monthly Dining Cost'
                    value={foodCosts.dineout}
                    onChange={changeHandler}/>
                </label>

                <button type='submit' className='submitBTN'>Next</button>
                </div>
                
            </div>
            
        </Form>
        </Formik>
    )
}

export default FoodCosts;


<Form>
            

            <button type='submit'>Next</button>
        </Form>