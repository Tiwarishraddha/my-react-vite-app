import React from 'react'

const Background = () => {
  return (
    <div>
      <div className='fixed z-[2] w-full h-screen'>
      <h1 className="absolute w-full h-screen text-center mt-10  top-[5%] text-xl font-bold text-zinc-600">
       Documents
      </h1>
      <h1 className='text-[13vw] loading-none absolute top-1/2 
      left-1/2 -translate-x-[50%] -translate-y-[50%] tracking-tighter 
      font-semibold text-zinc-900 '>Docs</h1>
      </div>
    </div>
  )
}

export default Background
