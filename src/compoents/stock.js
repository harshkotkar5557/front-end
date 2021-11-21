import React from 'react'
import Card from './Card'

const Stock = () => {
    let stockData = [
        {
          id:'1',
          itemName: "Parle 5rs",
          inStock: 320
        },
        {
          id:'2',
          itemName: "Parle 10rs",
          inStock: 380
        },
        {
          id:'3',
          itemName: "Parle 15rs",
          inStock: 500
        },
        {
          id:'4',
          itemName: "Parle 20rs",
          inStock: 120
        }
      ]
    return (
      <div>
            <form className='stock_form'>
            <select required>
                 <option>Select Item</option>
                    <option value='Parle 5rs'>Parle 5rs</option>
                    <option value='Parle 10rs'>Parle 10rs</option>
                    <option value='Parle 15rs'>Parle 15rs</option>
                    <option value='Parle 20rs'>Parle 20rs</option>
                </select >
            <input type="number" name="name" placeholder='Enter quantity' required />
            <button>Update Stock</button>
            </form>
            <Card data={stockData}/>
        </div>
    )
}

export default Stock
