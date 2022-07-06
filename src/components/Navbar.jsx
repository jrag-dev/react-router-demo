import { NavLink } from "react-router-dom"

import './Navbar.css';


const Navbar = () => {
  return (
    <header className='header'>
      <h1 className='titulo'>ProductsPage</h1>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
