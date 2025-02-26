import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCart } from "../../CartContext"; // Importar correctamente el contexto
import "./BigPuffDetail.scss";
import { FaShoppingBasket } from "react-icons/fa";

const BigPuffDetail = () => {
  const [data, setData] = useState({});
  const [flavors, setFlavors] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addToCart } = useCart(); // Usar el contexto del carrito

  const docRef = doc(db, "BIG-PUFFS-AROMA-KING", id);

  useEffect(() => {
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setData(doc.data());
        setFlavors(doc.data().flavors);
      }
    });
  }, [docRef]);

  const handleAddToCart = () => {
    addToCart({
      id,
      name: data.name,
      price: data.price || 0, // Asegurar que hay un precio
      image: data.urlImg,
      quantity: quantity,
    });
  };

  return (
    <div className="big-puff">
      <h3 className="big-puff__title">big puffs / {data.name}</h3>
      <div className="big-puff__separator"></div>

      <div className="big-puff__block">
        <img className="big-puff__img" src={data.urlImg} alt={data.name} />
        <div className="big-puff__information">
          <h3 className="big puff__information-title">Product parameters</h3>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Battery Capacity:</p>
            <p className="big-puff__information__label">
              {data.batteryCapacity} Mah
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Liquid Capacity: </p>
            <p className="big-puff__information__label">
              {data.liquidCapacity} ml.
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Nicotine Level: </p>
            <p className="big-puff__information__label">
              {data.nicotineLevel} mg.
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Vapping puffs: </p>
            <p className="big-puff__information__label">
              {data.capacity}+ Puffs
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Coil: </p>
            <p className="big-puff__information__label">
              {data.coil}
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Battery Material </p>
            <p className="big-puff__information__label">
              {data.batteryMaterial}
            </p>
          </div>
          <div className="big-puff__information__field">
            <p className="big-puff__information__text">Resistance </p>
            <p className="big-puff__information__label">
              {data.resistance} OHM
            </p>
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
        {flavors &&
          flavors.map((flavor, index) => (
            <img key={index} className="big-puff__flavors__img" src={flavor} alt={flavor} />
          ))}
      </div>
    </div>
  );
};

export default BigPuffDetail;
