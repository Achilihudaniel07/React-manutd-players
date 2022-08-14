import React from 'react'
import './Body.css'
import hero from './images/hero.jpg'
import herodesk from './images/herodesk.jpg'
import logo from './images/logo.svg'



function Body() {
  return (
    <div>
      <div className='first'>
        <div className='sec'>
            <img src= {logo} alt="logo" /><br/>
            <img id='image' src={hero} alt="hero" />
            <h1><span>WE'RE</span> COMING SOON</h1>
            <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals. </p>
            <input type="text" placeholder='Email Address'/>
            <button> {">"} </button>
            
            
             <br/>
        </div>
        <div className='the'>
            <img className='hit' src= {herodesk} alt="hero" />
        </div>
      </div>
        
        <footer>
          <p> &nbsp; &copy; Copyright Martins Daubry</p>
        </footer>
    </div>

   
  )
}

export default Body