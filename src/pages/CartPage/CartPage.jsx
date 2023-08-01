import { useState, Fragment } from 'react';
import Item from '../../component/Item/Item';
import CartItem from '../../component/CartItem/CartItem';

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
		<>
			{allCartItems}
			{
				cart.length === 0 ?
					<button>No items</button>
					:
					<button id="cart" onClick={handleSubmit}>Place Order</button>
			}
		</>
	);
}
