import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [sunToggle, setSunToggle] = useState(false)
  return (
    <nav
      // style={{ width: '12vw', height: '100vh' }}
      className="flex flex-col text-white w-1/5 h-full"
    >
      <div className="flex flex-col text-4xl">
        <Link className="flex border-b-2 border-gray-600" to="/">
          HOME
        </Link>
        <button onClick={() => setSunToggle(!sunToggle)} className="flex">
          SUN
        </button>
        {sunToggle && (
          <ul className="list-disc text-xl bg-gray-600">
            <li> Size: 1 Million Earths</li>
            <li> Temperature: 5,500°C </li>
            <li> Age: 4.5 Billion Years Old</li>
            <li> Distance from Earth: 93 Million Miles</li>
            <li> Day Length: 26 Earth-Days</li>
            <li> Fun Fact: The Sun is A Star! </li>
          </ul>
        )}

        {/* Mercury */}
        <button onClick={() => setToggle(!toggle)} className="flex">
          MERCURY
        </button>
        {toggle && (
          <ul className="list-disc text-xl bg-gray-600">
            <li> 1st Planet From The Sun</li>
            <li> Size: 18 Mercuries Would Fit in Earth </li>
            <li> Temperature: -180°C to 430°C </li>
            <li> Planet Type: Terrestrial Planet </li>
            <li> Day Length: 88 Earth-Days</li>
            <li> Fun Fact: Smallest Planet in The Solar System </li>
          </ul>
        )}

        <button className="flex">VENUS</button>
        <div className="hidden">
          <ul className="list-disc text-xl bg-gray-600">
            <li>2nd Planet From The Sun </li>
            <li> Size: Almost Same Size As Earth </li>
            <li> Temperature: 482°C </li>
            <li> Planet Type: Terrestrial Planet </li>
            <li> Distance from Earth:</li>
            <li> Day Length: 225 Earth-Days</li>
            <li> Fun Fact: The Days are Longer Than the Years </li>
            <li> Hottest Planet In Solar System</li>
          </ul>
        </div>

        <button className="flex">EARTH</button>
        <div className="hidden">
          <ul className="list-disc text-xl bg-gray-600">
            <li>3rd Planet From The Sun</li>
            <li> Temperature: -89°C to 56°C </li>
            <li> Planet Type: Terrestrial Planet </li>
            <li> Day Length: 24 Hours</li>
            <li> Moons: 1</li>
            <li> Fun Fact: You Live Here! </li>
            <li> 70% of Surface is Covered With Water </li>
            <li> Densest Planet In Solar System</li>
          </ul>
        </div>

        {/* mars */}

        <button className="flex">MARS</button>
        <div className="hidden">
          <ul className="list-disc text-xl bg-gray-600">
            <li> 4th Planet From The Sun</li>
            <li> Size: Half the Size of Earth </li>
            <li> Temperature: -153°C to 20°C</li>
            <li> Day Length: 1.027 Earth Days </li>
            <li> Planet Type: Terrestrial Planet </li>
            <li> Moons: 2</li>
            <li> Fun Fact: Has The Largest Volcano in the Solar System</li>
          </ul>
        </div>

        {/* Jupiter */}

        <button className="flex">JUPITER</button>
        <div className="hidden">
          <ul className="list-disc text-xl bg-gray-600">
            <li> 5th Planet From The Sun</li>
            <li> Size: 1,300 Earths Would Fit in Jupiter </li>
            <li> Temperature: -110 °C </li>
            <li> Day Length: 10 Earth Hours </li>
            <li> Planet Type: Gas Giant </li>
            <li> Moons: 53 </li>
            <li> Fun Fact: Largest Planet in Solar System </li>
          </ul>
        </div>

        <button className="flex">SATURN</button>
        <div className="hidden">
          <ul className="list-disc text-xl bg-gray-600">
            <li> 6th Planet From The Sun</li>
            <li> Size: 700 Earths Would Fit in Saturn </li>
            <li> Temperature: -139.15°C </li>
            <li> Day Length: 10.7 Earth Hours </li>
            <li> Planet Type: Gas Giant </li>
            <li> Moons: 53 Confirmed, 29 Provisional</li>

            <li>
              Fun Fact: Saturns Rings Are Thought To Be Made Up of Broken
              Comets, Asteroids and Shattered Moons
            </li>
          </ul>
        </div>

        <button className="flex">URANUS</button>
        <div className="hidden">
          <ul className="list-disc text-xl bg-gray-600">
            <li> 7th Planet From The Sun</li>
            <li>Size: 63 Earths Would Fit in Uranus</li>
            <li> Average Temperature: -195°C</li>
            <li> Day Length: 17 Hours 14 Minutes </li>
            <li> Planet Type: Ice Giant </li>
            <li> Moons: 27</li>

            <li>
              Fun Fact: Uranus Was The First Planet Found With a Telescope.
            </li>
          </ul>
        </div>

        <button className="flex">NEPTUNE</button>
        <div className="hidden">
          <ul className="list-disc text-xl bg-gray-600">
            <li> 8th Planet From The Sun</li>
            <li> Size: 57 Earths Would Fit in Neptune</li>
            <li> Temperature: -200°C</li>
            <li> Day Length: 16 Earth Hours </li>
            <li> Planet Type: Ice Giant </li>
            <li> Moons: 14</li>
            <li>
              Fun Fact: Neptune Was Predicted by Mathematics Before Discovery
              With Telescope
            </li>
          </ul>
        </div>

        <button className="flex">PLUTO</button>
        <div className="hidden">
          <ul className="list-disc text-xl bg-gray-600">
            <li>
              Pluto Was Downgraded from a Planet To a Dwarf Planet in 2006
            </li>
            <li> Size: 154 Plutos can Fit in Earth </li>
            <li> Temperature: -232°C</li>
            <li> Day Length: 153 Earth Hours </li>
            <li> Moons: 5</li>

            <li> Planet Type: Dwarf Planet </li>
            <li> Fun Fact: Named by an 11-Year-Old Girl in 1930</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar