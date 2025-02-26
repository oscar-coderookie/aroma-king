import React from "react";
import { useCart } from "../../CartContext";
import "./CartSideBar.scss";
import marketIcon from "./../../assets/img/market-icon-white.png";


const CartSidebar = ({ isOpen, toggleCart }) => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    return (
        <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={toggleCart}>
                <img
                    className="header-icons__market"
                    src={marketIcon}
                    alt="market-icon"
                />
            </button>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-image" />
                            <div className="cart-details">
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <select
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartSidebar;