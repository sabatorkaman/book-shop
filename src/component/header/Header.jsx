"use client";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ShopeContext } from "../../context/ShopContext";
import "./index.css";
const Header = () => {
  const { cartItems } = useContext(ShopeContext);
  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  return (
    <nav className="navbar borderNav  border-bottom  navbar-light bg-dark">
      <div className="container ">
        <h4 className="navbar-brand  text-light">Book shop</h4>
        <ul className=" flex-nav mx-5 md-px-3">
          <div>
          <li className="nav-item">
            <Link className=" nav-link text-light " to="/">
              shop
            </Link>
          </li>
          </div>
          <div>
          <li className="nav-item text-light">
            <Link className="  text-light" to="./cart">
              <FontAwesomeIcon
                className="text-light fn"
                icon={faShoppingCart}
              ></FontAwesomeIcon>
              {itemCount > 0 ? (
                <span className="icon-cart ">{itemCount}</span>
              ) : (
                ""
              )}
            </Link>
          </li>
         
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
