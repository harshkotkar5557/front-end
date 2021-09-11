import React from 'react'
import {Link } from "react-router-dom"
function home() {
    return (
        <div className='item_mainDiv'>
            <div className='items'><Link to="/" className='link'><h3>Labour</h3></Link></div>
            <div className='items'><Link to="/" className='link'><h3>Sites</h3></Link></div>
            <div className='items'><Link to="/" className='link'><h3>Cement</h3></Link></div>
            <div className='items'><Link to="/" className='link'><h3>Steel</h3></Link></div>
            <div className='items'><Link to="/" className='link'><h3>Electrician</h3></Link></div>
            <div className='items'><Link to="/" className='link'><h3>Plumber</h3></Link></div>
            <div className='items'><Link to="/" className='link'><h3>Sand</h3></Link></div>
        </div>
    )
}

export default home
