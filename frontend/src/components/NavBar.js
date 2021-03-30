import { Link } from "react-router-dom";

const NavBar = () => {
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
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
