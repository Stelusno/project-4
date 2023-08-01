import './Order.css';
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Order({ order, orderDetail, getOrderDetails }) {
	
	useEffect(() => {
		getOrderDetails(order);
	}, []);

	const data = orderDetail;
	return (
		<>
			<Link to={`/orders/${order._id}`} state={{data}}>
				<div className='OrderItem'>
					<h2 id="user">Name: {order.username}</h2>
					<h2 id="pr">Price: {order.price}</h2>
					<h2 id="paid">Paid: {order.isPaid}</h2>
					<div className='Cart'></div>
				</div>
			</Link>
		</>
	);
}