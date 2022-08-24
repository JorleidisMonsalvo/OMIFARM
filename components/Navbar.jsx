import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, changeLine } =
    useStateContext();
  return (
    <div className="navbar-container">
      <Link href="/">
        <a className="logo-nav">OMI FARM</a>
      </Link>
      <Link href="/products" >
        <a className="navbar-link" onClick={() => changeLine("")}>Productos</a>
      </Link>
      <Link href="/testimonios" className="navbar-link">
        <a className="navbar-link">Testimonios</a>
      </Link>
      <Link href="/aboutUs" className="navbar-link">
      <a className="navbar-link">Sobre nosotros</a>
      </Link>
      {/* <button type="button" className="cart-icon" onClick={()=>setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />} */}
    </div>
  );
};

export default Navbar;
