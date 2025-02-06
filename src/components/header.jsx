import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/cart";
import useCartQuantity from "../hooks/useCartQuantity";

const Header = () => {
  const totalQuantity = useCartQuantity();
  const dispatch = useDispatch();

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <header className="flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold">
        Home.
      </Link>
      <div
        className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative"
        onClick={handleOpenTabCart}
      >
        <img src={iconCart} alt="Cart" className="w-6" />
        <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
