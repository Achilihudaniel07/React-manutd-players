import './Card.css';

function Card(props) {
    return (
    <div className="card-container">
        {/* <img src = {`https://robohash.org/ ${props.username}?set=set3`} alt='...'/>  */}
        
        <div className='face face2'>
        <img src = {props.img} alt='...'/>  

        </div>

      <div className='face face1'>

        {/* <p>{props.username}</p>
        <p>{props.email}</p> */}

        <h4>{props.name}</h4>
         <p><b>About:</b> <i>{props.about}</i></p>
         <p><b>Location:</b> <i>{props.location}</i></p>  
        <p><b>Skills:</b> <i>{props.skills}</i></p>
        <p><a href= {props.github_link}>Github</a></p>
      </div>

    </div>
  )
}

export default Card;