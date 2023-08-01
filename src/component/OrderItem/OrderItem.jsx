import './OrderItem.css'
import {useLocation} from 'react-router-dom';
import NavBar from '../../component/NavBar/NavBar';
import Header from '../../component/Header/Header';
import { useState } from 'react';

export default function OrderItem({handleDeleteOrder}) {
	const data = useLocation().state.data;

    const [paid, setPaid] = useState(data.order.isPaid)

	const allItems = data.orderItems.map(item => {
		return <div className='indItems' key={item._id}>{item.title}</div>
	})

    function handlePay(order) {
        setPaid(true)
    }

    return (
        <div className='OrderItemPage'>
            <NavBar />
            <Header />
            <div id="orderItemsArea">
                <h3 id="customer">Customer: {data.order.username} - ${data.order.price}</h3>
                <button className="orderButtons" onClick={() => handleDeleteOrder(data.order)}>Delete</button>
                <button className="orderButtons">Pay</button>
                <div id="allOrderedItems" onClick={ () => handlePay(data.order) }>{allItems}</div>
            </div>
       </div>
    )
}