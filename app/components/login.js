"use client";

import Image from "next/image"
import Link from "next/link"
import {useState} from "react"
import {FaArrowCircleRight, FaCheckCircle} from "react-icons/fa"
import Wangari from "../assets/1721508933469.jpg"

export  function LoginSkeleton(){
    return(
        <div>
        </div>
    )
}


export function Login(){
    const [loginState,setLoginState] = useState(<ActualLogin/>)
    const [toggleText,setToggleText] = useState("signup")
    const [textDesc,setTextDesc] = useState("new environmentalist ? ")

    let changeToggler = function(e){
        e.preventDefault()
        
        if(toggleText == "signup"){
            setLoginState(<SignUp/>)
            setToggleText("login")
            setTextDesc("member ? ")
        }
        else{
            setLoginState(<ActualLogin/>)
            setToggleText("signup")
            setTextDesc("new environmentalist ? ")
        }
    }
    return(
        <div className="w-full min-h-screen mb-12 flex flex-col items-center ">
        <h1 className="dark:text-white flex flex-col md:flex-row text-black text-center md:text-left text-2xl sm:text-3xl mb-8 dark:font-normal font-bold"><span className="ml-0 md:ml-8 lg:ml-12 dark:text-green-500 text-2xl sm:text-3xl font-bold text-green-500">Join us</span></h1>
        <div className="w-5/6 h-auto rounded-lg md:min-h-[30rem] flex flex-col md:flex-row dark:bg-black bg-slate-600 overflow-hidden box-border ">
            <div className="w-full md:w-1/2 h-[30rem] flex flex-col justify-center  py-4 md:h-full dark:bg-black bg-slate-600">
                {loginState}
                <p className="dark:text-white text-white text-center ">{textDesc}<button onClick={changeToggler} className="dark:text-green-600 text-xl text-green-600">{toggleText}</button></p>            
            </div>
            <div className="hidden md:block w-1/2 h-full bg-transparent">
                <Image src={Wangari} className="w-full h-full object-cover object-center" width={600} height={600}/>
            </div>
        </div>
        </div>
    )
}

export function SignUp(){
    let signHandler = function(e){
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={signHandler} className="w-full py-4 h-full flex flex-col justify-evenly items-center">
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label htmlFor="Name" className="text-green-500 font-bold">Full Name</label>
                    <input id="Name" placeholder="Name" type="text" className="dark:bg-green-950 bg-black rounded-xl h-12 pl-2 outline-none border-none"/>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label htmlFor="Email" className="text-green-500 font-bold">Email address</label>
                    <input id="Email" placeholder="Email address" type="text" className="dark:bg-green-950 bg-black rounded-xl h-12 pl-2 outline-none border-none"/>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label htmlFor="Region" className="text-green-500 font-bold">Region</label>
                    <input id="Region" placeholder="Region" type="text" className="dark:bg-green-950 bg-black rounded-xl h-12 pl-2 outline-none border-none"/>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label htmlFor="Talent" className="text-green-500 font-bold">Skill / Talent</label>
                    <input id="Talent" placeholder="Talent" type="text" className="dark:bg-green-950 bg-black rounded-xl h-12 pl-2 outline-none border-none"/>
                </div>
                <button type="submit" className="bg-green-500 rounded-xl font-bold dark:text-black text-white px-8 py-3">Join us</button>
            </form>
        </div>
    )
}

export function ActualLogin(){
    let loginHandler = function(e){
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={loginHandler} className="w-full py-4 h-full flex flex-col justify-evenly items-center">
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label htmlFor="Email" className="text-green-500 font-bold">Email address</label>
                    <input id="Email" placeholder="Email address" type="text" className="dark:bg-green-950 bg-black rounded-xl h-12 pl-2 outline-none border-none"/>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label htmlFor="Talent" className="text-green-500 font-bold">password</label>
                    <input id="Talent" placeholder="Talent" type="password" className="dark:bg-green-950 bg-black rounded-xl h-12 pl-2 outline-none border-none"/>
                </div>
                <button type="submit" className="bg-green-500 rounded-xl font-bold dark:text-black text-white px-8 py-3">Join us</button>
            </form>
        </div>
    )
}

