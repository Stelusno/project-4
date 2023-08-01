import { useState, Fragment } from 'react';
import Item from '../../component/Item/Item';

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
				<Item item={item} />
				<hr />
			</Fragment>
		);
	});

	return (
		<>
			{allCartItems}
		</>
	);
}
