import Item from '../../component/Item/Item';
import { Fragment } from 'react';
import './Menu.css';

export default function Menu({ items, handleAddToCart }) {
    const allItems = items.map(item => {
        return (
                <Fragment key={item._id}>
                    <Item item={item} handleAddToCart={handleAddToCart} />
                </Fragment>
        );
    });
    return(
        <>
            <div className='MenuArea'>
                <h2>Menu</h2>
                <div className='Menu'>
                    {allItems}
                </div>
            </div>
        </>
    )
}