import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./BigPuffDetail.scss";

const BigPuffDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const docRef = doc(db, "BIG-PUFFS-AROMA-KING", id);

  useEffect(() => {
    getDoc(docRef).then((doc) => {
      setData(doc.data(), doc.id);
    });
  }, []);
  console.log(data);

  return (
    <div className="big-puff">
      <h3 className="big-puff__title">{data.name}</h3>
      <div className="big-puff__separator"></div>
      <div className="big-puff__block">
        <img className="big-puff__img" src={data.urlImg} alt={data.name} />
        <p className="big-puff__capacity">({data.capacity})</p>
      </div>
    </div>
  );
};

export default BigPuffDetail;
