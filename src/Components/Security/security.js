import React, {useState} from 'react';
import {Form, Field, Formik} from 'formik';
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
    border:1px solid red;
    height:75px;
`

const Btn =styled.button`
    font-family:sans-serif;
    font-size:1rem;
    border:1px solid black;
    width:15%;
    border-radius:25px;

`


const SecurityCosts = props => {

    const [securityCost, setSecurityCost]=useState({});

    const changeHandler = event => {
        let val = parseFloat(event.target.value);
        if (isNaN(val)) {
            setSecurityCost({[event.target.name]: ''})
        }
        else {
            setSecurityCost({
                ...securityCost,
                isSecurityEditing: true,
                [event.target.name]: val
        })}
    }
     

    return(
        <Formik>
        <Form onSubmit={(e) => {props.submitHandler(e, securityCost)}}>

            <Wrapper className='SecurityCosts'>
                <h4>Security Expenses</h4>
                <Formcard className='SecurityForm'>

                    <Input>Monthly Security Costs:
                        <Field
                        type='text'
                        className='Monthly_Security'
                        name='monthly_security'
                        placeholder='$ Ongoing Monthly Expense'
                        value={securityCost.monthly_security}
                        onChange={changeHandler}/>
                    </Input>

                    <Input>Phone Number Change:
                        <Field
                        type='text'
                        className='Phone'
                        name='phone_change'
                        placeholder='$ Cost to Change Phone #'
                        value={securityCost.phone_change}
                        onChange={changeHandler}/>
                    </Input>

                    <Input>Change Locks Cost:
                        <Field
                        type='text'
                        className='change_locks'
                        name='locks_change'
                        placeholder='Cost to change locks'
                        value={securityCost.locks_change}
                        onChange={changeHandler}/>
                    </Input>

                    <Input>Extra Security Cost:
                        <Field
                        type='text'
                        className='extra_security'
                        name='extra_security'
                        placeholder='Any Extra security measures needed'
                        value={securityCost.extra_security}
                        onChange={changeHandler}/>
                    </Input>

                    <Btn type='submit' className='submitBTN'>Next</Btn>
                </Formcard>
                
            </Wrapper>
            
        </Form>
        </Formik>
    )
}

export default SecurityCosts;