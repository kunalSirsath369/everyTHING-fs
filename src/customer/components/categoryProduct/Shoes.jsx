import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { mens_shoes } from '../../../data/mens_shoes'

const Shoes = () => {
  return (
    <div><h1 className="pt-28 pb-20 text-white text-5xl font-semibold  text-center">Shoes</h1>
    <div>
    <div className=" flex flex-wrap space-x-5 space-y-5 justify-center">
      {mens_shoes.map((item) => (
        <HomeSectionCard product={item} />
      ))}
    </div></div>
    </div>
  )
}

export default Shoes