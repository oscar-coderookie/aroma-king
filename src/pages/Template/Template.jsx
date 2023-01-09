import React from 'react';
import './Template.scss';

const Template = ({name}) => {
  return (
    <div className='template'>
        <h1 className='template-title'>{name}</h1>
    </div>
  )
}

export default Template