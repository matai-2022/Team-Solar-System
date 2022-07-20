import React from 'react'
import { Link } from 'react-router-dom'

const SecondNav = () => {
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
        className="flex flex-col text-white h-full "
      >
        <div className="flex flex-col  text-2xl pl-2 lg:text-3xl lg:pl-5 ">
          <Link
            className="flex pl-5 mb-2 underline decoration-1 hover:text-cyan-600"
            to="/solarsystem"
          >
            BACK
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default SecondNav
