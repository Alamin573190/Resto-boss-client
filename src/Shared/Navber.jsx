import { Link } from "react-router-dom";


const Navber = () => {

    const navOptions = <>

        <li className="text-white"><Link to="/">Home</Link></li>

        <li className="text-white"><Link to="/menu">Our menu</Link></li>

        <li className="text-white"><Link to="/order/salad">Order food</Link></li>
        <li className="text-white"><Link to="/login">Login</Link></li>
        <li className="text-white"><Link to="/signup">Sign Up</Link></li>

      


    </>



    return (

        <>
            <div className="navbar  fixed bg-opacity-30 z-10 bg-black text-white max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-5">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Restro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navber;