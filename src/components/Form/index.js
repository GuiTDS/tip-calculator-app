import Input from '../Input';
import './Form.css';
import { useState } from 'react';
import Button from '../Button';
import ResultCard from '../ResultCard';


const Form = (props) => {
    const[bill, setBill] = useState('');
    const[tipPercentage, setTipPercentage] = useState('');
    const[numberPeople, setNumberPeople] = useState('');
    const[tipAmountPerson, setTipAmountPerson] = useState('0');
    const[totalPerson,setTotalPerson] = useState('0');

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

    const updateData = (event) => {
        event.preventDefault();
        const total = bill / numberPeople;
        const tipPerPerson = (bill * (tipPercentage / 100)) / numberPeople;
        setTotalPerson(total+tipPerPerson);
        setTipAmountPerson(tipPerPerson);
    }
    
    const resetData = () => {
        setBill('');
        setTipPercentage('');
        setNumberPeople('');
        setTotalPerson('0');
        setTipAmountPerson('0');
    }

    return (
        <form className='form' onSubmit={updateData}>{/* onChange function here to calculate the result, onSubmit to reset all values */}
            <Input value={bill} inputName="Bill" onChangeInput={value => setBill(value)} required={true} type='number'/>
                <h2>Select tip %</h2>
                <div className='form__btn'>
                    {btn.map(btn =>
                        <Button key={btn.value} value={btn.value} color='hsl(0, 0%, 100%)' background={btn.backgroundColor} getBtnValue={event => {
                            event.preventDefault();
                            console.log(event.target.value);
                            setTipPercentage(event.target.value);
                            console.log(tipPercentage);
                        }
                    } />
                        )} 
                    <Button key='custom' value='Custom' background='hsl(189, 41%, 97%)' color='hsl(186, 14%, 43%)'/>   
                </div>
                <Input value={numberPeople} inputName='Number of People' type='number'  required={true} onChangeInput={value => setNumberPeople(value)}/>
                <ResultCard tipAmount={tipAmountPerson} total={totalPerson} reset={resetData}/>  
        </form>      

    )
}

export default Form;
