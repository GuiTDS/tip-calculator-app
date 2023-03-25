import Input from '../Input';
import './Form.css';
import { useState } from 'react';
import Button from '../Button';
import ResultCard from '../ResultCard';


const Form = (props) => {
    const[bill, setBill] = useState('');
    const[tipPercentage, setTipPercentage] = useState('');
    const[numberPeople, setNumberPeople] = useState('');
    const[result, setResult] = useState('0');

    const backgroundBtn = 'hsl(183, 100%, 15%)';
    const btn = [
        {
            value: 5,
            backgroundColor: backgroundBtn
        },
        {
            value: 10,
            backgroundColor: backgroundBtn
        },
        {
            value: 15,
            backgroundColor: backgroundBtn
        },
        {
            value: 25,
            backgroundColor: backgroundBtn
        },
        {
            value: 50,
            backgroundColor: backgroundBtn
        }
    ]

    const handleClick = (e) => {
        e.preventDefault();
        setResult(bill/e.target.value);
    }
    return (
        <form className='form'>{/* onChange function here to calculate the result, onSubmit to reset all values */}
            <Input value={bill} inputName="Bill" onChangeInput={value => setBill(value)} required={true} type='number'/>
                <h2>Select tip %</h2>
                <div className='form__btn'>
                    {btn.map(btn =>
                        <Button key={btn.value} value={btn.value} color='hsl(0, 0%, 100%)' background={btn.backgroundColor} getBtnValue={event => {
                            setTipPercentage(event.target.innerHTML);
                            /* console.log(tipPercentage); */
                            handleClick(event);
                        }} />
                        )} 
                    <Button key='custom' value='Custom' background='hsl(189, 41%, 97%)' color='hsl(186, 14%, 43%)'/>   
                </div>
                <Input value={numberPeople} inputName='Number of People' type='number' onChangeInput={value => setNumberPeople(value)}/>
                {/* <h2>Resultado da divisao: {resultado}</h2> */}  
                <ResultCard value={result}/>  
        </form> 
            

    )
}

export default Form;
