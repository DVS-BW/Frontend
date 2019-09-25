import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik, Formik } from 'formik';
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
    color: ${props=>props.secondary};`

const HealthCosts = props => {
    const [healthCost, setHealthCost] = useState({});

    const changeHandler = event => {
        let val = parseFloat(event.target.value);
        if (isNaN(val)) {
            setHealthCost({[event.target.name]: ''})
        }
        else {
        setHealthCost({
            ...healthCost,
            isHealthEditing: true,
            [event.target.name]: val
    })} 
}

    return (
        <Formik>
            <Form onSubmit={(e) => {props.submitHandler(e, healthCost)}}>


                <Wrapper className='Health-Costs'>
                    <h4>Health Expenses</h4>
                    <Formcard className='Health-Form'>
                    <Input> Monthly Health Expenses: 
                        <Field
                            type='text'
                            className='Monthly-Health-Expenses'
                            name='monthly_health_expenses'
                            value={healthCost.monthly_health_expenses}
                            placeholder='$ Ongoing Health Expenses'
                            onChange={changeHandler}/>
                    </Input>

                    <Input> Monthly Medication Costs: 
                        <Field
                            type='text'
                            className='Medication-Costs'
                            name='medication_costs'
                            value={healthCost.medication_costs}
                            placeholder='Monthly Medication Costs'
                            onChange={changeHandler}/>
                    </Input>

                    <Form onSubmit={(e) => {props.submitHandler(e, healthCost)}}>


                    <Input> Monthly Health Insurance Costs: 
                        <Field
                            type='text'
                            className='Health-Insurance-Costs'
                            name='health_insurance_costs'
                            value={healthCost.health_insurance_costs}
                            placeholder='Monthly Health Insurance Costs'
                            onChange={changeHandler}/>
                    </Input>

                    <Input> Other Miscellaneous Monthly Expenses: 
                        <Field
                            type='text'
                            className='Miscellaneous-Expenses'
                            name='miscellaneous_expenses'
                            value={healthCost.miscellaneous_expenses}
                            placeholder='Monthly Miscellaneous Health Expenses'
                            onChange={changeHandler}/>
                    </Input>

                    <Btn type='submit' className='submitBTN'>Next</Btn>
                    </Form>
                </Formcard>
            </Wrapper>
        </Form>
        </Formik>
    )
}


export default HealthCosts;