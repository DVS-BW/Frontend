import React from 'react';
import Formik, {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';

const DVtheme = {
    primary:'#800080',
    secondary:'white',
    third:'#2D182E',
}

const Button =styled.button`
    font-family:sans-serif;
    font-size: 1.5rem;
    border:#2D182E;
    border-radius:25px;
    background: ${props => props.secondary};
    color: ${props=>props.third};
`
const DIVwrapper= styled.FoodCosts`
    font-family:sans-serif;
    font-size:2rem;
    border:none;
    background:${props => props.secondary};
    color:${props => props.third};
`
const Food=styled.FoodForm`
    font-family:sans-serif;
    font-size:1.5rem;
    color:${props=>props.primary};
    background:${props=>props.secondary};
`

const FoodCosts = props => {
    const [foodCosts, setFoodCosts]=useState({});
    console.log(foodCosts);

    const changeHandler = event =>{
        console.log(event.target.value);
        setFoodCosts({...foodCosts, [event.target.name]:parseFloat(event.target.value)
        })}

    return(
        <Formik>
            <ThemeProvider theme={DVtheme}>
        <Form>
            <DIVwrapper primary className='FoodCosts'>
                <h4>Food Expenses</h4>
                <Food className='FoodForm'>
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
                <Button type='submit'>Next</Button>
                </Food>
            </DIVwrapper>
            
        </Form>
        </ThemeProvider>
        </Formik>
    )
}

export default FoodCosts;


