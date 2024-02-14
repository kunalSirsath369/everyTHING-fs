import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { new_arrival } from '../../../data/new_arrival'

const NewArrival = () => {
  return (
    <div><h1 className=" py-5 text-3xl font-semibold  text-center">New Arrivals</h1>
    <div className="flex flex-wrap space-x-5 space-y-5 justify-center">
      {new_arrival.map((item) => (
        <div className=''> <HomeSectionCard product={item} />
        </div>
        
      ))}
    </div></div>
  )
}

export default NewArrival