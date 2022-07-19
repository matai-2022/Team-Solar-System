import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const SecondNav = () => {
  const dispatch = useDispatch()
  return (
    //whole page
    <div className="flex justify-end pr-5">
      {/* far right side */}

      <nav
        style={{
          background: 'rgba(0, 0, 0, 0)',
          position: 'absolute',
          zIndex: 10,

          // height: '100vh',
        }}
        className="flex flex-col text-white h-full"
      >
        <div className="flex flex-col  text-2xl pl-2 lg:text-3xl lg:pl-5 space-y-0">
          <Link className="flex hover:text-cyan-600" to="/scale">
            SCALE
          </Link>

          <button
            // onClick={() => {
            //   dispatch(setPause(planet === '' ? true : false))
            // }}
            className="flex hover:text-cyan-600"
            // style={{ color: planet === 'mercury' ? '#ef6c00' : '' }}
          >
            PLAY/PAUSE
          </button>
        </div>
      </nav>
    </div>
  )
}

export default SecondNav
