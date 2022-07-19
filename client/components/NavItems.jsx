import React from 'react'
import { useDispatch } from 'react-redux'

export function NavItem({ planetName }) {
  const dispatch = useDispatch()
  //find function to fine the coresponding json data like in world wide routing
  planets.find()

  return (
    <>
      <button
        onClick={() => {
          dispatch(setPlanet(planet === planetName ? '' : planetName))
          dispatch(setPause(planet === '' ? true : false))
        }}
        className="flex pl-5 hover:text-orange-500"
      >
        VENUS
      </button>
      {planet === planetName && (
        <ul className="list-disc text-xl lg:text-2xl  bg-gray-600 bg-opacity-25 pl-10">
          {/* map through the data and view it as list items */}
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
    </>
  )
}
