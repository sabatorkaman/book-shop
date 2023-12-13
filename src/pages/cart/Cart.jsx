import PRODUCTS from "../../data/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useEffect, useState } from "react";
import { ShopeContext } from "../../context/ShopContext";
import CardProduct from "../../component/cardProduct/CardProduct";

const Cart = () => {
  const { cartItems } = useContext(ShopeContext);
  const [total, setTotal] = useState();
  // const [price, setPrice] = useState(PRODUCTS.map((item) => item.price));

  /// باک اصلی پروژه اینجاست که نمیتوانم متد reduce بزنم

  //******/ محاسبه قیمت نهایی /******//

  // const total = cartItems.reduce((prve, currntvalue) => {
  //   return prve + currntvalue.count;
  // }, 0);
  // console.log(total);
  //  const me= useEffect(()=>{
  //     setTotal(cartItems?.reduce((acc,curr)=> Number(curr.count) ,0))
  //   },[cartItems])

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((cart) => {
      const selectProduct = PRODUCTS.find((product) => product.id === cart?.id);
      sum += cart?.count * selectProduct.price;
    });
    setTotal(sum);
  }, [cartItems]);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center my-5">cart items</h1>

          {/* {
            cartItems.map(cart => {
              const selectProduct = PRODUCTS.find(product => product.id === cart.id);
              return (
                <>
                <div  className="col-sm-12 col-md-6 col-lg-4">
                <CardProduct key={cart.id} data={selectProduct}  />
                price: {
                  cart.count * selectProduct.price
                }
                </div>
                </>
              )
            })
          } */}

          {PRODUCTS.map((p) => {
            // console.log(PRODUCTS.find((item)=> item.id !== p.id))

            if (cartItems?.some((i) => i.id === p.id && i.count > 0))
              return (
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <CardProduct key={p.id} data={p} />
                  {/* price:{
                price.find(product => product.id === p.id) * cartItems.find(cart => cart.id === p.id).count
               
                }
                 */}
                </div>
              );
          })}
        </div>
        <br />
        <h3 className="my-5">total price : {total}</h3>
      </div>
    </>
  );
};

export default Cart;
