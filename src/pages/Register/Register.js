import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser, googleLogin } from '../../features/auth/authSlice';

const Register = () => {

    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const {isError,error, isLoading, email} = useSelector(state => state.auth);

    useEffect(()=>{
        if(!isLoading && !error && email){
            navigate('/dashboard')
        }
    },[isLoading, error, email, navigate]);

    const dispatch = useDispatch();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignUp = (data) => {
        dispatch(createUser({ email: data.email, password: data.password }));
    };

    const handleGoogleSingUp = () => {
        dispatch(googleLogin());
    };

    return (
        <div className='h-[700px] flex justify-center items-center'>

            <div className='w-[630px] p-7'>
                <h2 className='text-[26px] font-bold text-center'>Getting Started</h2>
                <p className='text-center font-medium text-lg text-slate-400'>Create an account to continue!</p>
                <div className='flex justify-between'>
                    <button onClick={handleGoogleSingUp} className='btn border-blue-100 mt-4 w-64 text-slate-400 bg-blue-50 hover:text-white'><FcGoogle className='w-6 h-6 mr-3' /> <span className='text-xs'>Sign In With Google</span></button>
                    <button className='btn border-blue-100 w-64 mt-4 text-slate-400 bg-blue-50 hover:text-white'><BsApple className='w-6 h-6 mr-3' /> <span className='text-xs'>Sign In With Apple ID</span></button>
                </div>
                <div className="divider font-medium text-slate-400 text-xl">OR</div>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full">
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

                    <div className="form-control w-full my-3">
                        < label className="label" >
                            <span className="label-text"></span>
                        </label >
                        <input className="input input-bordered w-full"
                            placeholder='Your Name' type='text'
                            {
                            ...register('name', { required: " Your name is required" })
                            }
                        />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div >

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input className="input input-bordered w-full"
                            placeholder='Create Password'
                            type='password'
                            {...register('password', {
                                required: "Password is required",
                                minLength: { value: 8, message: 'Password muts be at least 8 characters long' }
                            })}
                        />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div
                        className="my-4 w-[250px]">
                        <label className="flex items-center gap-4">
                            <input onClick={() => setAgree(!agree)} type="checkbox" className="checkbox" />
                            <span className="label-text text-slate-400">I agree to the Terms & Conditions</span>
                        </label>
                    </div>
                    {isError && <p className='text-red-600'>{error}</p>}
                    <input className='btn bg-blue-500 border-none w-full mt-3' disabled={agree === false} type="submit" value='Sign Up' />
                </form>

                <p className='mt-9 text-center'><span className='text-xs text-slate-400 font-medium'>Already have an account?</span> <Link to='/' className='text-primary underline underline-offset-2'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;