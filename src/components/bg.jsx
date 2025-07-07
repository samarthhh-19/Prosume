import React from 'react'
import Squares from "./Squares/Squares"
const bg = () => {
  return (
    <>
    <Squares speed={0.1} squareSize={30} direction="diagonal" borderColor="rgba(0, 0, 0, 0.01)" hoverFillColor="#2563EB" />
    {/* <Squares direction="right" speed={0.5} borderColor="#999" squareSize={40} hoverFillColor="#222" /> */}
      {/* <div className="relative z-10 text-white p-8">
        <h1 className="text-5xl font-bold">My Cool Page</h1>
        <p className="mt-4">Your foreground content goes here.</p>
      </div> */}
      <Squares/>
      </>
  )
}

export default bg