import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../redux/cartReducer';
import './CountInCart.scss'

const CountInCart = ({quantity, id}) => {

  const dispatch = useDispatch()

  return (
    <div className="quantity">
      <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
        {quantity}
      <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
    </div>
  );
}

export default CountInCart