import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link to='/products/2' className='link'>Women</Link>
          <Link to='/products/1' className='link'>Men</Link>
          <Link to='/products/2' className='link'>Shoes</Link>
          <Link to='/products/1' className='link'>Accessories</Link>
          <Link to='/products/2' className='link'>New Arrivals</Link>
        </div>
        <div className="item">
          <h1>Links</h1>
          <Link to='/products/2' className='link'>FAQ</Link>
          <Link to='/products/1' className='link'>About</Link>
          <Link to='/products/2' className='link'>Stores</Link>
          <Link to='/products/1' className='link'>Contact</Link>
          <Link to='/products/2' className='link'>Partners</Link>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Onlinestore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;