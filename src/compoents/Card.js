import React from 'react'

const Card = (props) => {
    return (
        <div className='card_outer_div'>
            {
                props.data.map((item) => (
                    <div key={item.id} className='card'>
                        <h2>{item.itemName}</h2>
                    <h3>InStock:</h3>
                    <h1>{item.inStock}</h1>
                    <p>Updated On : 21 Oct 2021</p>
                </div>
                ))
            }
           
        </div>
    )
}

export default Card
