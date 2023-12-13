import React from 'react'
import PRODUCTS from '../../data/Products'
import CardProduct from '../../component/cardProduct/CardProduct'
import "bootstrap/dist/css/bootstrap.min.css";


const Shop= () => {
  return (
    <>
       <div className="container">
        <div className="row  justify-content-around">
          <h1 className='  mb-3'>products</h1>
      
          {
            PRODUCTS.map((productData,index) => {
              return (
                <div className='col-12 col-md-6 col-lg-4 ' >
                <CardProduct  key={index} data={productData} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Shop