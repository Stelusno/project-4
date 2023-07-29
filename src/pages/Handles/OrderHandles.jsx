import { orders ,setOrders } from "../App/App";
import axios from 'axios';


async function getOrders({setOrders}) {
    try {
        const response = await axios.get('http://localhost:3001/api/orders');
        setOrders(response.data);
    } catch (err) {
        console.log(err);
    }
}

async function handleCreate(createdOrder ,orders, setOrders) {
    try {
        const response = await axios.post('http://localhost:3001/api/orders', createdOrder);
        setOrders([...orders, response.data]);
    } catch (err) {
        console.log(err);
    }
}



async function handleDelete(deletedOrder) {
    try {
        await axios.delete(`http://localhost:3001/api/orders/${deletedOrder._id}`);
        const notDeletedOrders = orders.filter(order => order._id !== deletedOrder._id)
        setOrders(notDeletedOrders);
    } catch (err) {
        console.log(err);
    }
}

async function handleEdit(editedOrder) {
    try {
        await axios.put(`http://localhost:3001/api/orders/${editedOrder._id}`, editedOrder);
        const newOrders = orders.map(i => {
            return i._id !== editedOrder._id ? i : editedOrder;
        });
        setOrders(newOrders);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    handleCreate, 
    handleDelete, 
    handleEdit,
    getOrders
}