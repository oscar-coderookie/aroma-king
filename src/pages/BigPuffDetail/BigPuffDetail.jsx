import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./BigPuffDetail.scss";

const BigPuffDetail = () => {
  const [data, setData] = useState({});
  const [flavors, setFlavors] = useState([]);
  const { id } = useParams();

  const docRef = doc(db, "BIG-PUFFS-AROMA-KING", id);

  useEffect(() => {
    getDoc(docRef).then((doc) => {
      setData(doc.data(), doc.id);
      setFlavors(doc.data().flavors);
    });
  }, [docRef]);


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

export default BigPuffDetail;
