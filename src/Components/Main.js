import { Link } from "react-router-dom"
import Matchdaymeals from "../Assets/1.jpg"
import Chickenbuckets from "../Assets/2.jpg"
import BriyaniBucket from "../Assets/3.jpg"
import Boxmeals from "../Assets/4.jpg"
import Snacks from "../Assets/5.jpg"
import Burger from "../Assets/6.jpg"

function Main() {

    return (
        <div className="sm:p-10   md:pl-14 justify-center relative">

            <div className=" text-white  grid grid-cols-2 gap-5  md:grid-cols-3 pl-5">
                <div className=" border-1  rounded-md">
                    <div>
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                            alt="meals"
                            src={Matchdaymeals}
                        ></img>

                    </div>
                    <div className=" ">
                        <button className="sm:text-xs  sm:px-1 sm:py-1 md:text-xl   justify-center underline underline-offset-1">
                            <Link to="/matchday"> Match day Specials </Link>
                        </button>
                    </div>

                </div>
                <div className=" border-1  rounded-md">
                    <div>
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                            alt="meals"
                            src={Chickenbuckets}
                        ></img>

                    </div>
                    <div className=" whitespace-pre ">
                        <button className="sm:text-sm sm:px-1 sm:py-1 md:text-xl underline underline-offset-1 ">
                            <Link to="/chickenbuckets">Chicken Buckets </Link>
                        </button>
                    </div>

                </div>
                <div className=" border-1  rounded-md">
                    <div>
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                            alt="meals"
                            src={BriyaniBucket}
                        ></img>

                    </div>
                    <div className="">
                        <button className="sm:text-sm sm:px-1 sm:py-1 md:text-xl underline underline-offset-1 ">
                            <Link to="/briyanibuckets">Briyanibuckets </Link>
                        </button>
                    </div>

                </div>
                <div className=" border-1  rounded-md">
                    <div>
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                            alt="meals"
                            src={Boxmeals}
                        ></img>

                    </div>
                    <div className="">
                        <button className="sm:text-sm sm:px-1 sm:py-1 md:text-xl underline underline-offset-1 ">
                        <Link to="boxmeals"> Boxmeals</Link>  
                        </button>
                    </div>

                </div>
                <div className=" border-1  rounded-md">
                    <div>
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                            alt="meals"
                            src={Snacks}
                        ></img>

                    </div>
                    <div className="">
                        <button className="sm:text-sm sm:px-1 sm:py-1 md:text-xl underline underline-offset-1  ">
                          <Link to="burger"> Burger</Link>  
                        </button>
                    </div>

                </div>
                <div className=" border-1  rounded-md">
                    <div>
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                            alt="meals"
                            src={Burger}
                        ></img>

                    </div>
                    <div className="">
                        <button className="sm:text-sm sm:px-1 sm:py-1 md:text-xl underline underline-offset-1   ">
                        <Link to="snacks">Snacks</Link> 
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Main;