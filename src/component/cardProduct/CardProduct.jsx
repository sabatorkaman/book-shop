import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";
import { ShopeContext } from "../../context/ShopContext";
const CardProduct = ({ data }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopeContext);
  const [flag, setFlag] = useState(false);
  const handleshowFlag = () => {
    setFlag(true);
  };

  return (
    <>
      <div className="col-4 w-100 m-auto borderCard g-5 borderCard my-3 ">
        <img
          className="pt-2  w-75 d-flex justifuy-content-center m-auto text-center rounded-3 rounded-top-4"
          src={data.imgSrc}
          alt="s-t"
          width="270 "
          height="320"
        />
        <div className="decsriptionBooks text-center mt-2 ">
          <h3 className="title">{data.title}</h3>
          <h4>اثر{data.author}</h4>

          <div className="fs-5">
            <h5>{data.language}:زبان</h5>
            <div>{data.genre}:ژانر</div>
            <div>{data.price}$</div>
          </div>

          <button
            onClick={() => addToCart(data.id)}
            onMouseDown={handleshowFlag}
            className="btn btn-secondary btn-sm my-2"
          >
            +
          </button>

          <span className=" text-danger mx-2 ">
            {cartItems?.filter((row) => row.id === data.id)[0]?.count}
          </span>

          {flag === true ? (
            <button
              onClick={() => removeFromCart(data.id)}
              className="btn btn-secondary btn-sm my-2"
            >
              -
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CardProduct;
