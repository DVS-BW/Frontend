import React, { useState, useEffect } from 'react';
import formik, { withFormik, Field, Form } from 'formik';
import axios from 'axios';




function Debt({ status }) {

    const [debt, setDebt] = useState([]);
    const changeHandler = event => {
        console.log(event.target.value);
        setDebt({
            ...debt, [event.target.name]: parseFloat(event.target.value)
        });
    };




    return (
        <div>
            <div>
                <div primary className='FoodCosts'>
                    <h4>Food Expenses</h4>
                    <Form className='FoodForm'>
                        <label> Monthly Food Expenses:
                    <Field
                                type='text'
                                className='Monthly-costs'
                                name='Monthly_Costs'
                                placeholder='$ Ongoing Monthly Expense'
                                
                                onChange={changeHandler} />
                        </label>

                        <label>One Time Stock Up Expense:
                    <Field
                                type='text'
                                className='Stock-up'
                                name='Stock_up'
                                placeholder='$ One time cost to stock up'
                                
                                onChange={changeHandler} />
                        </label>

                        <label>Dine Out Expense:
                    <Field
                                type='text'
                                className='DineOut'
                                name='dineout'
                                placeholder='Monthly Dining Cost'
                                
                                onChange={changeHandler} />
                        </label>
                        <button type='submit'>Next</button>
                    </Form>
                </div>

            </div>
        <div className='debt'>
            <h1>Calculate your Debt</h1>

            <label>
                <h3>Please Choose an option and enter the amount owed</h3>
                <Form>

                    <Field component='select' name='type'>

                        <option type='null'>Please Choose an Option</option>
                        <option value='personal loan 💵'>Personal Loan 💵</option>
                        <option value='car loan 🚗'>Car Loan 🚗</option>
                        <option value='credit card 💳'>Credit Card 💳</option>
                        <option value='student loans 🏫'>Student Loans 🏫</option>
                        <option value='other 💰'>Other 💰</option>


                    </Field>

                    <Field type='number' name='amount' placeholder=' amount' />

                    <button type="submit">Add</button>

                </Form>

            </label>

            <div className='acc'>

                {debt.map(debt => (

                    <div key={debt.id} className="debtList">
                        <h4>{debt.type}</h4>
                        <h4 className='number'>{"$" + debt.amount}</h4>

                    </div>
                ))}
            </div>

        </div>
        </div>
    )
};

const FormikDebt = withFormik({
    mapPropsToValues({ amount, type }) {
        return {
            amount: amount || "",
            type: type || ""
        };
    },
    handleSubmit(values, { setStatus }) {
        axios
            .post('https://reqres.in/api/users/', values)
            .then(res => {
                setStatus(res.data);
            })
            .catch(err => console.log(err.res));
    }
})(Debt)



export default FormikDebt;
