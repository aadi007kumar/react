function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                MyShopping
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contacts</a>
            </div>
            <button className="cart-buton">Cart</button>
        </nav>
    )
}
export default Navbar;