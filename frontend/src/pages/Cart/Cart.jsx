import React, { useState } from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useDispatch, useSelector } from 'react-redux';
import ItemInCart from '../../components/ItemInCart/ItemInCart';
import { makeRequest } from '../../makeRequest';
import { loadStripe } from '@stripe/stripe-js';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { Link } from 'react-router-dom';
import './Cart.scss'


const Cart = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)

    const handleDelete = (id) => {
      dispatch(removeItem(id));
    }

    const handleResetCart = () => {
      dispatch(resetCart())
    }

    const totalPrice = () => {
      let total = 0;
      products.forEach(item => {
        total += item.quantity * (item.price - 0.01).toFixed(2)
      });
      return total.toFixed(2)
    }

      const stripePromise = loadStripe(
        'pk_test_51Myvg3BjF97bv0UeSxalOPgjh72KJy75yZe7tPNqtgGybofN0BZQEJcNe7U3omqidQrFPbWEUhsvMW9VuozvDxVm00bmhDScMe'
      );
    
      const handlePayment = async () => {
        try {
          const stripe = await stripePromise;
          const res = await makeRequest.post("/orders", {
            products
          })
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          })
        } catch (error) {
          console.log(error);
        }
      }

      const productsInCart = products.map((item) => {
        return <ItemInCart item={item} key={item.id} handleDelete={handleDelete} />
      })

      if (products.length < 1) return (
        <div className='empty'>
          <div className='empty-cart'>Your cart is empty</div>
          <button className='cat-btn'>
            <Link to="/" className='link'>
              Go shopping
            </Link>
          </button>
        </div>
      )

    return (
        <div className='order-page'>
            <div className='order-page__left'>
                {productsInCart}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                  <span>Total price: ${totalPrice()}</span>
                </div> 
                <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
                <div className='reset'>
                  <div>Reset Cart</div>
                  <DeleteOutlinedIcon className='delete' onClick={() => handleResetCart()} />
                </div>
            </div>
        </div>
    )
}

export default Cart