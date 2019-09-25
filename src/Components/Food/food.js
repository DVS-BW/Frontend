import React, {useState} from 'react';
import {Formik, Form, Field, withFormik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

const DVtheme = {
    primary:'#800080',
    secondary:'white',
    third:'#2D182E',
}

const Wrapper=styled.div`
    border:1px solid blue;
    display:flex;
    display:inline-block;
    font-family:sans-serif;
    font-size:2rem;
    text-decoration:underline;
    width:65%;
    height:515px;
`
const Input=styled.label`
    display:flex;
    display:block;
    font-family:sans-serif;
    font-size:1rem;
    width:100%;
    height:75px;
    padding:5px;
`

const Formcard=styled.div`
    border:1px solid red;
    height:75px;
`

const Btn =styled.button`
    font-family:sans-serif;
    font-size:1rem;
    border:1px solid black;
    width:15%;
    border-radius:25px;
    background: ${props => props.primary};
    color: ${props=>props.secondary};
`


const FoodCosts = props => {
    const [foodCost, setFoodCost]=useState({});
    console.log(foodCost);

    const changeHandler = event =>{
        console.log(event.target.value);
        setFoodCost({...foodCost,
            isFoodEditing: true, 
            [event.target.name]: parseFloat(event.target.value)
        })}

    return(
        <Formik>
        <Form onSubmit={(e) => {props.submitHandler(e, foodCost)}}>
            <Wrapper primary className='FoodCosts'>
                <h4>Food Expenses</h4>
                <Formcard className='FoodForm'>
                <Input> Monthly Food Expenses:
                    <Field
                    type='text'
                    className='Monthly-costs'
                    name='monthly_costs'
                    placeholder='$ Ongoing Monthly Expense'
                    value={foodCost.monthly_costs}
                    onChange={changeHandler}/>
                </Input>

                <Input>One Time Stock Up Expense:
                    <Field
                    type='text'
                    className='Stock-up'
                    name='stock_up'
                    placeholder='$ One time cost to stock up'
                    value={foodCost.stock_up}
                    onChange={changeHandler}/>
                </Input>

                <Input>Dine Out Expense:
                    <Field
                    type='text'
                    className='DineOut'
                    name='dineout'
                    placeholder='Monthly Dining Cost'
                    value={foodCost.dineout}
                    onChange={changeHandler}/>
                </Input>     
                <Btn type='submit'>Next</Btn>
                </Formcard>
            </Wrapper>
            
        </Form>
        </Formik>
    )
}

export default FoodCosts;


