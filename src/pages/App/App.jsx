import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import axios from 'axios';
import NavBar from "../../component/NavBar/NavBar";
import AddItem from '../../component/AddItem/AddItem';
import EditItem from '../../component/EditItem/EditItem';
import Item from '../../component/Item/Item';
import ItemIndex from '../../component/ItemIndex/ItemIndex';
import LoginPage from '../../component/LoginPage/LoginPage'
import Home from '../../pages/Home/Home'
const OrderHandles = require('../Handles/OrderHandles');
const ItemHandles = require('../Handles/ItemHandles');



export default function App() {
	const [items, setItems] = useState([]);
	
  const [orders, setOrders] = useState([]);

	const [user, setUser] = useState(null);
  

	useEffect(() => {
		ItemHandles.getItems();
    OrderHandles.getOrders();
	}, []);

  module.exports = {
    items,
    setItems,
    orders,
    setOrders
   }
	
	if (user === 'admin123') {
		return(
			<main className="App">
				<>
					<NavBar />
					<Routes>
						{/* <Route path='/' element={<Menu items={items} />} /> */}
						<Route path='/' element={
							<>
								<AddItem handleCreate={ItemHandles.handleCreate} setItems={setItems} />
								<ItemIndex items={items} handleEdit={ItemHandles.handleEdit} handleDelete={ItemHandles.handleDelete}/>
							</>}>
						</Route>
					</Routes>
				</>
			</main>
		);
	} else if (!user) {
		return(
			<main className="App">
				<LoginPage setUser={setUser} />
			</main>
		);
	} else {
		return(
			<main className="App">
				<>
					<NavBar />
					<Routes>
						<Route path='/' element={<Home items={items} />} />
					</Routes>
				</>
			</main>
		);
	}
  
}
