import React from 'react'
import './CountInCart.scss'

const CountInCart = ({quantity, increase, decrease, id}) => {

  return (
    <div className="quantity">
      <button onClick={() => decrease(id) }>-</button>
        {quantity}
      <button onClick={() => increase(id)}>+</button>
    </div>
  );
}

export default CountInCart