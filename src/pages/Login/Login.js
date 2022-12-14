import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    useTitle('Login')

    const { login, googleLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                //get jwt token
                fetch('https://b6a11-service-review-server-side-marziamostafa.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('foodieToken', data.token)

                    })
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error);
            })


    }

    const handleGoogleSignIn = () => {

        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className="hero min-h-max my-15 bg-red-100">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='' src="https://img.freepik.com/free-vector/hand-drawn-fast-food-background_52683-21988.jpg?size=626&ext=jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href='/' className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Foodie? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>

                    <div className="card-actions justify-center">
                        <button onClick={handleGoogleSignIn} className='mb-2 btn'> Log in with Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;

