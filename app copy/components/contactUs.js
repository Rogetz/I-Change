"use client";

import {useEffect} from "react"

import { FaAndroid, FaFax, FaMailBulk, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import {countries} from "country-code-lookup"


export  function ContactUsSkeleton(){
    return(
        <div className="text-white animate-pulse bg-gray-700 dark:bg-gray-700 dark:text-slate-600 w-12/12 min-h-screen overflow-x-hidden">
            <div className="flex mb-48 h-auto w-auto ">
                {/*the wrapper with the scrolling changing text in the flex container*/}
                {/*size is for both width  height,for specifics use width with fraction*/}
                {/*for text-black you don't specify the opacity 
                The padding moves  double e.g know that p-6 is same as padding 1.5rem but p-18 doesn't work*/}
                <div className="flex z-10 lg:drop-shadow-none drop-shadow-sm bg-gray-900 dark:bg-gray-700 dark:text-slate-600 opacity-90 flex-col gap-y-4 px-6 md:pl-12 text-4xl md:text-7xl w-full lg:w-4/12 md:ml-16 mt-16 h-3/4 lg:h-auto text-black ">
                </div>
                
                {/*this right side is the pictorial section*/}
                <div className="w-full absolute lg:w-2/3 h-screen lg:relative">
                    <div className="w-full bg-gray-700 lg:h-3/4 lg:w-1/2 h-screen absolute lg:top-64 lg:left-10">
                    </div>
                    <div className="hidden lg:w-1/2 bg-gray-700 animate-[pulse_5s] lg:h-3/4 top-12 lg:block lg:absolute right-24">
                   </div>
                </div>
            </div>
        </div>
    )
}


export function ContactUs(){
    return(
        <div className="w-full min-h-screen flex flex-col items-center gap-12 mb-12">
            <div className="w-full m-h-screen select-none flex flex-row justify-center px-12 md:px-4 gap-12 lg:gap-8 lg:px-8 md:gap-x-4 flex-wrap">
                <ContactDetails/>
                <ContactCard/>
            </div>
            <MapCard/>
        </div>
    )
}

export function ContactDetails(){
    return(
        <div className="w-full flex px-4 py-4 flex-col justify-center flex-shrink-0 flex-grow-1 md:w-1/2 lg:w-1/2 min-h-[30rem] lg:h-[33rem] gap-4">
            <h1 className="text-3xl dark:text-white text-green-950 font-bold">Contact Us</h1>
            <p className="dark:text-slate-600 text-green-600">Email, call,chat us or fill out the form to learn more about Ichange and how you can contribute in becoming a part of us.</p>
            <Link className="text-green-900 flex gap-4 items-center" href="mailto:rogetzgamer@gmail.com" target="blank"><FaMailBulk className="text-3xl"/><span className="font-bold">e-mail us</span></Link>
            <Link className="text-green-900 flex gap-4 items-center" href="https://wa.me/+254768230039" target="blank"><FaWhatsapp className="text-3xl"/><span className="font-bold">chat with us</span></Link>
            {/*enable chatting with AI assistance to enable quick responses.*/}
            <Link className="text-green-900 flex gap-4 items-center" href="mailto:ichange@gmail.com" target="blank"><FaAndroid className="text-3xl"/><span className="font-bold">chat with AI assistance</span></Link>
            <Link className="text-green-900 flex gap-4 items-center" href="tel:+254768230039" target="blank"><FaFax className="text-3xl"/><span className="font-bold">call us</span></Link>
            <div className="flex gap-4 flex-row flex-wrap w-full">
                <div className="w-[15rem] flex flex-col gap-2 h-auto">
                    <h2 className="font-bold tracking-widest">Community support</h2>
                    <p className="dark:text-slate-600 text-green-600">Our activity team is up 24/7 to address any concerns concerning activities or aid in making environmental activities a success. Call us,email us or chat with us anytime anyday</p>
                </div>
                <div className="w-[15rem] flex flex-col gap-2 h-auto">
                    <h2 className="font-bold tracking-widest">Feedback and suggestions</h2>
                    <p className="dark:text-slate-600 text-green-600">We'd appreciate your feedback, that helps us improve our activities. Your suggestions are always welcome.</p>
                </div>
            </div>
        </div>
    )
}

export function ContactCard(){
    return(
        <div className="w-full flex gap-4 px-8 md:px-1 py-4 lg:px-4 flex-col rounded-lg order-first md:order-last md:w-1/3 lg:w-1/3 flex-grow-1 flex-shrink-0 min-h-[30rem] bg-slate-900">
            <div>
                <h1 className="text-2xl text-green-800 font-bold">Get in touch</h1>
                <p className="dark:text-slate-600 text-slate-700">you can reach us anytime</p>
            </div>
            <form className="text-slate-600 flex flex-col items-center gap-4 lg:gap-4">
                <div className="w-full h-auto flex gap-3 flex-wrap">
                    <input type="text" className="h-12 w-full rounded-lg pl-4 text-sm" placeholder="first name"/>
                    <input type="text" className="h-12 w-full rounded-lg pl-4 text-sm" placeholder="last name"/>
                </div>
                <input type="text" className="w-full h-12 rounded-lg pl-4 text-sm" placeholder="email adress"/>
                <div className="w-full h-auto flex gap-3 flex-wrap">
                    <select id="countryCode" name="countryCode" className="h-12 text-sm w-[4rem]">
                        {countries.map(function(country,index){
                            return(
                                <option value={country.isoNo}>{country.country}</option>
                            )
                        })}                            
                    </select>
                    <input type="tel" className="w-4/6 h-12 rounded-lg pl-4 text-sm" placeholder="phone number"/>
                </div>
                <textarea className="w-full h-32"></textarea>
            </form>
            <button type="submit" className="text-white w-full h-12 rounded-3xl text-xl tracking-widest bg-green-600">submit</button>
        </div>
    )
}

export function MapCard(){
    return(
        <div className="w-full px-4 md:px-0  md:5/6 lg:w-2/3 h-[36rem] flex flex-col gap-4 ">
            <h1 className="text-3xl text-center dark:text-white text-green-950 font-bold">Locate Us</h1>
            <div className="w-full h-[33rem] rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.662673156682!2d35.269755700000005!3d0.5060962500000095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101c807f125e1%3A0x2c8e2a5793f4f9d4!2spioneer%20estate%2C%20Eldoret!5e0!3m2!1sen!2ske!4v1724422645131!5m2!1sen!2ske" width="600" height="450" style={{border:0}} className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}