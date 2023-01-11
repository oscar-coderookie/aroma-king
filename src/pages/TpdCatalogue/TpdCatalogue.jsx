import React from "react";
import "./TpdCatalogue.scss";
import TPDData from "../../mocks/TPDData";
import { ProductCardBasic } from "../../components";

const TpdCatalogue = () => {
  return (
    <div className="tpd-catalogue">
    <h1 className="tpd-catalogue__title">TPD Catalogue</h1>
    <div className="tpd-catalogue__separator"></div>
    <div className="mosaicTpd">
   
      {TPDData.map((vaper, index) => {
        return (
          <ProductCardBasic
            urlImg={vaper.urlImg}
            key={index}
            name={vaper.name}
            capacity={vaper.capacity}
          />
        );
      })}
    </div>
    </div>
    
  );
};

export default TpdCatalogue;
