function Navbar(){
    return(
        <nav className="navbar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "16px 32px", background: "#ffffff", borderRadius: "16px", boxShadow: "0 8px 30px rgba(31, 41, 55, 0.10)", fontFamily: "system-ui, sans-serif" }}>
            <div className="logo" style={{ color: "#202842", fontSize: "22px", fontWeight: 800, letterSpacing: "-1px", whiteSpace: "nowrap" }}>
                My<span style={{ color: "#6c5ce7" }}>Shopping</span>
            </div>
            <div className="nav-links" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "28px", flexWrap: "wrap" }}>
                {["Home", "Products", "About", "Contacts"].map((label) => (
                    <a key={label} href="#" style={{ color: "#596174", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                        {label}
                    </a>
                ))}
            </div>
            <button className="cart-button" type="button" style={{ border: 0, borderRadius: "999px", padding: "11px 20px", background: "#6c5ce7", color: "#ffffff", fontSize: "14px", fontWeight: 700, boxShadow: "0 5px 14px rgba(108, 92, 231, 0.28)", cursor: "pointer", whiteSpace: "nowrap" }}>
                Cart
            </button>
        </nav>
    )
}
export default Navbar;