import React from 'react';

function SquareComponent(props) {
  return(
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    )
}

export default SquareComponent;