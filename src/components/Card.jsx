

const  Card = (props) => {
    return(
        <div className='card'>
            <img  height={450} width={350} src={props.img} alt=""/>
            <div>
                <div className='price-wrapper'>
                    <p>{props.name}</p>
                    <span>Цена</span>
                    <b>{props.price}</b>
                    <img className='card-img' id='add' width={30} height={30} src="https://cdn-icons-png.flaticon.com/512/1828/1828821.png" alt="plus"/>
                </div>
            </div>
        </div>
    )
}


export default Card