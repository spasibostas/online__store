import {createBrowserRouter, RouterProvider, Outlet, Navigate} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import UserProfile from "./pages/UserProfile/UserProfile";
import Cart from "./pages/Cart/Cart";
import { getToken } from "./helpers";
import './app.scss';

const Layout = () => {
  return (
    <div className="app" id="App">
      <div id="page-wrap">
        <Navbar />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/products/:id",
      element: <Products />
    },
    {
      path: "/product/:id",
      element: <Product />
    },
    {
      path: "/basket",
      element: <Cart />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/userprofile",
      element: getToken() ?  <UserProfile /> : <Navigate to='/login'/>
    },
  ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}


export default App;
