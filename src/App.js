import './App.css';
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
function App() {

    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [isDrawer, setDrawer] = useState(false)
    const [cartItems, setCartItems] = useState([])



    useEffect(() => {
        axios.get('https://61d1b9c2da87830017e59321.mockapi.io/items').then(res => {
            setItems(res.data);
        })
        axios.get('https://61d1b9c2da87830017e59321.mockapi.io/cart').then(res => {
            setCartItems(res.data);
        })
    }, [])

    const showDrawer = () => {
        setDrawer(!isDrawer)
    }
 const onAddToCart = (obj) => {
     axios.post('https://61d1b9c2da87830017e59321.mockapi.io/cart', obj)
     setCartItems((prev) =>[...cartItems, obj]);
 }

    const deleteCard = (id) => {
        axios.delete(`https://61d1b9c2da87830017e59321.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.k !== id))
    }

    const onChangeSearchInput = (event) => {
    console.log(event.target.value)
        setInputValue(event.target.value.toLowerCase())
    }

    return (
    <div className="wrapper">
        {isDrawer ? <Drawer items={cartItems} showDrawer={showDrawer} deleteCard={deleteCard}/> : '' }
        <header className='header'>
            <div className='headerLeft'>
                <img className='logo' src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720057111727?fmt=jpeg&qlt=90&wid=652&hei=652" alt="logo"/>
                <div className='headerInfo'>
                <h3>T-Shirt Store</h3>
                <p>Магазин лучших футболок</p>
                </div>
            </div>
        <ul className='headerRight'>
            <li>
                <img className='drawerBtn' onClick={showDrawer} src="cart.png" alt="cart"/>
                <div>700 грн</div>
            </li>
            <li>
                <img src="/userWhite.png" alt="user"/>
            </li>
        </ul>
        </header>
        <div className='underLine'></div>
        <h1>{inputValue ? `Поиск по запросу: ${inputValue}`:'Все футболки'}</h1>
        <input value={inputValue} onChange={onChangeSearchInput} placeholder='Искать' className='inputSearch' type="text"/>
        {inputValue && <img onClick={() => setInputValue('')} className='deleteInputText' src="https://cdn-icons.flaticon.com/png/512/3018/premium/3018465.png?token=exp=1641240514~hmac=3cb2265281d94507d180ec349ca19a11" alt="close"/>}
        <div className='content-wrapper'>
        <div className='content'>
            {items.filter(item => item.name.toLowerCase().includes(inputValue)).map((card) => <Card key={card.id} img={card.img} name={card.name} price={card.price} k={card.id} onPlus={ (obj) => onAddToCart(obj) }/>)}
</div>
        </div>
    </div>
  );
}
export default App;
