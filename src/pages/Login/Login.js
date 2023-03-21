import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { googleLogin, loginUser } from '../../features/auth/authSlice';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError,error, isLoading, email} = useSelector(state => state.auth);

    useEffect(()=>{
        if(!isLoading && email){
            navigate('/dashboard')
        }
    },[isLoading, email, navigate]);

    const [check, setCheck] = useState(false);


    const handleLogIn = (data) => {
        dispatch(loginUser({email: data.email, password: data.password}));
    };

    const handleGoogleLogIn = () => {
        dispatch(googleLogin());
    };

    return (
        <div className='h-[600px] flex justify-center items-center'>

            <div className='w-[630px] p-7'>
                <h2 className='text-[26px] font-bold text-center'>Sign In</h2>
                <p className='text-center font-medium text-lg text-slate-400'>Welcome back, you've been missed!</p>
                <div className='flex justify-between'>
                    <button onClick={handleGoogleLogIn} className='btn border-blue-100 mt-4 w-64 text-slate-400 bg-blue-50 hover:text-white'><FcGoogle className='w-6 h-6 mr-3' /> <span className='text-xs'>Sign In With Google</span></button>
                    <button className='btn border-blue-100 w-64 mt-4 text-slate-400 bg-blue-50 hover:text-white'><BsApple className='w-6 h-6 mr-3' /> <span className='text-xs'>Sign In With Apple ID</span></button>
                </div>
                <div className="divider font-medium text-slate-400 text-xl">OR</div>
                <form onSubmit={handleSubmit(handleLogIn)}>

                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input className="input input-bordered w-full"
                            placeholder='@ Your Email'
                            type='email'
                            {...register('email', { required: "Email is required" })}
                        />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input className="input input-bordered w-full"
                            placeholder='Password'
                            type='password'
                            {...register('password', {
                                required: "Password is required",
                                minLength: { value: 8, message: 'Password muts be at least 8 characters long' }
                            })}
                        />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div
                        className="my-4 w-36">
                        <label className="flex items-center gap-4">
                            <input onClick={()=>setCheck(!check)} type="checkbox" className="checkbox" />
                            <span className="label-text text-slate-400">Remember me</span>
                        </label>
                    </div>
                    {isError && <p className='text-red-600'>{error}</p>}
                    <input className='btn bg-blue-500 border-none w-full mt-3' disabled={check === false} type="submit" value='Sign In' />
                </form>

                <p className='mt-9 text-center'><span className='text-xs text-slate-400 font-medium'>Don't have an account yet?</span> <Link to='/register' className='text-primary underline underline-offset-2'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;