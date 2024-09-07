"use client";

import Image from "next/image"
import Link from "next/link"
import { ProgramCard } from "./programCard"
import {FaArrowCircleRight, FaCheckCircle} from "react-icons/fa"
import Wangari from "../assets/1721508933469.jpg"

import {Swiper,SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"

//effects
import SwiperCore from "swiper"
import { EffectCoverflow,Pagination,Navigation,Autoplay } from "swiper/modules";

//for autoplay swiperjs
SwiperCore.use([Autoplay])

export  function ActualHomeSkeleton(){
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


let fakeProgramList = [
    {
        title: "Ngong Forest Tree planting",
        imageUrl: "studentPlanting.jpg",
        details: "we are planning to plant over 100000 trees in Ngong forest this coming saturday. We are calling upon all youths from Ngong forest and beyond to come out in large numbers as we conserve nature once again",
        link: "/home",
        donateLink: "/home"
    },
    {
        title: "Ngong Forest Tree planting",
        imageUrl: "studentPlanting.jpg",
        details: "we are planning to plant over 100000 trees in Ngong forest this coming saturday. We are calling upon all youths from Ngong forest and beyond to come out in large numbers as we conserve nature once again",
        link: "/home",
        donateLink: "/home"
    },
    {
        title: "Ngong Forest Tree planting",
        imageUrl: "studentPlanting.jpg",
        details: "we are planning to plant over 100000 trees in Ngong forest this coming saturday. We are calling upon all youths from Ngong forest and beyond to come out in large numbers as we conserve nature once again",
        link: "/home",
        donateLink: "/home"
    },
    {
        title: "Ngong Forest Tree planting",
        imageUrl: "studentPlanting.jpg",
        details: "we are planning to plant over 100000 trees in Ngong forest this coming saturday. We are calling upon all youths from Ngong forest and beyond to come out in large numbers as we conserve nature once again",
        link: "/home",
        donateLink: "/home"
    },
    {
        title: "Ngong Forest Tree planting",
        imageUrl: "studentPlanting.jpg",
        details: "we are planning to plant over 100000 trees in Ngong forest this coming saturday. We are calling upon all youths from Ngong forest and beyond to come out in large numbers as we conserve nature once again",
        link: "/home",
        donateLink: "/home"
    },
    {
        title: "Ngong Forest Tree planting",
        imageUrl: "studentPlanting.jpg",
        details: "we are planning to plant over 100000 trees in Ngong forest this coming saturday. We are calling upon all youths from Ngong forest and beyond to come out in large numbers as we conserve nature once again",
        link: "/home",
        donateLink: "/home"
    },

]


export function ActualHome(){

    return(
        <div className="text-white dark:bg-transparent mb-24 dark:text-slate-600 w-full min-h-screen overflow-x-hidden  bg-white">
            <div className="flex flex-col h-auto items-center w-full">
                <IntroComponent/>
                <SecondComponent/>
                <ProgramCards programmsList={fakeProgramList}/>
                <JoinActivity/>
            </div>
        </div>
    )
}

// can be reused for intro divs
export function IntroComponent(){
    // on the intro section I'll introduce a revolving group of 6 plants that are revolving around the main pic here
    // remember that the pic itself will have no background as well as the illustrations revolving it.
    // create something like what I created in my portfolio but now for the illustrations give them no borders and hide the visibility of their containing div such that it will seem as if they are revolving in air.
    
    return(
        <div className="w-full h-auto flex select-none  justify-between gap-12 py-10 px-3 md:px-24 bg-transparent">
            <div className="flex flex-col gap-4 dark:text-white text-black w-full lg:w-1/3 h-auto py-12">
                <div className="text-5xl">You can <span class="text-green-600 font-bold">Change</span> your <span class="text-green-600 font-bold">ecosystem</span></div>
                <div className="text-md dark:text-slate-600 text-black dark:font-normal font-semibold">
                    I-Change is a non-profit organisation with a major focus on transformative environmental conservation and effective climatic change actions.
                    We make frequent visits to learning institutions in Kenya and local communities sensitizing and involving the youth on progressive environmental conservation actions.
                    Your contribution by service, funds or any other means goes a long way.
                </div>
                <div className="w-auto h-auto flex-wrap flex justify-between gap-4">
                    <Link href="" className="text-xl dark:bg-green-600 dark:hover:bg-white bg-black dark:text-white dark:hover:text-green-600 hover:text-white text-green-600 rounded-xl py-2 px-3">Donate</Link>
                    <Link href="" className="text-xl dark:bg-green-600 dark:hover:bg-white bg-black dark:text-white dark:hover:text-green-600 hover:text-white text-green-600 rounded-xl py-2 px-3">Get Inspiration</Link>
                    <Link href="" className="text-xl dark:bg-green-600 dark:hover:bg-white bg-black dark:text-white dark:hover:text-green-600 hover:text-white text-green-600 rounded-xl py-2 px-3">Join us</Link>
                </div>
            </div>
            <div className="hidden lg:w-2/5 lg:block">
                <Image src={Wangari} alt="great image w-full h-5/6 object-cover object-center" width={1600} height={1600}/>
            </div>
        </div>
    )
}

export function SecondComponent(){
    return(
        <div className="w-5/6 select-none h-auto lg:h-[20rem] rounded-xl bg-green-300 dark:bg-green-950 pb-4 mb-24">
            <div className="flex flex-col lg:flex-row gap-12 p-2 md:p-4 lg:p-8">
                <div className="w-full text-center lg:text-left md:w-5/6 lg:w-4/6 text-3xl md:text-5xl dark:text-white text-black">We are preserving and securing nature for our future generation</div>
                <div className="w-full lg:w-2/6 text-md text-slate-600">Involving the youths in both the institutions has proved to not only transform society's perspective of the environment but also reiterating the crucial role of youths who are the future.
                    Nature is ours and ours is nature
                </div>
            </div>
            <div className="w-full h-auto lg:h-auto flex flex-wrap gap-3 lg:gap-12 items-center justify-center">
                <div className="rounded-xl flex gap-2 items-center py-2 px-3 dark:bg-black bg-white dark:text-green-950 text-green-600"><FaCheckCircle className="text-xl dark:text-green-950 text-green-600"/> environment conservation</div>
                <div className="rounded-xl flex gap-2 items-center py-2 px-3 dark:bg-black bg-white dark:text-green-950 text-green-600"><FaCheckCircle className="text-xl dark:text-green-950 text-green-600"/>mentorship</div>
                <div className="rounded-xl flex gap-2 items-center py-2 px-3 dark:bg-black bg-white dark:text-green-950 text-green-600"><FaCheckCircle className="text-xl dark:text-green-950 text-green-600"/>charity</div>
                <div className="rounded-xl flex gap-2 items-center py-2 px-3 dark:bg-black bg-white dark:text-green-950 text-green-600"><FaCheckCircle className="text-xl dark:text-green-950 text-green-600"/>field excursions</div>
            </div>
        </div>
    )
}


export function ProgramCards({programmsList}){
    return(
        <div className="w-full px-12 h-auto overflow-hidden md:h-[30rem] pb-6">
        <h1 className="mb-8 text-2xl sm:text-3xl font-bold md:text-3xl text-white">Ongoing Activities</h1>
        {/*<div className="w-full h-auto md:h-11/12 flex flex-col overflow-x-auto overflow-y-hidden sm:flex-row gap-8">
        </div>*/}    
                {/*slides per view is compulsory for the coverflow effect to work effectivly
                In this case I have used breakpoints to set the different slides per view for the different 
            categories */}

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                breakpoints={
                    {
                        640 : {
                            slidesPerView: 1,
                        },
                        768 : {
                            slidesPerView: 2,
                        },
                        1024 : {
                            slidesPerView: 3,
                        }
                    }
                }
                coverflowEffect={
                    {
                        rotate:0,
                        stretch:0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                pagination={{el:'.swiper-pagination',clickable:true}}
                navigation={
                    {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true
                    }
                }
                autoplay={{delay: 4000}}
                modules={[EffectCoverflow,Pagination,Navigation]}
                className="w-full lg:w-[60rem] h-auto pb-4 relative"
            >   
                {/*<SwiperSlide className=" swiper-slide w-[20rem] h-[20rem] m-0">
                    <div className="w-[20rem] h-[20rem] rounded-lg bg-blue-600">
                    </div>
                </SwiperSlide>*/}

                {programmsList.map(function(program,index){
                    return  <SwiperSlide className=" swiper-slide w-[20rem] h-auto m-0">
                                <ProgramCard key={index} program={program}/>
                            </SwiperSlide>            
                })}        
                <div className="slider_controler">
                    <div className="swiper-button-prev slider-arrow">
                        <FaArrowCircleRight/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <FaArrowCircleRight/>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export function PastActivities(){
    return(
        <div></div>
    )
}

export function JoinActivity(){
    
    let volunteerHandler = function(e){
        e.preventDefault()
    }
    return(
        <>
        <h1 className="dark:text-white flex flex-col md:flex-row text-black text-center md:text-left text-2xl sm:text-3xl mb-8 dark:font-normal font-bold">Get Involved<span className="ml-0 md:ml-8 lg:ml-12 dark:text-green-500 text-2xl sm:text-3xl font-bold text-green-500">Fill up your details below and join us today</span> </h1>
        <div className="w-5/6 h-auto rounded-lg md:h-[30rem] flex flex-col md:flex-row dark:bg-green-950 bg-green-300 overflow-hidden box-border">
            <div className="w-full md:w-1/2 h-[30rem] md:h-full   dark:bg-black bg-slate-600">
                <form onSubmit={volunteerHandler} className="w-full h-full flex flex-col justify-evenly items-center">
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
            <div className="hidden md:block w-1/2 h-full bg-transparent">
                <Image src={Wangari} className="w-full h-full object-cover object-center" width={600} height={600}/>
            </div>
        </div>
        </>
    )
}


