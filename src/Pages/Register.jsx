import Lottie from "lottie-react";
import loteData from '../assets/register.json'
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import Google from "./Google";
const Register = () => {

    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const passward = form.passward.value;
        console.log(email, passward);
        createUser(email, passward)
            .then(Result => {
                console.log(Result.user);
            })
            .catch(error => {
                console.log(error.message);
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
                        <h1 className="text-5xl ml-8 mt-4 font-bold">Register now!</h1>

                        <form onSubmit={handleRegister} className="card-body">
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div>
                            <Google></Google>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;