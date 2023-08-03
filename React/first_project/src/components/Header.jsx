import React from 'react'
import {Link} from "react-router-dom"


function Header() {
  return (
    <nav>
      <h1>TechStar.</h1>
      <main>
        <Link to={"/"} >Home</Link>
        <Link to={"/contact"}>contact</Link>
        <Link to={"/#about"}>About</Link>
        <Link to={"/#brands"}>Brands</Link>
        <Link to={"/service"}>Service</Link>
      </main>
    </nav>
  )
}

export default Header