import React, {useState} from 'react';
import {Form, Field, withFormik, Formik} from 'formik';
import styled from 'styled-components';

// const DVtheme = {
//     primary:'#800080',
//     secondary:'white',
//     third:'#2D182E',
// }

const Button =styled.button`
    font-family:sans-serif;
    font-size: 1.5rem;
    border:#2D182E;
    border-radius:25px;
    background: ${props => props.secondary};
    color: ${props=>props.third};
`
// const DIVwrapper= styled.FoodCosts`
//     font-family:sans-serif;
//     font-size:2rem;
//     border:none;
//     background:${props => props.primary};
//     color:${props => props.secondary};`

// const Label=styled.label`
//     font-family:sans-serif;
//     font-size:1.5rem;
//     color:${props=>props.secondary};
//     background: ${props => props.third};
// `

// const Transportation=styled.TransForm`
//     font-family:sans-serif;
//     font-size:1.5rem;
//     color:${props=>props.primary};
//     background:${props=>props.secondary};`

const TransCosts = props => {

    const [transCost, setTransCost]=useState({});

    const changeHandler = event => {
        setTransCost({
            ...transCost,
            isSecurityEditing: true,
            [event.target.name]: parseFloat(event.target.value)
    })} 

    return(
        <Formik>
        <Form onSubmit={(e) => {props.submitHandler(e, transCost)}}>

            {/* <DIVwrapper className='TransCosts'> */}
                <h4>Tranportation Expenses</h4>
                {/* <Transportation className='TransForm'> */}

                    <label>Monthly Transportation Costs:
                        <Field
                        type='text'
                        className='Monthly_Trans_Costs'
                        name='monthly_trans'
                        placeholder='$ Ongoing Monthly Expenses'
                        value={transCost.monthly_trans}
                        onChange={changeHandler}/>
                    </label>

                    <label>New Rent 
                        <Field
                        type='text'
                        className='Rent'
                        name='rent'
                        placeholder='$ New Rent Amount'
                        value={transCost.rent}
                        onChange={changeHandler}/>
                    </label>

                    <label>Utility Deposits
                        <Field
                        type='text'
                        className='utilities'
                        name='utilities'
                        placeholder='Cost to Start New Utilities'
                        value={transCost.utilities}
                        onChange={changeHandler}/>
                    </label>

                    <label>Moving Expenses
                        <Field
                        type='text'
                        className='moving'
                        name='moving'
                        placeholder='Any Moving Expenses'
                        value={transCost.moving}
                        onChange={changeHandler}/>
                    </label>

                    <Button type='submit' className='submitBTN'>Next</Button>
                {/* </Transportation> */}
                
            {/* </DIVwrapper> */}
            
        </Form>
        </Formik>
    )
}

export default TransCosts;