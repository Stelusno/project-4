import './Item.css';

export default function Item({item, handleAddToCart}) {
    return (
      <div id="items">
          <h3 id="title">Title: {item.title}</h3>
          <h4 id="description">{item.description}</h4>
          <button id="cart" onClick={(evt) => handleAddToCart(item)}>Add to Cart</button>
          <p id="price">Price: {item.price}</p>
          {/* <p id="category">Nationality: {item.category}</p> */}
          <img id="img" src={item.img} />
       </div>
    )
}