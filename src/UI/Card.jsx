import React from 'react';

const Card = (props) => {
  return <div className='bg-background rounded-xl shadow-md'>{props.children}</div>;
};

export default Card;
