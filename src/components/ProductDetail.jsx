import React from "react"
import {useParams} from "react-router-dom"
import {useFetch} from "../hooks/useFetch"
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const ProductDetail = () => {

  const { productId } = useParams()

  const url = `${import.meta.env.VITE_API_URL}/${productId}`

  const { data, error, loading } = useFetch(url)

  return (
    <>
      <h2>ProductDetail:</h2>

      <div className='detail'>
        <img src={data.thumbnail} alt={data.title} />
        <div className="text">
          <h4>{data.title}</h4>
          <p>Price: {data.price} $</p>
          <p>Description: {data.description}</p>
          <p>Stock: {data.stock} units</p>

          <Link to='/products' className='detail-button'><FiArrowLeft className="icon"/> Back to product page</Link>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
