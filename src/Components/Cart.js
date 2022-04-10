import React from "react";
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";



function Cart() {

    const [count, setCount] = useState(0);

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [price, setPrice] = useState('');
    const [id, setID] = useState(null);
    // const[total,setTotal] =useState('');


    useEffect(() => {
        setID(localStorage.getItem('id'))
        setName(localStorage.getItem('name'));
        setPhoto(localStorage.getItem('photo'));
        setPrice(localStorage.getItem('price'));



    }, [])

    const setData = (id, price) => {
        localStorage.setItem('id', id)
        // localStorage.setItem('name', name)
        // localStorage.setItem('photo', photo)
        localStorage.setItem('price', price)
        // localStorage.setItem('total',total)
        // localStorage.setItem('details', details)

    }

    return (
        <div>
            <div className="container mx-auto px-20  py-20 text-white">
                <h1 className="sm:text-xl md:text-3xl ">Cart details</h1>

                <div className="grid grid-cols-2 gap-5  md:grid-cols-3 p-2">
                   
                    <img
                        className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                        alt="cart"
                        src={photo}
                    ></img>

                    <div class="mb-6 text-white">
                        <p className="text-base md:text-xl  ">{name}</p>
                        <p className="text-base md:text-lg   ">₹{price}</p>
                        <p className="text-base md:text-lg   ">Total Price</p>
                        <p className="text-base md:text-lg   ">₹{price*count}</p>
                    </div>

                    <div className="justify-center ml-6 ">
                        <h1 className="text-xl font-semibold text-white ">No of Quantity</h1>
                        <div className=" flex  py-3 text-white ">
                            <button onClick={() => setCount(count - 1)} className={`  ${count <= 0 ? 'bg-red-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700'} `}>-</button>
                            <button className="p-5"> {count} </button>
                            <button onClick={() => setCount(count + 1)} className={`  ${count >= 100 ? 'bg-red-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700'} `}>+</button>
                        </div>
                        <div className="justify-center py-5 px text-white font-bold">
                            <button onClick={() => setData(id,price )}   className={`  ${count === 0 ? '  bg-red-600 opacity-50 cursor-not-allowed px-12 py-8 rounded-md ' : 'rounded-md px-10 py-4 my  bg-red-600 hover:bg-red-700'} `}><Link to="/paymentconfirmation">Next </Link><Outlet /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart;