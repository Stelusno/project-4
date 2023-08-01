import Header from '../../component/Header/Header';
import NavBar from '../../component/NavBar/NavBar';
import './OrderIndex.css';
import axios from 'axios';
import { Fragment, useState } from 'react';
import Order from '../../component/Order/Order'




export default function OrderIndex({ orders, setOrders }) {
	const [orderDetail, setOrderDetail] = useState({});
    const URL = 'http://localhost:3001'
    // const URL = 'https://themeltingpot-07h3.onrender.com'

    async function getOrderDetails(order) {
		try {
			const response = await axios.get(`${URL}/api/orders/${order._id}/`);
			
			setOrderDetail(response.data);
		} catch (err) {
			console.log(err);
		}
	}
	
    const allOrders = orders.map(order => {
        return (
                <Fragment key={order._id}>
                    <Order order={order} orderDetail={orderDetail} getOrderDetails={getOrderDetails}/>
                </Fragment>
        );
        }
    )

    return(
    <div className="OrderIndex">
        <NavBar />
        <Header />
        <div className='OrderArea'>
            <h2>Orders</h2>
            <div className='Orders'>
                {allOrders}
            </div>
        </div>
    </div>
    )
}
