import React, {useState} from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import Profile from './../Profile/Profile';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';
import "./Navbar.scss"


export const ProfileContext = React.createContext()

const Navbar = () => {

  const products = useSelector((state) => state.cart.products)
  const [openCart, setOpenCart] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  const toggleProfile = () => setOpenProfile(prev => !prev)

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="wrapper">
          <div className="wrapper-left">
            <Link to="#" className="menu-icon">
              <MenuIcon style={{ fontSize: "34px" }} onClick={showSidebar} />
            </Link>
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
          </div>
          <div className="center">
            <a className="link" href="/">
              ONLINESTORE
            </a>
          </div>
          <div className="right">
            <div className="icons">
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
                  <ShoppingCartOutlinedIcon className="item" />
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
      <Sidebar sidebar={sidebar} showSidebar={showSidebar}/>
    </>
  );
}

export default Navbar