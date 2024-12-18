import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import logo from '../../assets/logo/choto.png'

const Navbar = () => {
    const { user ,singOutUser } = useContext(AuthContext)

    const handleSingOutUser = () =>{
        singOutUser()
        .then(()=>{
            console.log('succes');
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const link = <>
        <li> <NavLink to='/'> Home</NavLink></li>

        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            {link}
                        </ul>
                    </div>
                   <img src={logo} alt="" />
                    <a className="btn btn-ghost text-xl">JOB PORTAL</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end">


                    {
                        user ? <> <button onClick={handleSingOutUser} className="btn">Sign Out</button> </> : <>

                            <button className="btn">
                                <Link to='/register'>Register</Link>
                            </button>
                            <button>
                                <Link to='/signIn' className="btn">Sing In</Link>
                            </button>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;