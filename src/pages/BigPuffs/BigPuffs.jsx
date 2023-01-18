import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import "./BigPuffs.scss";
import { db } from "../../config/firebase";
import { LoadingScreen, ProductCardBasic, SearchBar } from "../../components";
import { NavLink } from "react-router-dom";

const BigPuffs = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  

  useEffect(() => {
    const collectionRef = collection(db, "BIG-PUFFS-AROMA-KING")
    const q = query(collectionRef, orderBy("name", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
      setLoading(false)
    );

    return unsub;
    
  }, []);

  const filteredPuffs = list.filter((element) => element.name.toLowerCase().includes(search.toLowerCase()) )
  return (
    <React.Fragment>
      <div className="template-mosaic">
      <div className="template-mosaic__titlebar">
      <h1 className="template-mosaic__title">Big puffs catalogue </h1>
      <SearchBar handleChange={handleSearch}/>
      </div>
        
        <div className="template-mosaic__separator"></div>
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="template-mosaic__list">
            {filteredPuffs.map((element, index) => {
              return (
                <NavLink
                  className="template-mosaic__links"
                  to={`/catalogue/big-puffs/${element.id}`}
                  key={index}
                >
                  <ProductCardBasic
                    urlImg={element.urlImg}
                    name={element.name}
                    capacity={`${element.capacity}+ Puffs`}
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
