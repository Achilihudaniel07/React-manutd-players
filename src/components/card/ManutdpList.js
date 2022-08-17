import React from 'react'
import Manutdp from '../card/Manutdp'

function ManutdpList(props) {
  return (

<div className='card-wrapper'>
        {
          props.clients.map((item) =>(
          <Manutdp
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

export default ManutdpList