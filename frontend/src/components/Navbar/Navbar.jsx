import React, {useState} from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import Profile from './../Profile/Profile';
import "./Navbar.scss"


export const ProfileContext = React.createContext()

const Navbar = () => {

  const products = useSelector((state) => state.cart.products)
  const [openCart, setOpenCart] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);


  const toggleProfile = () => setOpenProfile(prev => !prev)


  return (
    <div className="navbar" id='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            ONLINESTORE
          </Link>
        </div>
        <div className="right">
          <div className="icons">
            <FavoriteBorderOutlinedIcon className='item'/>
            <PersonOutlineOutlinedIcon
              className="item"
              onClick={() => setOpenProfile(!openProfile)}
            />
            <div className="cartIcon">
              <Link
                className="link"
                onClick={() => setOpenCart(!openCart)}
                to="/basket"
              >
                <ShoppingCartOutlinedIcon className='item'/>
              </Link>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      <ProfileContext.Provider value={openProfile}>
        {openProfile && <Profile toggle={toggleProfile} />}
      </ProfileContext.Provider>
    </div>
  );
}

export default Navbar