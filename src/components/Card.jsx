import style from './Card.module.css'
import {useState} from "react";

const  Card = ({img, name, price, k, onPlus}) => {
    const [isChecked, setChecked] = useState(false)
    const addPlus = () => {
        onPlus({img, name, price, k})
        setChecked(!isChecked)
    }
    return(
        <div className={style.card}>
            <img className={style.cardImage} height={450} width={350} src={img} alt="Shirt"/>
                <div className={style.priceWrapper}>
                    <p>{name}</p>
                    <span>Цена </span>
                    <b>{price}</b>
                    <div>
                        <img onClick={addPlus} className={style.btnImage} id='add' width={30} height={30} src={isChecked ?"https://cdn-icons-png.flaticon.com/512/190/190411.png": "https://cdn-icons.flaticon.com/png/512/3007/premium/3007788.png?token=exp=1640957491~hmac=d0b774bef663d15b4509a1870772535a"} alt="plus"/>
                    </div>
                </div>
        </div>
    )
}


export default Card