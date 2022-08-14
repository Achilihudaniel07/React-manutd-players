import SearchBox from './SearchBox';
import members from './members.json';
import "./App.css";
import React from 'react';
import Footer from './Footer/Footer';
import RoboList from './RoboList';
import CardList from './CardList';
import users from './users.json'



// function App() {

//   return (
//     <div className="">
//       <h1 style={{textAlign:'center'}}>Robofriends</h1>
      
//       <SearchBox/>
//       <Cardlist clients ={users}/>
//     </div>
//   );
// }


//To convert to Class Component 

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      searchInput: ''
    }
  }

  updateSearchInput = (event) =>{
    this.setState({searchInput:event.target.value})
  }

  render(){
    const filteredRobots = members.filter (item =>(item.name.charAt(0).toLowerCase().includes(this.state.searchInput.toLowerCase())))

    const filteredRobots2 = users.filter (item =>(item.name.charAt(0).toLowerCase().includes(this.state.searchInput.toLowerCase())))


    return (
      <div className="header">

      
       <div className='box1'>
       <h1 style={{textAlign:'center'}}>MANCHESTER UNITED SQUAD</h1>
        <RoboList clients2 ={filteredRobots2}/>
        </div>


        <div className='box2'>
          <h1 style={{textAlign:'center'}}>ITF-NECA FRIENDS</h1>

          <SearchBox updateSearchInput={this.updateSearchInput}/>
          <CardList clients ={filteredRobots}/>
        </div>
        <hr></hr>



        <hr></hr>
      
        <div className='box3'>
      
          <Footer/>
          </div>

      </div>
    );
  }
}


export default App;