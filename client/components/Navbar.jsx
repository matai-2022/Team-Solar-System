import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setPause } from '../slices/pause'
import { selectPlanet, setPlanet } from '../slices/planet'


const Navbar = () => {
  const planet = useSelector(selectPlanet)
  const dispatch = useDispatch()

  return (
    // entire nav div
    <nav
      style={{
        background: 'rgba(0, 0, 0, 0)',
        position: 'absolute',
        zIndex: 10,

        // height: '100vh',
      }}
      className="flex flex-col text-white h-full "
    >
      {/* entire nav as well  */}
      <div className="flex flex-col text-2xl pl-2 lg:text-3xl lg:pl-5  ">
        <div className="flex flex row">
          <Link
            className="flex pl-5 mb-2 underline decoration-1 hover:text-cyan-600"
            to="/"
          >
            HOME
          </Link>

          {/* <Link
            className="flex pl-5 mb-2 underline decoration-1 hover:text-cyan-600"
            to="/scale"
          >
            SCALE
          </Link> */}
        </div>

        <button
          onClick={() => {
            dispatch(setPlanet(planet === 'sun' ? '' : 'sun'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex  pl-5 hover:text-orange-500"
          style={{ color: planet === 'sun' ? '#ef6c00' : '' }}
        >
          SUN
        </button>
        {planet === 'sun' && (
          <ul className="list-disc text-2xl bg-gray-600 bg-opacity-25 pl-10">
            <li> Size: 1 Million Earths Would Fit in the Sun</li>
            <li> Temperature: 5,500°C </li>
            <li> Age: 4.5 Billion Years Old</li>
            <li> Distance from Earth: 93 Million Miles</li>
            <li> Day Length: 26 Earth-Days</li>
            <li> Fun Fact: The Sun is A Star! </li>
          </ul>
        )}

        {/* Mercury Div */}
        <button
          onClick={() => {
            dispatch(setPlanet(planet === 'mercury' ? '' : 'mercury'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex pl-5 hover:text-orange-500"
          style={{ color: planet === 'mercury' ? '#ef6c00' : '' }}
        >
          MERCURY
        </button>
        {planet === 'mercury' && (
          <ul className="list-disc text-2xl  bg-gray-600 bg-opacity-25 pl-10">
            <li> 1st Planet From The Sun</li>
            <li> Size: 18 Mercuries Would Fit in Earth </li>
            <li> Temperature: -180°C to 430°C </li>
            <li> Planet Type: Terrestrial Planet </li>
            <li> Day Length: 88 Earth-Days</li>
            <li> Fun Fact: Smallest Planet in The Solar System </li>
          </ul>
        )}

        {/* Venus Div */}
        <button
          onClick={() => {
            dispatch(setPlanet(planet === 'venus' ? '' : 'venus'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex pl-5 hover:text-orange-500"
          style={{ color: planet === 'venus' ? '#ef6c00' : '' }}
        >
          VENUS
        </button>
        {planet === 'venus' && (
          <ul className="list-disc text-xl lg:text-2xl  bg-gray-600 bg-opacity-25 pl-10">
            <li>2nd Planet From The Sun </li>
            <li> Size: Almost The Same Size As Earth </li>
            <li> Temperature: 482°C </li>
            <li> Planet Type: Terrestrial Planet </li>
            <li> Distance from Earth:</li>
            <li> Day Length: 225 Earth-Days</li>
            <li> Fun Fact: The Days are Longer Than the Years </li>
            <li> Hottest Planet In Solar System</li>
          </ul>
        )}

        {/* Earth Div */}

        <button
          onClick={() => {
            dispatch(setPlanet(planet === 'earth' ? '' : 'earth'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex pl-5 hover:text-orange-500"
          style={{ color: planet === 'earth' ? '#ef6c00' : '' }}
        >
          EARTH
        </button>
        {planet === 'earth' && (
          <ul className="list-disc text-xl lg:text-2xl  bg-gray-600 bg-opacity-25 pl-10">
            <li>3rd Planet From The Sun</li>
            <li> Temperature: -89°C to 56°C </li>
            <li> Planet Type: Terrestrial Planet </li>
            <li> Day Length: 24 Hours</li>
            <li> Moons: 1</li>
            <li> Fun Fact: You Live Here! </li>
            <li> 70% of Surface is Covered With Water </li>
            <li> Densest Planet In Solar System</li>
          </ul>
        )}

        {/* mars */}

        <button
          onClick={() => {
            dispatch(setPlanet(planet === 'mars' ? '' : 'mars'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex pl-5 hover:text-orange-500"
          style={{ color: planet === 'mars' ? '#ef6c00' : '' }}
        >
          MARS
        </button>
        {planet === 'mars' && (
          <ul className="list-disc text-xl lg:text-2xl  bg-gray-600 bg-opacity-25 pl-10">
            <li> 4th Planet From The Sun</li>
            <li> Size: Half the Size of Earth </li>
            <li> Temperature: -153°C to 20°C</li>
            <li> Day Length: 1.027 Earth Days </li>
            <li> Planet Type: Terrestrial Planet </li>
            <li> Moons: 2</li>
            <li> Fun Fact: Has The Largest Volcano in the Solar System</li>
          </ul>
        )}

        {/* Jupiter */}

        <button
          onClick={() => {
            dispatch(setPlanet(planet === 'jupiter' ? '' : 'jupiter'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex pl-5 hover:text-orange-500"
          style={{ color: planet === 'jupiter' ? '#ef6c00' : '' }}
        >
          JUPITER
        </button>
        {planet === 'jupiter' && (
          <ul className="list-disc text-xl lg:text-2xl bg-gray-600 bg-opacity-25 pl-10">
            <li> 5th Planet From The Sun</li>
            <li> Size: 1,300 Earths Would Fit in Jupiter </li>
            <li> Temperature: -110 °C </li>
            <li> Day Length: 10 Earth Hours </li>
            <li> Planet Type: Gas Giant </li>
            <li> Moons: 53 </li>
            <li> Fun Fact: Largest Planet in Solar System </li>
          </ul>
        )}

        {/* Saturn Div */}

        <button
          onClick={() => {
            dispatch(setPlanet(planet === 'saturn' ? '' : 'saturn'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex pl-5 hover:text-orange-500"
          style={{ color: planet === 'saturn' ? '#ef6c00' : '' }}
        >
          SATURN
        </button>
        {planet === 'saturn' && (
          <ul className="list-disc text-xl lg:text-2xl bg-gray-600 bg-opacity-25 pl-10">
            <li> 6th Planet From The Sun</li>
            <li> Size: 700 Earths Would Fit in Saturn </li>
            <li> Temperature: -139.15°C </li>
            <li> Day Length: 10.7 Earth Hours </li>
            <li> Planet Type: Gas Giant </li>
            <li> Moons: 53 Confirmed, 29 Provisional</li>

            <li>
              Fun Fact: Saturns Rings Are Thought To Be Made <br></br>Up of
              Broken Comets, Asteroids and Shattered Moons
            </li>
          </ul>
        )}

        {/* Uranus Div */}

        <button
          onClick={() => {
            dispatch(setPlanet(planet === 'uranus' ? '' : 'uranus'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex pl-5 hover:text-orange-500"
          style={{ color: planet === 'uranus' ? '#ef6c00' : '' }}
        >
          URANUS
        </button>
        {planet === 'uranus' && (
          <ul className="list-disc text-xl lg:text-2xl bg-gray-600 bg-opacity-25 pl-10">
            <li> 7th Planet From The Sun</li>
            <li>Size: 63 Earths Would Fit in Uranus</li>
            <li> Average Temperature: -195°C</li>
            <li> Day Length: 17 Hours 14 Minutes </li>
            <li> Planet Type: Ice Giant </li>
            <li> Moons: 27</li>

            <li>Fun Fact: The First Planet Found With a Telescope.</li>
          </ul>
        )}

        {/* Neptune Div */}

        <button
          onClick={() => {
            dispatch(setPlanet(planet === 'neptune' ? '' : 'neptune'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex pl-5 hover:text-orange-500"
          style={{ color: planet === 'neptune' ? '#ef6c00' : '' }}
        >
          NEPTUNE
        </button>
        {planet === 'neptune' && (
          <ul className="list-disc text-xl lg:text-2xl bg-gray-600 bg-opacity-25 pl-10">
            <li> 8th Planet From The Sun</li>
            <li> Size: 57 Earths Would Fit in Neptune</li>
            <li> Temperature: -200°C</li>
            <li> Day Length: 16 Earth Hours </li>
            <li> Planet Type: Ice Giant </li>
            <li> Moons: 14</li>
            <li>Fun Fact: First Predicted by Mathematics</li>
          </ul>
        )}

        {/* Pluto Div */}

        {/* <button
          onClick={() => {
            dispatch(setPlanet(planet === 'pluto' ? '' : 'pluto'))
            dispatch(setPause(planet === '' ? true : false))
          }}
          className="flex pl-5 hover:text-orange-500"
          style={{ color: planet === 'pluto' ? '#ef6c00' : '' }}
        >
          PLUTO
        </button>
        {planet === 'pluto' && (
          <ul className="list-disc text-xl lg:text-2xl bg-gray-600 bg-opacity-25 pl-10">
            <li>Downgraded to a Dwarf Planet in 2006</li>
            <li> Size: 154 Plutos can Fit in Earth </li>
            <li> Temperature: -232°C</li>
            <li> Day Length: 153 Earth Hours </li>
            <li> Moons: 5</li>

            <li> Planet Type: Dwarf Planet </li>
            <li> Fun Fact: Named by an 11-Year-Old Girl in 1930</li>
          </ul>
        )} */}
      </div>
    </nav>
  )
}

export default Navbar
