import Input from '../Input';
import './Form.css';
import { useState } from 'react';

const Form = () => {
    const[bill, setBill] = useState('');

    return (
        <main className='form'>
            <Input value={bill} inputName="Bill" onChangeInput={value => setBill(value)} required={true} type='number'/>
            
        </main>
    )
}

export default Form;
