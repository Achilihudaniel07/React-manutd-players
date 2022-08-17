import './Manutdp.css';

function Manutdp(props) {
  return (
    <div  className="card-container">
        <div className='face face2'>

        <img src = {props.img} alt='...'/>  

        </div>

      <div className='face face1'>

        <h4>{props.name}</h4>
        <p>{props.username}</p>
        <p><b>Position:</b> <i>{props.position}</i></p>
        <p><b>Jersey no.</b> {props.jersey}</p>
         <p><b>Age:</b> <i>{props.Age}</i></p>
    
      </div>
        


    </div>

      
  )
}

export default Manutdp