import React from 'react'
import {Link } from "react-router-dom"
function home() {
    return (
        <div className='item_mainDiv'>
            <div className='items'><Link to="/stock" className='link'><h3>Stock</h3></Link></div>
            <div className='items'><Link to="/customer" className='link'><h3>Customer</h3></Link></div>
            <div className='items'><Link to="/" className='link'><h3>Itmes</h3></Link></div>
            <div className='items'><Link to="/bill" className='link'><h3>Bill</h3></Link></div>
         
        </div>
    )
}

export default home
