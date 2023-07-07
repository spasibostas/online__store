import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { useParams } from 'react-router-dom';

export const SidebarData = [

  {
    title: 'Home',
    path: '/',
    icon: <HomeOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/',
    icon: <StickyNote2OutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/',
    icon: <ShoppingCartOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/',
    icon: <PersonOutlineOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/',
    icon: <MessageOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/',
    icon: <ContactSupportOutlinedIcon />,
    cName: 'nav-text'
  }
];