import React from 'react'
import {Link } from "react-router-dom"
import logo from './architect.png'
function navbar() {
    return (
        <div className='navbar'>
            <h1><img className='logo' src={logo}/> Sai Construction</h1>
           <div className='navbar_list'>
               <div><Link to="/" className='link'><h4>Home</h4></Link></div>
               <div><Link className='link' to="/about"><h4>About</h4></Link></div>
               <div><Link className='link' to="/contactUs"><h4>Contact Us</h4></Link></div>
           </div>
        </div>
    )
}

export default navbar
