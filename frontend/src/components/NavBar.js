import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({ click }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>The Booster Tutor</h2>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/cart" className="cart-link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo-badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
            <div className="hamburger-menu" onClick={click}>
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default NavBar
