import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik, Formik } from 'formik';
import * as Yup from 'yup';

const HealthCosts = props => {
    const [healthCost, setHealthCost] = useState({});

    const changeHandler = event => {
        console.log(healthCost);
        setHealthCost({
            ...healthCost,
            isHealthEditing: true,
            [event.target.name]: parseFloat(event.target.value)
    })} 

    return (
        <Formik>
            <Form onSubmit={(e) => {props.submitHandler(e, healthCost)}}>

                <div className='Health-Costs'>
                    <h4>Health Expenses</h4>
                    <div className='Health-Form'>
                    <label> Monthly Health Expenses: 
                        <Field
                            type='text'
                            className='Monthly-Health-Expenses'
                            name='monthly_health_expenses'
                            value={healthCost.monthly_health_expenses}
                            placeholder='$ Ongoing Health Expenses'
                            onChange={changeHandler}/>
                    </label>

                    <label> Monthly Medication Costs: 
                        <Field
                            type='text'
                            className='Medication-Costs'
                            name='medication_costs'
                            value={healthCost.medication_costs}
                            placeholder='Monthly Medication Costs'
                            onChange={changeHandler}/>
                    </label>

                    <label> Monthly Health Insurance Costs: 
                        <Field
                            type='text'
                            className='Health-Insurance-Costs'
                            name='health_insurance_costs'
                            value={healthCost.health_insurance_costs}
                            placeholder='Monthly Health Insurance Costs'
                            onChange={changeHandler}/>
                    </label>

                    <label> Other Miscellaneous Monthly Expenses: 
                        <Field
                            type='text'
                            className='Miscellaneous-Expenses'
                            name='miscellaneous_expenses'
                            value={healthCost.miscellaneous_expenses}
                            placeholder='Monthly Miscellaneous Health Expenses'
                            onChange={changeHandler}/>
                    </label>

                    <button type='submit' className='submitBTN'>Next</button>
                </div>
                </div>
            </Form>
        </Formik>
    )
}


export default HealthCosts;