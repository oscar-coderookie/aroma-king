import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./BigPuffs.scss";
import { db } from "../../config/firebase";
import { LoadingScreen, ProductCardBasic } from "../../components";
import { NavLink } from "react-router-dom";

const BigPuffs = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "BIG-PUFFS-AROMA-KING")
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
    <React.Fragment>
      <div className="template-mosaic">
        <h1 className="template-mosaic__title">Big puffs catalogue </h1>
        <div className="template-mosaic__separator"></div>
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="template-mosaic__list">
            {list.map((element, index) => {
              return (
                <NavLink className="template-mosaic__links" to={`/catalogue/big-puffs/${element.id}`} key={index}>
                  <ProductCardBasic
                    
                    urlImg={element.urlImg}
                    name={element.name}
                    capacity={element.capacity}
                    size="300px"
                  />
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default BigPuffs;
