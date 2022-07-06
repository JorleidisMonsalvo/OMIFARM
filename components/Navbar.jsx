import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">OMI FARM</Link>
      </p>
      <p className="navbar-link">
        <Link href="/">Productos</Link>
      </p>
      <p className="navbar-link">
        <Link href="/">Testimonios</Link>
      </p>
      <p className="navbar-link">
        <Link href="/">Sobre nosotros</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default Navbar;
