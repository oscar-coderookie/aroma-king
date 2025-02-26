import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TpdDetail.scss";
import { doc, getDoc } from "firebase/firestore";
import { useCart } from "../../CartContext";
import { db } from "../../config/firebase";
import { FaShoppingBasket } from "react-icons/fa";

const TpdDetail = () => {
  const [tpd, setTpd] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [flavors, setFlavors] = useState([]);
  const { id } = useParams();
  const { addToCart } = useCart(); 

  const docRef = doc(db, "TPD-AROMA-KING", id);

  useEffect(() => {
    try {
        getDoc(docRef).then((doc) => {
            setTpd(doc.data(), doc.id);
            setFlavors(doc.data().flavors);
          })
          
    } catch (error) {
        console.log(error)
    }
  }, [docRef]);

  const handleAddToCart = () => {
    addToCart({
      id,
      name: tpd.name,
      price: tpd.price || 0, // Asegurar que hay un precio
      image: tpd.urlImg,
      quantity: quantity,
    });
  };


  return (
    <div className="big-puff">
      <h3 className="big-puff__title">tpd catalogue / {tpd.name}</h3>
      <div className="big-puff__separator"></div>

      <div className="big-puff__block">
        <img className="big-puff__img" src={tpd.urlImg} alt={tpd.name} />
        <div className="big-puff__information">
          <h3 className="big puff__information-title">Product parameters</h3>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Battery Capacity:</p>
            <p className="big-puff__information__label">
              {tpd.batteryCapacity} Mah
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Liquid Capacity: </p>
            <p className="big-puff__information__label">
              {tpd.liquidCapacity} ml.
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Nicotine Level: </p>
            <p className="big-puff__information__label">
              {tpd.nicotineLevel} mg.
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Vapping puffs: </p>
            <p className="big-puff__information__label">
              {tpd.capacity}+ Puffs
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Coil: </p>
            <p className="big-puff__information__label">{tpd.coil}</p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Battery Material </p>
            <p className="big-puff__information__label">
              {tpd.batteryMaterial}
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Resistance </p>
            <p className="big-puff__information__label">{tpd.resistance} OHM</p>
          </div>
        </div>
      </div>
      <div className="shop-bar">
              <div className="quantity-bar">
                <label htmlFor="quantity">Quantity:</label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>
      
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
                <FaShoppingBasket className="shop-btn" />
              </button>
            </div>
      <h3 className="big-puff__title">Other flavours:</h3>
      <div className="big-puff__separator"></div>
      <div className="big-puff__flavors">
      {flavors === undefined ? null : flavors.map((flavor, index) => {
        return (
          <img key={index} className="big-puff__flavors__img" src={flavor} alt={flavor} />
        )
      })}
      </div>
    </div>
  );
};

export default TpdDetail;
