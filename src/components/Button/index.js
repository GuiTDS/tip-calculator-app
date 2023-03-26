import './Button.css';


const Button = (props) => {
    const onClickBtn = (event) => {
        props.getBtnValue(event);
     }

     const btn = document.querySelectorAll('.button');

    btn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('button-active');
        })
    })

    return (
        <button className='button' onClick={onClickBtn} value={props.value} style={{backgroundColor: props.background, color: props.color}}>{props.value}% </button>    
    )
}

export default Button;