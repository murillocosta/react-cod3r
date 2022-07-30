/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Card.css';

export default props => {
  const cardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00',
  };

  return (
    <div className="Card" style={cardStyle}>
      <h2 className="Title">{props.titulo}</h2>
      <div className="Content">{props.children}</div>
    </div>
  );
};
