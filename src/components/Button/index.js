import './Button.css';

const Button = (props) => {
    const onClickBtn = (event) => {
        props.getBtnValue(event);
        /* console.log(event.target.value); */
     }

    return (
        <button className='button' onClick={onClickBtn} value={props.value} style={{backgroundColor: props.background, color: props.color}}>{props.value}% </button>    
    )
}

export default Button;