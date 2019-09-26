import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
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
    color:white;
    background:#800080;
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
    height:75px;
    padding:15px;
    font-size:2.5rem;
`

const Btn =styled.button`
    font-family:sans-serif;
    font-size:1rem;
    border:1px solid black;
    width:15%;
    border-radius:25px;
`


const FoodCosts = props => {

    const [foodCost, setFoodCost]=useState({});

    const changeHandler = event => {
        let val = parseFloat(event.target.value);
        if (isNaN(val)) {
            setFoodCost({[event.target.name]: ''})
        }
        else {
        setFoodCost({
            ...foodCost,
            isFodEditing: true,
            [event.target.name]: val
    })} 
} 

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

                <Formcard>
                <Input>One Time Stock Up Expense:
                    <Field
                    type='text'
                    className='Stock-up'
                    name='stock_up'
                    placeholder='$ One time cost to stock up'
                    value={foodCost.stock_up}
                    onChange={changeHandler}/>
                </Input>
                </Formcard>
                

                <Formcard>
                <Input>Dine Out Expense:
                    <Field
                    type='text'
                    className='DineOut'
                    name='dineout'
                    placeholder='Monthly Dining Cost'
                    value={foodCost.dineout}
                    onChange={changeHandler}/>
                </Input> 
                </Formcard>    
                <Btn type='submit'>Next</Btn>
                
                </Formcard>
            </Wrapper>
            
        </Form>
        </Formik>
       )
}

export default FoodCosts;


