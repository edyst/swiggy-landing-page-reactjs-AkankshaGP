import React from 'react'
import "./Features.css"

const Feature = (props) => {
  return (
      <div className="flex-item">
    <img width="40%"src={props.img} className={props.className}/>
    <h2 className='h2f'>{props.title}</h2>
    <p>{props.desc}</p>
    </div>
  )
}

export default Feature