import React from 'react'
import {Link } from "react-router-dom"
function home() {
    return (
        <div className='item_mainDiv'>
            <div className='items'><Link to="/" className='link'><h3>Stock</h3></Link></div>
            <div className='items'><Link to="/stock" className='link'><h3>Customer</h3></Link></div>
            <div className='items'><Link to="/" className='link'><h3>Reports</h3></Link></div>
            <div className='items'><Link to="/" className='link'><h3>History</h3></Link></div>
         
        </div>
    )
}

export default home
