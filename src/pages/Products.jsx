import {useFetch} from "../hooks/useFetch"
import ProductList from "../components/ProductList";
import {useState} from "react";

import { FiSearch } from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const url = import.meta.env.VITE_API_URL; 

const Products = () => {

  const [keyword, setKeyWord] = useState('')

  let navigate = useNavigate();

  const { data, error, loading } = useFetch(url);

  if (loading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>Ha ocurrido un error en la solicitud</p>
  }


  const handleChange = e => {
    setKeyWord(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (keyword.trim() === '') {
      return;
    }

    setKeyWord('')
    e.target.reset()

    navigate(`/search?keyword=${keyword}`);
  }

  return (
    <>
      <div className='container-products'>
        <h2>Products Page</h2>
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search products by name."
            onChange={handleChange}
            defaultValue={keyword}
          />
          <button><FiSearch /></button>
        </form>
      </div>

      {
        data.products &&
          data.products.map(item => (
            <ProductList
              key={item.id}
              product={item}
            />
        ))
      }
    </>
  )
}

export default Products
