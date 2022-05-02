
import React from 'react';
import { Link, Outlet } from "react-router-dom";
// import { useSelector } from 'react-redux';

export function Payment() {

    // const user = useSelector(state => state.user.value)
    // const [count, setCount] = useState(0);
    // const [price, setPrice] = useState('');
    // const [id, setID] = useState(null);


    // useEffect(() => {
    // 	setID(localStorage.getItem('id'))
    // 	setPrice(localStorage.getItem('price'));


    // }, [])

    return (
        <div className=" ">

            <div className="flex justify-center p-10  ">
                <h1 className="text-xl font-semibold text-white  animate-rubberBand">Payment Details</h1>
              
            </div>
            <div className="md:flex md:justify-center p-5  grid grid-rows-2 justify-center ">
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap mx-3 mb-6">
                        <div class="w-3/4 md:w-2/4  px-3">
                            <label class="block uppercase tracking-wide  text-xs font-bold mb-2 text-white" for="grid-name text-white">
                                Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Cardholder Name" />
                            <p class=" text-xs italic text-white">fill out all details</p>
                        </div>

                    </div>
                    <div class="flex flex-wrap mx-3 mb-6">
                        <div class="w-3/4 md:w-2/4   px-3">
                            <label class="block uppercase tracking-wide  text-xs font-bold mb-2 text-white" for="grid-password">
                                Card Number
                            </label>
                            <input class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="XXXXXXXXXXXXXXX" />
                            <p class=" text-xs italic text-white">Enter 16 digit Card number</p>
                        </div>

                        <div class="w-1/4 md:w-1/4 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide  text-xs font-bold mb-2 text-white" for="grid-zip">
                                CVV
                            </label>
                            <input class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="password" placeholder="CVV" />
                        </div>
                    </div>
                    <div class="flex  mx-3 mb-2 ">
                        <div class="w-2/4 md:w-1/4 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide  text-xs font-bold mb-2 text-white" for="grid-city">
                                Expire date
                            </label>
                            <input class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="password" placeholder="MM/YY" />
                        </div>



                    </div>
                    <div className="flex justify-center  py-5 px  font-bold">
                    <button className=" rounded-md px-8 py-4 my  bg-red-600 hover:bg-red-700 text-white "><Link to="/paymentconfirmation">PAY  </Link><Outlet /> </button>
                </div>
                </form>
               
            </div>

        </div>
    )
}

export default Payment;