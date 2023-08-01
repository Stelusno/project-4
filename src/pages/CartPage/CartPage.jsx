import { useState, Fragment } from 'react';
import Item from '../../component/Item/Item';
import CartItem from '../../component/CartItem/CartItem';
import NavBar from '../../component/NavBar/NavBar';
import Header from '../../component/Header/Header';
import './CartPage.css';

export default function CartPage({ cart, handleCreateOrder, handleRemoveFromCart }) {

	const handleSubmit = (event) => {
		event.preventDefault();
		handleCreateOrder(cart);
	};

	const allCartItems = cart.map(item => {
		const rand = Math.floor(Math.random() * 100000000)
		return (
			<Fragment key={`${item._id}/${rand}`}>
				<CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} />
				<hr />
			</Fragment>
		);
	});

	return (
		<div className='CartPage'>
			<NavBar />
        	<Header />
			<div className='CartArea'>
				<h2>Cart</h2>
				<div className='CartItems'>
					{allCartItems}
				</div>
			</div>
			{
				cart.length === 0 ?
					<button><h2 id='cartempty'>Cart Empty</h2></button>
					:
					<button id="cart" onClick={handleSubmit}>Place Order</button>
			}
		</div>
	);
}
