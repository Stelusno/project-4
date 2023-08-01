import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../../component/NavBar/NavBar";
import AddItem from '../../component/AddItem/AddItem';
import EditItem from '../../component/EditItem/EditItem';
import Item from '../../component/Item/Item';
import ItemIndex from '../../component/ItemIndex/ItemIndex';
import OrderIndex from '../../pages/OrderIndex/OrderIndex';
import OrderItem from '../../component/OrderItem/OrderItem';
import LoginPage from '../../component/LoginPage/LoginPage';
import CartPage from '../../pages/CartPage/CartPage';
import Home from '../../pages/Home/Home';

import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';



export default function App() {
	const [items, setItems] = useState([]);
	const [orders, setOrders] = useState([]);

	const [user, setUser] = useState(null);


	const defaultCart = [];
	const [cart, setCart] = useState(defaultCart);


	const URL = 'http://localhost:3001';
	// const URL = 'https://themeltingpot-07h3.onrender.com'

	async function getItems() {
		try {
			const response = await axios.get(`${URL}/api/items/`);
			setItems(response.data);
		} catch (err) {
			console.log(err);
		}
	}

	async function getOrders() {
		try {
			const response = await axios.get(`${URL}/api/orders/`);
			setOrders(response.data);
		} catch (err) {
			console.log(err);
		}
	}

	async function handleCreate(createdItem) {
		try {
			const response = await axios.post(`${URL}/api/items/`, createdItem);
			setItems([...items, response.data]);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getItems();
		getOrders();
	}, []);

	async function handleDelete(deletedItem) {
		try {
			await axios.delete(`${URL}/api/items/${deletedItem._id}/`);
			const notDeletedItems = items.filter(item => item._id !== deletedItem._id);
			setItems(notDeletedItems);
		} catch (err) {
			console.log(err);
		}
	}

	async function handleEdit(editedItem) {
		try {
			await axios.put(`${URL}/api/items/${editedItem._id}/`, editedItem);
			const newItems = items.map(i => {
				return i._id !== editedItem._id ? i : editedItem;
			});
			setItems(newItems);
		} catch (err) {
			console.log(err);
		}
	}

	function handleAddToCart(addedItem) {
		setCart([...cart, addedItem]);
	}

	function handleRemoveFromCart(deletedItem) {
		const idx = cart.findIndex((cartItem) => cartItem === deletedItem);
		const updatedItems = [...cart]
		updatedItems.splice(idx, 1);
		setCart(updatedItems);
	}

	async function handleCreateOrder(cart) {
		const data = {
			cartItems: cart,
			username: user,
			isDelivery: false,
		}
		try {
			const response = await axios.post(`${URL}/api/orders/`, data);
			const newOrder = response.data.order;
			setOrders([...orders, newOrder]);
			setCart(defaultCart);
		} catch (err) {
			console.log(err);
		}
	}

	if (user === 'admin123') {
		return (
			<main className="App">
				<>
					<NavBar />
					<Routes>
						{/* <Route path='/' element={<Menu items={items} />} /> */}
						<Route path='/' element={
							<>
								<AddItem handleCreate={handleCreate} />
								<ItemIndex items={items} handleEdit={handleEdit} handleDelete={handleDelete} />
							</>}>
						</Route>
					</Routes>
				</>
			</main>
		);
	} else if (!user) {
		return (
			<main className="App">
				<LoginPage setUser={setUser} />
			</main>
		);
	} else {
		return (
			<main className="App">
				<>
					<Routes>
						<Route path='/' element={<Home items={items} handleAddToCart={handleAddToCart} />} />
						<Route path='/orders' element={<OrderIndex orders={orders} setOrders={setOrders} />} />
						<Route path='/orders/:orderId' element={<OrderItem />} />
						<Route path='/cart' element={<CartPage handleCreateOrder={handleCreateOrder} cart={cart} handleRemoveFromCart={handleRemoveFromCart} />} />
					</Routes>
				</>
			</main>
		);
	}
}

