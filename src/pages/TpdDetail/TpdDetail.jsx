import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TpdDetail.scss";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const TpdDetail = () => {
  const [tpd, setTpd] = useState({});
  const { id } = useParams();

  const docRef = doc(db, "TPD-AROMA-KING", id);

  useEffect(() => {
    try {
        getDoc(docRef).then((doc) => {
            setTpd(doc.data(), doc.id);
          }); 
    } catch (error) {
        console.log(error)
    }
   
  }, [docRef]);

  return (
    <div className="big-puff">
      <h3 className="big-puff__title">tpd / {tpd.name}</h3>
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
      <h3 className="big-puff__title">Other flavours:</h3>
      <div className="big-puff__separator"></div>
    </div>
  );
};

export default TpdDetail;
