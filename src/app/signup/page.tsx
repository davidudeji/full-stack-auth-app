"use client"

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function SignupPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <form className="flex flex-col items-center justify-center min-h-screen py-2 gap-4 ">
                <h1>  Signup</h1>
         <hr />
         <label htmlFor="username">username</label>
         <input id="username" type="text" value={user.username} onChange={(e)=>{
            setUser({...user, username: e.target.value})
         }} placeholder="username" className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
         required/>
            
         <label htmlFor="email">email</label>
         <input id="email" type="email" value={user.email} onChange={(e)=>{
            setUser({...user, email: e.target.value})
         }} placeholder="email" className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
         required/>
            
         <label htmlFor="password">password</label>
         <input id="password" type="password" value={user.password} onChange={(e)=>{
            setUser({...user, password: e.target.value})
         }} placeholder="password" className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" required/>
            <button onClick={onSignup} className="border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-full">
                Signup
            </button>
            <Link href="/login">Visit Login Page</Link>

            </form>
         
        </div>
    )
}