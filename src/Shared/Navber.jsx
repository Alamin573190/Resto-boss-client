import { useContext } from "react";

import { AuthContext } from "../providers/Authprovider";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'
import UseCart from "../Hooks/UseCart";


const Navber = () => {

    const { user, logOut } = useContext(AuthContext);
    const[cart] = UseCart();

    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))


    }
    const navOptions = <>

        <li className="text-white"><NavLink to="/">Home</NavLink></li>

        <li className="text-white"><NavLink to="/menu">Our menu</NavLink></li>

        <li className="text-white"><NavLink to="/order/salad">Order food</NavLink></li>

        <li className="text-white"><NavLink to="/secret">Secret</NavLink></li>

        <li className="text-white"><NavLink to="/signup">Sign Up</NavLink></li>

        <li className="text-white"><NavLink to="/dashboard/cart">
            <button className="">
                <div className="flex">
                 
                    <FaShoppingCart></FaShoppingCart>
                    
                    <div className="badge badge-secondary">+{cart.length}</div>
                </div>
            </button>
        </NavLink></li>

        {
            user ?
                <>
                    <span>{user?.displayName}</span>
                    <li onClick={handleLogout} className="btn btn-ghost pb-3">LogOut</li>

                </>
                :
                <>
                    <li className="text-white"><NavLink to="/login">Login</NavLink></li>
                </>
        }




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