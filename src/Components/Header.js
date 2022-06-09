import React, { useState, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";
import Downbar from './Downbar';

import { useDispatch, useSelector } from "react-redux";

import { logout } from ".././features/userAction";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => { }, [userInfo]);
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full relative top-0 left-0  '>
      <div className='md:flex items-center justify-between bg-slate-900   py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      '>
          <span className='text-3xl mr-1 pt-2 text-white'>
            <Link to="/home" >CFC</Link>
          </span >

        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={` text-white md:flex gap-3 md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-3/4 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? '  top-20 ' : 'top-[-490px]  '}`}>


          <li className=" rounded-lg px-4 py-2  ">
            <Link to="/">Our Menu</Link>
          </li>
          <li className=" rounded-lg px-4 py-2  ">
            <Link to="/">RESTAURANTS NEAR ME</Link>
          </li>

          <li className=" rounded-lg px-4 py-2   ">
            <Link to="/">GIFT CARD</Link>
          </li>
          <li className=" rounded-lg px-4 py-2   ">
            <Link to="/">CORPORATE ENQUIRY</Link>
          </li>
          <li className=" rounded-lg px-4 py-2   ">
            <Link to="/">CONTACT</Link>
          </li>
         
          <li className="sm:hidden  md:block  text-sm    rounded-lg px-2 py-2  bg-red-600 hover:bg-red-700 ">
            <Link to="/">DOWNLOAD APP</Link>
          </li>
          <li className=" rounded-lg px-2 py-2 text-sm    bg-red-600 hover:bg-red-700  ">
            <Link to="/">ORDER ONLINE NOW</Link>

          </li>
         
          {userInfo ? (
            <>

<ul className="flex flex-row  justify-end  space-x-9  ">

{/* <li>   <Link className="link" to="/settings">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
    </svg>
</Link></li> */}



<li className="rounded-full px-4 py-2  bg-red-600  hover:bg-red-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100" onClick={logoutHandler}>
{userInfo && "LOGOUT"}
</li>

<li className='p-2 text-xl text-justify rounded-lg  hover:ring-4 ring-red-600 transition ease-in-out duration-100'>
  Welcome {userInfo.name}
</li>
</ul>
            </>
          ) : (
            <ul className="flex flex-row  justify-center  space-x-9">
                                    <li className="rounded-lg px-4 py-2  bg-red-600  hover:bg-red-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
                                        <Link to="/login">
                                            LOGIN
                                        </Link> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                    </li >
                                    <li className="rounded-full px-4 py-2  bg-red-600  hover:bg-red-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">
                                        <Link to="/register">
                                            REGISTER
                                        </Link> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                        </svg>
                                    </li>

                                </ul>
          )}
      

        </ul>
       
        <Outlet />
      </div>
      <Downbar />
    </div>

  )
}

export default Header;