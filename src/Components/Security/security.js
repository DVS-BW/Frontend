import React, {useState} from 'react';
import {Form, Field, withFormik, Formik} from 'formik';
import * as Yup from 'yup';
// import {calcDebtAC} from '../../actions';

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
    background:${props => props.primary};
    color:${props => props.secondary};`

const Label=styled.label`
    font-family:sans-serif;
    font-size:1.5rem;
    color:${props=>props.secondary};
    background: ${props => props.third};
`

const Security=styled.SecurityForm`
    font-family:sans-serif;
    font-size:1.5rem;
    color:${props=>props.primary};
    background:${props=>props.secondary};
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

            <DIVwrapper className='SecurityCosts'>
                <h4>Security Expenses</h4>
                <Security className='SecurityForm'>

                    <Label>Monthly Security Costs:
                        <Field
                        type='text'
                        className='Monthly_Security'
                        name='monthly_security'
                        placeholder='$ Ongoing Monthly Expense'
                        value={securityCost.monthly_security}
                        onChange={changeHandler}/>
                    </Label>

                    <Label>Phone Number Change:
                        <Field
                        type='text'
                        className='Phone'
                        name='phone_change'
                        placeholder='$ Cost to Change Phone #'
                        value={securityCost.phone_change}
                        onChange={changeHandler}/>
                    </Label>

                    <Label>Change Locks Cost:
                        <Field
                        type='text'
                        className='change_locks'
                        name='locks_change'
                        placeholder='Cost to change locks'
                        value={securityCost.locks_change}
                        onChange={changeHandler}/>
                    </Label>

                    <Label>Extra Security Cost:
                        <Field
                        type='text'
                        className='extra_security'
                        name='extra_security'
                        placeholder='Any Extra security measures needed'
                        value={securityCost.extra_security}
                        onChange={changeHandler}/>
                    </Label>

                    <Button type='submit' className='submitBTN'>Next</Button>
                </Security>
                
            </DIVwrapper>
            
        </Form>
        </Formik>
    )
}

export default SecurityCosts;