import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <a href='/products/2' className='link'>Women</a>
          <a href='/products/1' className='link'>Men</a>
          <a href='/products/2' className='link'>Shoes</a>
          <a href='/products/1' className='link'>Accessories</a>
          <a href='/products/2' className='link'>New Arrivals</a>
        </div>
        <div className="item">
          <h1>Links</h1>
          <a href='/products/2' className='link'>FAQ</a>
          <a href='/products/2' className='link'>About</a>
          <a href='/products/2' className='link'>Stores</a>
          <a href='/products/2' className='link'>Contact</a>
          <a href='/products/2' className='link'>Partners</a>
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