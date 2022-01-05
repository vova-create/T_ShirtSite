import style from './Drawer.module.css'
import Card from "./Card";
import {findAllByDisplayValue} from "@testing-library/react";


const  Drawer = (props) => {


    return(
        <div className={style.drawer}>
            <div className={style.wrapperDrawer}>
                <div className={style.drawerHeader}>
                    <h3>Моя корзина</h3>
                    <img onClick={props.showDrawer} height={20} width={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="close"/>
                </div>
                <div className={style.underLine}></div>
                <div className={style.totalCard}>
                    {props.items.map((obj) => (
                        <div className={style.cartAddedCards}>
                            <div className={style.cartImg} style={{backgroundImage: `url(${obj.img})`}}></div>
                            <p>{obj.name}</p>
                            <b>Цена {obj.price}</b>
                            <button className={style.btnDeleteCard} onClick={() => props.deleteCard(obj.k)}>Удалить</button>
                        </div>
                    ))}
                    </div>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <b>400 грн.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <b>40 грн.</b>
                        </li>
                    </ul>
                </div>
            </div>
    )
}


export default Drawer