import React from 'react'
import { apiUrl } from '../../API/api'
function SingleProduct({product}) {
  return (
    <>
      <div className="card h-100">
          <img src={`http://localhost:8000/image/product_image/small/${product.product_image}`} className="card-img-top" alt={product.product_name} />
          <div className="card-body">
              <h5 className="card-title">{product.product_name}</h5>
              <p className="card-text">{product.product_description}</p>
              <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">${product.product_price}</span>
                  <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
          </div>
      </div>
    </>
  )
}

export default SingleProduct