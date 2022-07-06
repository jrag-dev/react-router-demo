import React from "react"
import {Link} from "react-router-dom"



const ProductList = ({ product }) => {
  return (
    <>
      <div className='product'>
        <p>
          {product.title} [<Link to={`/products/${product.id}`}>See detail</Link>]
        </p>
      </div>
    </>
  )
}

export default ProductList
