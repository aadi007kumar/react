function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                My Shopping
            </div>
            <div className="nav-links">
                {["Home", "Products", "About", "Contacts"].map((label) => (
                    <a key={label} href="#">
                        {label}
                    </a>
                ))}
            </div>
            <button className="cart-button" type="button">
                Cart
            </button>
        </nav>
    )
}
export default Navbar;