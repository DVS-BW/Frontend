import React from 'react';
import { withFormik, Field, Form } from 'formik';

function Debt (){

    return(
        <div className='debt'>
        <h1>Debt</h1>
        <input type='text' name='cost' placeholder='Cost'/>
        
        </div>
    )
}

export default Debt;