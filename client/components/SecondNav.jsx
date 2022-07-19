import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setPause, selectPause } from '../slices/pause'

const SecondNav = () => {
  const pause = useSelector(selectPause)
  const dispatch = useDispatch()
  return (
    //whole page
    <div className="flex justify-end pr-5">
      {/* far right side */}

      <nav
        className="flex flex-col text-white h-full"
        style={{
          background: 'rgba(0, 0, 0, 0)',
          position: 'absolute',
          zIndex: 10,
        }}
      >
        <div className="flex flex-col  text-2xl pl-2 lg:text-3xl lg:pl-5 space-y-0">
          
          <Link className="flex hover:text-cyan-600" to="/scale">
            SCALE
          </Link>

          <button
            onClick={() => {
              dispatch(setPause(!pause))
            }}
            className="flex hover:text-cyan-600"
          >
            PLAY/PAUSE
          </button>
        </div>
      </nav>
    </div>
  )
}

export default SecondNav
