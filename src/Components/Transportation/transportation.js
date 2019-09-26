import React, {useState} from 'react';
import {Form, Field, Formik} from 'formik';
import styled from 'styled-components';

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

const TransCosts = props => {

    const [transCost, setTransCost]=useState({});

    const changeHandler = event => {
        let val = parseFloat(event.target.value);
        if (isNaN(val)) {
            setTransCost({[event.target.name]: ''})
        }
        else {
        setTransCost({
            ...transCost,
            isTransEditing: true,
            [event.target.name]: val
    })} 
}

    return(
        <Formik>
        <Form onSubmit={(e) => {
            props.submitHandler(e, transCost);
            setTransCost({});
            }}>

            <Wrapper className='TransCosts'>
                <h4>Tranportation Expenses</h4>
                <Formcard className='TransForm'>

                    <Input>Monthly Transportation Costs:
                        <Field
                        type='text'
                        className='Monthly_Trans_Costs'
                        name='monthly_trans'
                        placeholder='$ Ongoing Monthly Expenses'
                        value={transCost.monthly_trans}
                        onChange={changeHandler}/>
                    </Input>

                    <Input>New Rent 
                        <Field
                        type='text'
                        className='Rent'
                        name='rent'
                        placeholder='$ New Rent Amount'
                        value={transCost.rent}
                        onChange={changeHandler}/>
                    </Input>

                    <Input>Utility Deposits
                        <Field
                        type='text'
                        className='utilities'
                        name='utilities'
                        placeholder='Cost to Start New Utilities'
                        value={transCost.utilities}
                        onChange={changeHandler}/>
                    </Input>

                    <Input>Moving Expenses
                        <Field
                        type='text'
                        className='moving'
                        name='moving'
                        placeholder='Any Moving Expenses'
                        value={transCost.moving}
                        onChange={changeHandler}/>
                    </Input>


                    <Btn type='submit' className='submitBTN'>Next</Btn>
                </Formcard>            
            </Wrapper>
            
        </Form>
        </Formik>
    )
}

export default TransCosts;