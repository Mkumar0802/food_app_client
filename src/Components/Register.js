import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ValidationError from './ValidationError'
import axios from 'axios'
import React from 'react';



function Register() {

    const [values, setValues] = React.useState({
        amount: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    //   const handleClickShowPassword = () => {
    //     setValues({
    //       ...values,
    //       showPassword: !values.showPassword,
    //     });
    //   };
    //   const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    //   };

    const navigate = useNavigate()

    const [user, setUser] = useState({
        // type:'',
        username: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        password: ""
    })
    const handleChange = (prop) => (event) => {
        setUser({ ...user, [prop]: event.target.value });
    };

    const egister = async (e) => {
        e.preventDefault()
        try {
            var response = await axios.post("http://localhost:5000/auth/register", user)
            console.log(response)
            if (response.data) {
                await localStorage.setItem("token", response.data)
                navigate.push('/')
            }
        }
        catch (err) {
            alert("Invalid input")
        }
    }
    return (
        <div className="text-white flex flex-col h-screen w-screen items-center justify-center">
            <div className="p-5 text-3xl font-extrabold">Register</div>
            <form className="mx-5 flex flex-col w-72" >
                {/* <label htmlFor="type">Type</label>
                <input value={type}
                    onChange={(e) => setType(e.target.value)} className="text-black m-3 border-2 border-green-400 p-1" type="text" name="type" id="type" placeholder='Admin/User' /> */}

                <label htmlFor="username">Username</label>
                <input value={user.username}
                    onChange={handleChange('username')} className="text-black m-3 border-2 border-green-400 p-1" type="text" name="username" id="username" placeholder='username' />
                <label htmlFor="name">Name</label>
                <input value={user.name}
                    onChange={handleChange('name')} className="text-black m-3 border-2 border-green-400 p-1" type="text" name="name" id="name" placeholder='name' />
                <label htmlFor="email">Email</label>
                <input value={user.email}
                    onChange={handleChange("email")} className="text-black m-3 border-2 border-green-400 p-1" type="text" name="email" id="email" placeholder='email' />
                <label htmlFor="phone">Mobile</label>
                <input value={user.phone}
                    onChange={handleChange("phone")} className="text-black m-3 border-2 border-green-400 p-1" type="number" name="phone" id="phone" placeholder='phone' />
                <label htmlFor="address">Address</label>
                <input value={user.address}
                    onChange={handleChange("address")} className="text-black m-3 border-2 border-green-400 p-1" type="text" name="address" id="address" placeholder='address' />
                <label htmlFor="password">Password</label>
                <input value={user.password}
                    onChange={handleChange("password")} className="text-black m-3 border-2 border-green-400 p-1" type="text" name="password" id="password" placeholder='****' />

                <div className="flex flex-row items-center justify-center">
                    <button className="m-1 px-2 py-1 rounded font-bold text-xl border-2 border-green-400 text-green-400 text-center" ><Link to="/Register"   > </Link>Register  </button>

                </div>

                <div className="flex flex-row items-center justify-center">
                    <h1>Already have an account?</h1>
                    <Link className="m-1 px-2 py-1 rounded font-bold text-xl border-2 border-green-400 text-green-400 text-center" to="/login">Login</Link>
                </div>


                {/* {errorMessage === "Success" ? <Navigate to="/login" /> : <ValidationError message={errorMessage} />} */}
            </form>
        </div>
    )
}
export default Register