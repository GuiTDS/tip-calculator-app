import './ResultCard.css';

const ResultCard = (props) => {
    return(
        <section className='results'>
            <div className='results__container'>
                <div className='container__info'>
                    <p>Tip amount</p>
                    <p>/ person</p>
                </div>
                <h2>{props.value}</h2>
            </div>
            <div className='results__container'>
                <div className='container__info'>
                    <p>Total</p>
                    <p>/ person</p>
                </div>
                <h2>{props.value}</h2>
            </div>
            <button>RESET</button>
        </section>
    )
}

export default ResultCard;