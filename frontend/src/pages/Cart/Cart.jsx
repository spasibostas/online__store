import React, { useState } from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useDispatch, useSelector } from 'react-redux';
import ItemInCart from '../../components/ItemInCart/ItemInCart';
import { makeRequest } from '../../makeRequest';
import { loadStripe } from '@stripe/stripe-js';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { Link } from 'react-router-dom';
import './Cart.scss'
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/Loader';


const Cart = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)

    const{loadingPayment, setLoadingPayment} = useFetch()

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
          setLoadingPayment(true)
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
        setLoadingPayment(false)
      }

      const productsInCart = products.map((item) => {
        return <ItemInCart totalPrice={totalPrice} item={item} key={item.id} handleDelete={handleDelete} />
      })

      if (products.length < 1) return (
        <div className='empty'>
          <div className='empty-cart'>Your cart is empty</div>
          <button className="cta">
            <Link to="/" className='link'>
              <span className="hover-underline-animation"> Go shopping </span>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </Link>
          </button>
        </div>
      )

    return (
      <>
        {loadingPayment ? (
          <div className='load'>
            <span>Proceeding to checkout...</span>
            <Loader />
          </div>
        ) : (
          <div className="order-page">
            <div className="order-page__left">{productsInCart}</div>
            <div className="order-page__right">
              <div className="order-page__total-price">
                <span>Total price: ${totalPrice()}</span>
              </div>
              <button className="payment-btn" onClick={handlePayment}>
                Proceed to checkout
                <svg className="svgIcon" viewBox="0 0 576 512">
                  <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                </svg>
              </button>
              <div className="reset">
                <span>Reset cart</span>
                <DeleteOutlinedIcon
                  className="delete"
                  onClick={() => handleResetCart()}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Cart