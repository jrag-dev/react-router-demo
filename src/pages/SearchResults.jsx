import React from "react"
import {useSearchParams} from "react-router-dom"
import ProductList from "../components/ProductList"
import {useFetch} from "../hooks/useFetch"



const SearchResults = () => {

  const [searchParams] = useSearchParams()
  let search = searchParams.get('keyword')

  const url = `${import.meta.env.VITE_API_URL}/search?q=${search}`

  const { data, error, loading } = useFetch(url)

  return (
    <>
      <h2>SearchResults</h2>

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

export default SearchResults
