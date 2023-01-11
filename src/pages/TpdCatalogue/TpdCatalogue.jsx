import React, {useState, useEffect } from "react";
import "./TpdCatalogue.scss";
import { LoadingScreen, ProductCardBasic } from "../../components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";


const TpdCatalogue = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "TPD-AROMA-KING")
        );
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setList(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getList().then(() => {
      setLoading(false);
    });

    console.log(list);
  }, []);

  return (
    <div className="tpd-catalogue">
    <h1 className="tpd-catalogue__title">TPD Catalogue</h1>
    <div className="tpd-catalogue__separator"></div>

    {loading ? <LoadingScreen/> : 
    <div className="mosaicTpd">
      {list.map((vaper, index) => {
        return (
          <ProductCardBasic
            urlImg={vaper.urlImg}
            key={index}
            name={vaper.name}
            capacity={vaper.capacity}
            size="300px"
          />
        );
      })}
    </div>}
   
    </div>
    
  );
};

export default TpdCatalogue;
