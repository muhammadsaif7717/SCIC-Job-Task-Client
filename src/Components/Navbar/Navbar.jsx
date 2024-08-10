import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const links= <div className='flex flex-col lg:flex-row gap-5'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
        <NavLink to={`/cash-out`}>Cash Out</NavLink>
        <NavLink to={`/send-money`}>Send Money</NavLink>
        <NavLink to={`/others`}>Others</NavLink>
    </div>
    return (
        <div className="navbar bg-base-100 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0  pr-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl p-0">Fast<span className="text-green-500">Pay</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={`/login`} className="btn">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;