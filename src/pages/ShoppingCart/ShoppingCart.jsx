import React from "react";
import { useCart } from "../../CartContext";
import './ShoppingCart.scss';
import { FaRegTrashAlt, FaRemoveFormat, FaShoppingCart } from "react-icons/fa";

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__title">
        <h2>Shopping Cart</h2>
        <FaShoppingCart className="shopping-cart__icon" />

      </div>
      <span>


      </span>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item__info">
                <img src={item.image} alt={item.name} className="cart-item__image" />
                <div className="cart-item__details">
                  <div className="fieldset__item">
                    <p className="fieldset__label">Name:</p>
                    <h3 className="cart-item__title">{item.name}</h3>
                  </div>
                  <div className="fieldset__item">
                    <p className="fieldset__label">Prize:</p>
                    <p>${item.price}</p>
                  </div>
                  <div className="fieldset__item">
                    <p className="fieldset__label">Quantity:</p>
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="cart-editor">
                <button onClick={() => removeFromCart(item.id)}>
                  <FaRegTrashAlt className="delete-btn" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default ShoppingCart;