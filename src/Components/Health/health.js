import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

function HealthCosts() {
    const [healthCost, setHealthCost] = useState(0);

    return (
        <Form>
            <div className='Health-Costs'>
                <h4>Health Expenses</h4>
                <div className='Health-Form'>
                <label> Monthly Health Expenses: 
                    <Field
                        type='text'
                        className='Monthly-Health-Expenses'
                        name='Monthly-Health-Expenses'
                        placeholder='$ Ongoing Health Expenses'/>
                </label>

                <label> Monthly Medication Costs: 
                    <Field
                        type='text'
                        className='Medication-Costs'
                        placeholder='Monthly Medication Costs'/>
                </label>

                <label> Monthly Health Insurance Costs: 
                    <Field
                        type='text'
                        className='Health-Insurance-Costs'
                        placeholder='Monthly Health Insurance Costs'/>
                </label>

                <label> Other Miscellaneous Monthly Expenses: 
                    <Field
                        type='text'
                        className='Miscellaneous-Expenses'
                        placeholder='Monthly Miscellaneous Health Expenses'/>
                </label>
                </div>
            </div>
        </Form>
    )
}


export default HealthCosts;