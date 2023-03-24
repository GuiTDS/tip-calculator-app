import './Input.css';

const Input = (props) => {

    const onType = (event) => {
       props.onChangeInput(event.target.value);
    }

    return (
        <div className="input">
            <label>{props.inputName}</label>
            <input value={props.value} required={props.required} onChange={onType} placeholder="0" type={props.type}></input> 
        </div>
    )
}

export default Input;