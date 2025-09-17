import React , {useEffect} from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart,setUser } from "../Utilityfiles/CartSlice";
import { setWishUser, setWish } from "../Utilityfiles/WishSlice";
import { logout, setCurrentUser } from "../Utilityfiles/Authslice";

function Navbar() {
  const dispatch = useDispatch();
  

  const CurrentUser = useSelector((state) => state.AuthReducer.currentUser);
  useEffect(() => {
    dispatch(setUser(CurrentUser));
    dispatch(setWishUser(CurrentUser));

    const storecart = localStorage.getItem(`Cart${CurrentUser}`);
        dispatch(setCart(JSON.parse(storecart)));

         const storeWish = localStorage.getItem(`Wish${CurrentUser}`);
        dispatch(setWish(JSON.parse(storeWish)));

        const storeUser = localStorage.getItem(`CurrentUser`);
        dispatch(setCurrentUser(storeUser));
        },[CurrentUser])

  const Cart = useSelector((state) => state.CartReducer.Cart);
  const CartCount = Cart.reduce((acc, item) => acc + 1* item.Quantity, 0);
  const Wishcount = useSelector((state) => state.WishReducer.Wish.length);

  const logOut = () => {
    dispatch(logout());
    alert("Logout Successful");
  };
  return (
    <header>
      <div id="header">
        <div className="header-logo">
          <Link to="#">
            <img src="src/assets/images/9-01.jpg" alt="logo" />
          </Link>
        </div>
        <div className="header-list">
          <nav className="header-list-nav">
            <ul className="">
              <li className="">
                <Link to="/" className="action">
                  Home
                </Link>
              </li>
              <li className="">
                <Link to="/Contact" className="">
                  Contact Us
                </Link>
              </li>
              <li className="">
                {CurrentUser ? (
                  <Link to="/Login" className="">
                    <button className="button-login" onClick={logOut}>
                      Logout({CurrentUser})
                    </button>
                  </Link>
                ) : (
                  <Link to="/Login" className="">
                    <button className="button-login">Login</button>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <div className="header-list-icon">
           {CurrentUser ? (
            <>
             <Link to="/Cart">
              <FaCartShopping /> {CartCount > 0 ? <sup className="Cartsup">{CartCount}</sup> : ""}
            </Link>
            <Link to="/Wishlist">
              <FaHeart />{Wishcount > 0 ? <sup className="Cartsup">{Wishcount}</sup> : ""}
            </Link></>
           ) : (<>
            <Link to="/Login">
              <FaCartShopping />
            </Link>
            <Link to="/Login">
              <FaHeart />
            </Link></>)

           }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
