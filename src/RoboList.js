import React from 'react'
import Robo from './Robo'

function RoboList(props) {
  return (

<div className='card-wrapper'>
        {
          props.clients2.map((item) =>(
          <Robo
          key={item.id.toString()}
          name={item.name}
          username={item.username}
          position={item.position}
          Age={item.Age}
          jersey={item.jersey}
          img={item.img}
    
          />
          ))
        }
    </div>
  )
}

export default RoboList