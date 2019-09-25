import React, {useState} from 'react';
import {Form, Field, withFormik, Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import styled from 'styled-components';
// import {calcDebtAC} from '../../actions';

const DVtheme = {
    primary:'#800080',
    secondary:'white',
    third:'#2D182E',
}

const Wrapper=styled.div`
    border:1px solid red;
    display:flex;
    display:inline-block;
    font-family:sans-serif;
    font-size:2rem;
    width:65%;
    height:250px;
`
const Input=styled.label`
    display:flex;
    display:block;
    font-family:sans-serif;
    font-size:1rem;
    width:100%;
`

const Formcard=styled.div`
    border:1px solid red;
`

const Btn =styled.button`
    font-family:sans-serif;
    font-size:.75rem;
    border:#2D182E;
    border-radius:25px;
    background: ${props => props.secondary};
    color: ${props=>props.third};
`


const SecurityCosts = props => {

    const [securityCost, setSecurityCost]=useState({});

    const changeHandler = event => {
        setSecurityCost({
            ...securityCost,
            isSecurityEditing: true,
            [event.target.name]: parseFloat(event.target.value)
    })} 

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