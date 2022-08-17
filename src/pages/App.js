import "./App.css";
import React from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import ManutdpList from '../components/card/ManutdpList';
import Footer from '../components/footer/Footer';
import users from '../utils/users.json'



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
    const filteredPlayers= users.filter (item =>(item.name.charAt(0).toLowerCase().includes(this.state.searchInput.toLowerCase())))


    return (
      <div className="header">

        <div className='box2'>
          <h1 id='hd2' style={{textAlign:'center'}}>MANCHESTER UNITED SQUAD</h1>

          <SearchBox updateSearchInput={this.updateSearchInput}/>
          <ManutdpList clients ={filteredPlayers}/>
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