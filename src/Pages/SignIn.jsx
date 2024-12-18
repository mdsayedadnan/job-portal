import Lottie from "lottie-react";
import loteData from '../assets/login.json'
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import Google from "./Google";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {

    const {singInUser}= useContext(AuthContext)
    const location= useLocation();
    const navigate = useNavigate();
    console.log('sing in page',location);
    const form = location.state || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const passward = form.passward.value;
        console.log(email, passward);
        singInUser(email,passward)
        .then(result =>{
            console.log('sing in ', result.user);
            navigate(form)
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loteData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl ml-8 mt-4 font-bold">SignIn now!</h1>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="passward" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                 <div className="m-4">
                 <Google></Google>
                 </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignIn;