import React from 'react';
import './ProductCardBasic.scss';

const ProductCardBasic = ({urlImg, name, capacity, size}) => {
  return (
    <React.Fragment>
    <div className="tpdCard" style={{width:size}} >
            <img src={urlImg} alt={name} className="tpdCard__img" />
            <div className="tpdCard__info">
              <p className="tpdCard__name">{name}</p>
              <p className="tpdCard__capacity">({capacity})</p>
            </div>
          </div>
          
    </React.Fragment>
    
  )
}

export default ProductCardBasic