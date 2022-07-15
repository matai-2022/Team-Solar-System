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
      <div className="flex flex-col h-3/4 items-center ">
        <h1 className=" flex text-7xl text-white items-center pt-10">
          Explore The Solar System
        </h1>
      </div>
    </div>
  )
}

export default LandingPage
