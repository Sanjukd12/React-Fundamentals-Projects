import React from 'react'
import data from './data'

const Person = ({image, name, age}) => {
  return (
    <article className='person'>

      <img src={image} alt={name} className='img'/>
    </article>
  )
}

export default Person