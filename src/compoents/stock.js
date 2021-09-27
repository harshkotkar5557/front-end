import React, { useEffect } from 'react'
import { useState } from 'react';
const Stock = () => {

    let [customer, setCustomer] = useState('')
    let [item, setItem] = useState('')
    let [itemQuantity,setItemQuantity]= useState(null)
    let [itemList, setItemList] = useState([])
    
   
    
    async function addItemToList(e) {
        e.preventDefault();
        if (!item) {
            return alert('plz enter item')
        }
        console.log(e.target.value)
        let itemLists = itemList
        let itemObj = {
            name: item,
            quantity:itemQuantity
        }
        await itemLists.push(itemObj)
        await setItemList(itemLists)
        setItem('')
        itemQuantity =null
        setItemQuantity(itemQuantity)
    }


    async function handleDeleteItem(e, delItem) {
        e.preventDefault();
        if (itemList.includes(delItem)) {
            let itemLists = itemList.filter(item => delItem !== item)
            itemList = itemLists
           await setItemList(itemList)
        }
    }

    return (
        <div className='form_container'>
          <form>
                <select value={customer} onChange={(e)=>setCustomer(e.target.value)} required>
                <option defaultValue >Select Customer</option>
                    <option>Customer 1</option>
                    <option>Customer 2</option>
                    <option>Customer 3</option>
                </select>
                <select value={item} onChange={(e)=>setItem(e.target.value)} required>
                 <option defaultValue>Select Item</option>
                    <option>Parle 5rs</option>
                    <option>Parle 10rs</option>
                    <option>Parle 15rs</option>
                    <option>Parle 20rs</option>
                </select>
                <input type="number" name="name" placeholder='Enter quantity' required onChange={(e)=>setItemQuantity(e.target.value)}/>
                <button onClick={(e) => addItemToList(e)}>Add Item</button>
                {
                    itemList && itemList.map((item,index) => (
                        <div className='itemsX' key={index}>{index + 1}. {item.name}  <h4><span>Quantity: </span>{item.quantity}</h4>
                             <div className='item_icon delete'  onClick={(e)=>handleDeleteItem(e,item)} >
                                <i className="fas fa-trash-alt" ></i></div>
                            <div className='item_icon'>
                                <i className="fas fa-edit"></i> </div> 
                        </div>
                    ))
                }
             <input type="submit" value="Print" className='btn_submit' />
         </form>
        </div>
    )
}

export default Stock
