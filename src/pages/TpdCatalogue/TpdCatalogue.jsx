import React, { useState, useEffect } from "react";
import "./TpdCatalogue.scss";
import { LoadingScreen, ProductCardBasic, SearchBar } from "../../components";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import { NavLink } from "react-router-dom";

const TpdCatalogue = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };


  useEffect(() => {
    const collectionRef = collection(db, "TPD-AROMA-KING")
    const q = query(collectionRef, orderBy("name", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
      setLoading(false)
    );

    return unsub;
  
  }, []);
  const filteredTpd = list.filter((element) => element.name.toLowerCase().includes(search.toLowerCase()) )
  return (
    <div className="tpd-catalogue">
     
      <div className="tpd-catalogue__titlebar">
      <h1 className="tpd-catalogue__title">TPD Catalogue</h1>
      <SearchBar handleChange={handleSearch}/>
      </div>
      <div className="tpd-catalogue__separator"></div>

      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="mosaicTpd">
          {filteredTpd.map((vaper, index) => {
            return (
              <NavLink 
              key={index}
              className="mosaicTpd__links" to={`/catalogue/tpd/${vaper.id}`}>
                <ProductCardBasic
                  urlImg={vaper.urlImg}
                  
                  name={vaper.name}
                  capacity={`${vaper.capacity}+ Puffs`}
                  size="300px"
                />
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TpdCatalogue;
