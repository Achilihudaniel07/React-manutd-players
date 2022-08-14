import SearchBox from './SearchBox';
import Cardlist from './CardList';
import members from './members.json';
import "./App.css";
import React from 'react';
import Footer from './Footer/Footer';



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


    return (
      <div className="header">
        <h1 style={{textAlign:'center'}}>ITF-NECA FRIENDS</h1>
        
        <SearchBox updateSearchInput={this.updateSearchInput}/>
        <Cardlist clients ={filteredRobots}/>
        <Footer/>
      </div>
    );
  }
}


export default App;