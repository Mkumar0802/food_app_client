// import { useLayoutEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ValidationError from './ValidationError';
import Navbar from './Navbar';
// import axios from 'axios';
import React, { useState } from 'react';

function Login() {
    // const [type, setType] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate
    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // type,
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('Login successful')
            setErrorMessage(data.message)
            navigate.push('/home')
            
        } else {
            alert('Please check your username and password')
            setErrorMessage('check your username and password')
        }
    }
    return (
        
        <div className=" text-white flex flex-col h-screen w-screen items-center justify-center">
            
            <div className="p-5 text-3xl font-extrabold">
                <h1>LOGIN</h1>
            </div>
            <form onSubmit={loginUser} className="mx-5 flex flex-col w-72">
                {/* <div class="relative inline-flex">
                    <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
                    <select

                         class="text-black m-3 border-2 border-green-400 p-1">
                        <option value={type}
                        onChange={(e) => setType(e.target.value)} >User Type</option>
                        <option>Admin</option>
                        <option>User</option>

                    </select>
                </div> */}
{/* 
                <label htmlFor="type">Type</label>
                <input value={type}
                    onChange={(e) => setType(e.target.value)} className="text-black m-3 border-2 border-green-400 p-1" type="text" name="type" id="type"  placeholder='Admin/User'/> */}




                <label htmlFor="email">Email</label>
                <input value={email}
                    onChange={(e) => setEmail(e.target.value)} className="text-black m-3 border-2 border-green-400 p-1" type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} className="text-black m-3 border-2 border-green-400 p-1" type="password" name="password" id="password" />
                <input className="m-1 px-2 py-1 rounded font-bold text-xl bg-green-400 text-gray-900" type="submit" value="Login" />
                <div className="flex flex-row items-center justify-center">
                    <h1>Don't have an account?</h1>
                    <Link className="m-1 px-2 py-1 rounded font-bold text-xl border-2 border-green-400 text-green-400 text-center" to="/register">Register</Link>
                </div>            </form>

                {errorMessage === "Success" ? <Navigate to="/home"/>: <ValidationError message={errorMessage} />}
        </div >
    )
}

export default Login;

