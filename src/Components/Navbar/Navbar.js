

import React, { useContext, useState, useRef } from 'react';
import "./Navbar.css";

import logo from "../Assets/newlogo.jpg";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import arrow_icon from "../Assets/arrow.jpg"
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [menu, setMenu] = useState("shop"); // Fixed typo in setMenu
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.currentTarget.classList.toggle("open"); // Changed target to currentTarget
  }

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img className='nav-logo-new img' style={{width:"150px"}} src={logo} alt="" />
       
          
        </div>
        <img onClick={dropdown_toggle} src={arrow_icon} className={`nav-dropdown ${showMenu ? 'open' : ''}`} alt="" /> {/* Added class conditional rendering for dropdown */}
        <ul ref={menuRef} className={`nav-menu ${showMenu ? 'nav-menu-visible' : ''}`}>
          <li onClick={() => { setMenu("shop") }}>
            <NavLink style={{ textDecoration: "none" }} to="/"> Shop</NavLink> {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("mens") }}>
            <NavLink style={{ textDecoration: "none" }} to="/mens"> Men</NavLink> {menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("womens") }}>
            <NavLink style={{ textDecoration: "none" }} to="/womens"> Women</NavLink> {menu === "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("kids") }}>
            <NavLink style={{ textDecoration: "none" }} to="/kids"> Kids</NavLink> {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul> 
       
        <div className="nav-login-cart d-flex">
         
          <Link to="/login" className='login-btn'><button>Login </button></Link>
          
          <i class="fa-solid fa-user"></i>
          <h1 className='text-dark fs-1 profil-dak' ><Link to="/login"> <CgProfile className='text-dark ' /></Link></h1>
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="Logo" />
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link mx-2 badge bg-danger p-3 text-white" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link mx-2" to="/shop">Shop</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link mx-2" to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link mx-2" to="/contact">Contact</Link>
//             </li>
//           </ul>
//           <div className="d-flex align-items-center">
//             <Link to="/cart" className="nav-link">
//               <img src={cart_icon} alt="Cart" />
//             </Link>
//             <Link to="/login" className="nav-link">
//               <button className="btn btn-outline-primary">Login</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
