import './OrderItem.css'
import {useLocation} from 'react-router-dom';

export default function OrderItem() {
	const data = useLocation().state.data;
	const allItems = data.orderItems.map(item => {
		return <h6>{item.title}</h6>
	})
    return (
      <div id="orderItems">
          <h3 id="title">Title: {data.order.username} - {data.order.price}</h3>
          
       </div>
    )
}