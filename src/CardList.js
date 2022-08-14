import Card from './Card';

function CardList(props){
    return(
        <div className='card-wrapper'>
        {
          props.clients.map((item) =>(
          <Card
          key={item.id.toString()}
          img={item.img}
          name={item.name}
          // email={item.email}
          // username={item.username}
          location={item.location}
          about={item.about}
          github_link={item.github_link}
          skills={item.skills}
    
          />
          ))
        }
      </div>        
    )
}

export default CardList;