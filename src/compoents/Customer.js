import React from 'react'

const Customer = () => {

    function handleModal() {
        let modal = document.getElementById('customerModal')
        let overlay = document.getElementById('overlay')
        if (overlay.style.display==='none'|| overlay.style.display==='') {
            modal.style['transform'] = 'translate(-50%, -50%)scale(1)'
            overlay.style.display = 'block'
        } else {
            modal.style['transform'] = 'translate(-50%, -50%)scale(0)'
            overlay.style.display = 'none'
        }
    }

    return (
        <div>
             <div className='customer_outer'>
             <button onClick={(e)=> handleModal()} className='modalBtn' >Add Customer +</button>
            </div>
            <div id='overlay' className='overlay'>
            <form className='customerForm' id='customerModal'>
                <p onClick={(e)=> handleModal()}>&times;</p>
                <input type="text" name="customerName" placeholder='Customer Name' required />
                <input type="number" name="contactNo" placeholder='Contact Number' required />
                <input type="text" name="name" placeholder='Enter quantity' required />
                <input type="text" name="owerName" placeholder='Owner Name' required />
                <input type="text" name="address" placeholder='Address' required />
                <input type="text" name="city" placeholder='City' required />
                <button>Add Customer</button>
            </form>
            </div>
            <div className='listDiv'>
                <table>
                    
                </table>
            </div>
        </div>
    )
}

export default Customer
