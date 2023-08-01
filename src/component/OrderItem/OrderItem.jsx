import './OrderItem.css'
import {useLocation} from 'react-router-dom';

export default function OrderItem({handleDeleteOrder}) {
	const data = useLocation().state.data;
	const allItems = data.orderItems.map(item => {
		return <h6 key={item._id}>{item.title}</h6>
	})
    return (
      <div id="orderItems">
          <h3 id="title">Title: {data.order.username} - {data.order.price}</h3>
		  <button onClick={() => handleDeleteOrder(data.order)}>delete</button>
          {allItems}
       </div>
    )
}