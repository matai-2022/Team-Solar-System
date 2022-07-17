import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
      style={{ width: '10vw', height: '100vh' }}
      className="flex flex-col text-white"
    >
      <div className="flex flex-col text-4xl">
        <Link className="flex border-b-2 border-gray-600" to="/">
          HOME
        </Link>
        <button className="flex">SUN</button>
        <button className="flex">MERCURY</button>
        <button className="flex">VENUS</button>
        <button className="flex">EARTH</button>
        <button className="flex">MARS</button>
        <button className="flex">JUPITER</button>
        <button className="flex">SATURN</button>
        <button className="flex">URANUS</button>
        <button className="flex">NEPTUNE</button>
        <button className="flex">PLUTO</button>
      </div>
    </nav>
  )
}

export default Navbar
