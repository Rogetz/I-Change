"use client";
import { FaArrowRight, FaCopyright, FaFacebook, FaInstagram, FaRegArrowAltCircleRight,FaRegCopyright,FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from "next/link"
import Image from "next/image"
import Logo from "./assets/logo.jpg"


export function Footer(){


    let newsletterHandler = function(e){
        e.preventDefault()
    }
    return(        
        <div className="flex select-none flex-col h-auto  w-full gap-8 px-4 items-center">
            <p className="text-green-800 font-bold text-lg text-left w-full sm:w-auto">stay Tuned</p>
            <p className="dark:text-white text-black text-3xl text-left w-full sm:w-auto"> subscribe to our newsletter </p>
            <form onSubmit={newsletterHandler} className="flex pb-3 justify-between w-full border-b-2 border-green-500 sm:w-3/4 lg:w-2/4">
            <input type="text" id="newsLetter" placeholder="enter your email here" className="outline-none border-none bg-transparent dark:bg-transparent"/>
            <FaArrowRight className="text-green-600"/>
            </form>
            <div className=" w-auto flex h-12 gap-4 lg:gap-6">
                <p className="dark:text-white text-sm md:text-xl text-black font-bold sm:font-medium">Lets get</p>
                <Link href="" name="" className="dark:hover:text-white hover:text-black" >
                <FaFacebook className="text-xl sm:text-2xl lg:text-3xl text-green-500"/>                
                </Link>
                <Link href="" name="" className="dark:hover:text-white hover:text-black" >
                <FaInstagram className="text-xl sm:text-2xl lg:text-3xl text-green-500"/>                
                </Link>
                <Link href="" name="" className="dark:hover:text-white hover:text-black" >
                <FaTwitter className="text-xl sm:text-2xl lg:text-3xl text-green-500"/>                
                </Link>
                {/*for joining the ichange whatsapp group*/}
                <Link href="" name="" className="dark:hover:text-white hover:text-black" >
                <FaWhatsapp className="text-xl sm:text-2xl lg:text-3xl text-green-500"/>                
                </Link>
                <p className="dark:text-white text-sm md:text-xl text-black font-bold sm:font-medium">social</p>
            </div>
            <div className="w-full h-12">
            </div>
            <div className="w-full text-xl flex items-center justify-center gap-2 md:gap-3 lg:gap-4 h-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src={Logo} className="w-full h-full rounded-full object-cover object-center" width={200} height={200}/>
                </div>
                <p className="text-xl md:text-xl text-green-500 h-4 font-bold text-center flex items-center">
                    <span className="flex items-center">i</span>
                    <span className="dark:text-white text-black flex items-center" >-</span>
                    <span className="text-green-950 dark:text-white flex items-center">Change</span>
                </p>
            </div>
            <div className="w-full text-xl flex items-center justify-center gap-2 h-12">
                <span>copyright</span>
                <FaRegCopyright className="text-green-600"/>
                <span>2024</span>
            </div>
            <div className="w-full h-12">
            </div>
        </div>
    )
}