import React from 'react'

const LandingPage = () => {
  return (
    //entire page div
    <div
      className="h-full flex flex-col justify-center bg-black"
      style={{
        backgroundImage: 'url(/images/sunrise.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* //holds all the stuff */}
      <div className="flex flex-col h-3/4 items-center">
        <h1 className=" flex text-9xl text-white items-center pt-10 font-sans tracking-wider">
          EXPLORE THE SOLAR SYSTEM
        </h1>
        <button
          className="text-white items-center justify-end border-2 border-double border-white p-2"
          type="button"
          onClick="onClick"
        >
          TAKE ME AWAY
        </button>
      </div>
    </div>
  )
}

export default LandingPage
