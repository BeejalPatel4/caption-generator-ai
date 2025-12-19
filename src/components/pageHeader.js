import React from 'react'

export default function pageHeader({  h1Text = 'Hello',
  h2Text = 'bijal',}) {
  return (
      <section className="text-white text-center 
         ml-80 top-10 absolute w-full">
          <h1 className="text-3xl  " style={{textShadow:'3px 3px 0 rgba(0,0,0,30)'}}>{h1Text}</h1>
          <h2 className="text-white/80 ">{h2Text}</h2>
        </section>
  )
}
  
  
