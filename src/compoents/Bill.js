import React, { useEffect } from 'react'
import { useState } from 'react';
const Bill = () => {

    let [customer, setCustomer] = useState('')
    let [item, setItem] = useState('')
    let [itemQuantity,setItemQuantity]= useState('')
    let [itemList, setItemList] = useState([])
    let [btnType, setBtnType] = useState(false)
    let [selectedItmeDetail,setSelectedItemDetails]=useState({})
    
   
    useEffect(() => {
        console.log(itemList)
    },[itemList])
    
    async function addItemToList(e) {
        e.preventDefault();
        if (!btnType) {
            if (!item) {
                return alert('plz enter item')
            }
            let itemLists = itemList
            let itemObj = {
                id: itemList.length + 1,
                name: item,
                quantity: itemQuantity,
                customerName: customer
            }
            itemLists.push(itemObj)
            setItemList(itemLists)
            setItem('')
            setItemQuantity('')
            setCustomer('')
        } else {
            let itemObj = {
                id:selectedItmeDetail.id,
                name: item,
                quantity: itemQuantity,
                customerName: customer
            }
            let updateItemList = itemList.map((item) => {
                if (item.id === selectedItmeDetail.id) {
                    item = itemObj
                }
                return item
           })
            setBtnType(false)
            await setItemList(updateItemList)
            console.log(itemList)
            setItem('')
            setItemQuantity('')
            setCustomer('')
            setSelectedItemDetails({})
            document.getElementById(`itemNo${e.target.dataset.id}`).style['opacity']='1'
        }
      
    }


     function handleDeleteItem(e, delItem) {
        e.preventDefault();
        if (itemList.includes(delItem)) {
            let itemLists = itemList.filter(item => delItem !== item)
            itemList = itemLists
            setItemList(itemList)
        }
    }

    function handleEdit(e) {
        // e.preventDefault()
        document.getElementById(`itemNo${e.target.dataset.id}`).style['opacity']='0.5'
        let selectedItem = itemList.find((item) => item.id === Number(e.target.dataset.id))
        setBtnType(true)
        setItem(selectedItem.name)
        setItemQuantity(selectedItem.quantity)
        setCustomer(selectedItem.customerName)
        setSelectedItemDetails(selectedItem)
        e.stopPropagation();
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
                    <option value='Parle 5rs'>Parle 5rs</option>
                    <option value='Parle 10rs'>Parle 10rs</option>
                    <option value='Parle 15rs'>Parle 15rs</option>
                    <option value='Parle 20rs'>Parle 20rs</option>
                </select>
                <input type="number" value={itemQuantity} name="name" placeholder='Enter quantity' required onChange={(e)=>setItemQuantity(e.target.value)}/>
                <button onClick={(e) => addItemToList(e)}>{btnType ? "Update Item" : 'Add Item'}</button>
                {
                    itemList && itemList.map((item,index) => (
                        <div className='itemsX' key={`itemNo${index}`} id={`itemNo${item.id}`}>{index + 1}. {item.name}  <h4><span>Quantity: </span>{item.quantity}</h4>
                             <div className='item_icon delete'  onClick={(e)=>handleDeleteItem(e,item)} >
                                <i className="fas fa-trash-alt" ></i></div>
                            <div className='item_icon' >
                                <i className="fas fa-edit" data-id={item.id} onClick={(e)=> handleEdit(e)} ></i> </div> 
                        </div>
                    ))
                }
             <input type="submit" value="Print" className='btn_submit' />
         </form>
        </div>
    )
}

export default Bill
