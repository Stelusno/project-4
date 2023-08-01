import { useState, Fragment } from 'react';
import Item from '../../component/Item/Item';
import CartItem from '../../component/CartItem/CartItem';

export default function CartPage({ cart, handleCreateOrder }) {


	// const handleChange = (event) => {
	//     setItem({...item, [event.target.name]: event.target.value})
	// }

	const handleSubmit = (event) => {
		event.preventDefault();
		handleCreateOrder(cart);
	};

	const allCartItems = cart.map(item => {
		return (
			<Fragment key={item._id}>
				<CartItem item={item} />
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
