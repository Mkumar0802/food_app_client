import { Link} from "react-router-dom";




function Footer() {
    return (
        <div className=" bg-slate-900 text-white  pl-14  text-xs md:text-sm py-10  ">
            <div className="flex grid-cols-6  space-x-10 md:space-x-36 justify-center  ">

                <div>
                    <ul className="  ">
                        <h1 className="text-slate-500">
                            COMPANY
                        </h1>
                        <li className=" hover:text-slate-200">
                            <Link to="/">CFC Food</Link>
                        </li>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">Menu</Link>
                        </li>

                        <li className="hover:text-slate-200    ">
                            <Link to="/">Order Lookup</Link>
                        </li>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">CORPORATE ENQUIRY</Link>
                        </li>
                        <li className=" hover:text-slate-200   ">
                            <Link to="/">CONTACT</Link>
                        </li>
                        <li className="hover:text-slate-200  ">
                            <Link to="/">Gift card</Link>
                        </li>
                        <li className="hover:text-slate-200  ">
                            <Link to="/">ORDER ONLINE NOW</Link>

                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h1 className="text-slate-500">
                            ABOUT
                        </h1>
                        <li className=" hover:text-slate-200  ">
                            <Link to="/">Blog</Link>
                        </li>
                        <li className=" hover:text-slate-200  ">
                            <Link to="/">Ads</Link>
                        </li>

                        <li className=" hover:text-slate-200   ">
                            <Link to="/">Investor</Link>
                        </li>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">Feedback</Link>
                        </li>

                        <li className="hover:text-slate-200  ">
                            <Link to="/">Get Help</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h1 className="text-slate-500">
                            LEGAL
                        </h1>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">Legal</Link>
                        </li>
                        <li className=" hover:text-slate-200  ">
                            <Link to="/">Term and Conditions</Link>
                        </li>

                        <li className=" hover:text-slate-200   ">
                            <Link to="/">Privacy policy</Link>
                        </li>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">Disclaimer</Link>
                        </li>

                        <li className="hover:text-slate-200  ">
                            <Link to="/">Caution Notice</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                    <h1 className="text-slate-500">
                            OTHER
                        </h1>
                        <li className="   ">
                            <Link to="/">CFC India</Link>
                        </li>
                        <li className="   ">
                            <Link to="/">About cfc</Link>
                        </li>

                        <li className="    ">
                            <Link to="/">Cfc Care</Link>
                        </li>
                        <li className="   ">
                            <Link to="/">Careers</Link>
                        </li>

                        <li className="  ">
                            <Link to="/">Our Golden Pass</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="py-12 ">

            </div>


        </div>


    )
}


export default Footer;