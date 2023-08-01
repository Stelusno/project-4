import Header from '../../component/Header/Header';
import Menu from '../../component/Menu/Menu';
import NavBar from '../../component/NavBar/NavBar';
import './Home.css';

export default function Home({ items, handleAddToCart }) {
    return(
    <div className="Home">
        <NavBar />
        <Header />
        <Menu items={items} handleAddToCart={handleAddToCart}/>
    </div>
    )
}