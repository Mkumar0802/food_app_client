import { Link } from "react-router-dom";


function Downbar() {

    return (
        <div className="  w-auto bg-slate-800 pl-32   place-items-center place-content-evenly text-white    md:hidden sm:hidden lg:block justify-start hidden">
            <div className="flex">
                <ul className="flex  space-x-3">
                    <li>
                        <Link to="/movies">Deals</Link>
                    </li>
                    <li>
                        <Link to="/stream">Pizza<span className="text-red-600 text-ellipsis text-xs align-super">NEW</span></Link>
                    </li>
                    <li>
                        <Link to="/events"> Slides</Link>
                    </li>
                    <li>
                        <Link to="/plays">Dessert</Link>
                    </li>
                    <li>
                        <Link to="/pasta">Pasta</Link>
                    </li>
                    <li>
                        <Link to="/activities">Drinks</Link>
                    </li>
                    <li>
                        <Link to="/buzz">Vegetarian</Link>
                    </li>
                </ul>


            </div>
        </div>
    )
}
export default Downbar;