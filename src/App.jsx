import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import NotFound404 from './pages/NotFound404';
import Layout from './pages/Layout';

import ProductDetail from './components/ProductDetail';

import './App.css'
import SearchResults from './pages/SearchResults';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='about' element={<AboutUs />}/>
          <Route path='products/*' element={<Products />}/>
          <Route path='products/:productId' element={<ProductDetail />}/>
          <Route path='search' element={<SearchResults />}/>
          <Route path='*' element={<NotFound404 />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
