import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {cart} from '../features/cart'
import { URLDevelopment } from "../helpers/URL";



const Briyanibuckets = ({ alignment = 'start' }) => {
    const [briyanibuckets, setBriyanibuckets] = useState([]);
    // const dispatch =useDispatch();
    console.log(briyanibuckets);

    const getData = async () => {
        try {
            let { data: response } = await axios.get(
                ` ${URLDevelopment}/briyanibucket/getbriyanibucket`
            );
            setBriyanibuckets(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const setData = (id, name, photo, price, details) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('photo', photo)
        localStorage.setItem('price', price)
        localStorage.setItem('details', details)

    }
    return (

        <div className="w-auto h-auto  ">
            <div>
                <h2 className="px-16 pt-5  text-xl   md:text-2xl font-bold text-white   animate-rubberBand">Matchday</h2>
            </div>

            <div className="  pr-10  mx-10     sm:grid-flow-grid-cols-2    md:grid-cols-3 gap-5      lg:grid grid-cols-5 ">
                {briyanibuckets.map((val) => {
                    return (
                        <div className="p-1 mr-2  m-5   rounded-lg  max-w-sm  sm:rounded-lg  " key={val.index}>
                            <img
                                className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                                alt="Briyani"
                                src={val.photo}
                            ></img>
                            <div className="p-2 text-white">
                                <p className="text-base md:text-xl  ">{val.name}</p>
                                <p className="text-base md:text-lg   ">₹ {val.price}</p>
                                <p className=" font-bold">
                                    {val.details}
                                </p>

                                <div className={`flex  justify-center lg:justify-${alignment}`}>
                                    <div className="justify-start hidden"> </div>
                                    <div className="justify-center hidden"> </div>
                                    <div className="flex justify-center   gap-3 ">

                                    {/* <Link to="/cart">
                                        <button onClick={() => dispatch(cart({name:val.name,price:val.price,photo:val.photo}))} className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                            Add to cart

                                        </button></Link> */}

                                    </div>


                                     <div className="flex justify-center   gap-3 "><Link to="/cart">
                                        <button onClick={() => setData(val.id, val.name, val.photo, val.price, val.details)} className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                            Add to cart

                                        </button></Link>

                                        
                                    </div>
                                </div>


                            </div>


                        </div>

                    );
                })}
            </div>

        </div>




    );
};

export default Briyanibuckets;