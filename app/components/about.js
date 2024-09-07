import Link from "next/link"
import Image from "next/image"
import {FaArrowCircleRight, FaCheckCircle} from "react-icons/fa"
import { TeamCard,OpportunityCard } from "./programCard"

import studentPlanting from "../assets/studentPlanting.jpg"
import Wangari from "../assets/1721508933469.jpg"
import logo from "../assets/logo.jpg"

export  function AboutSkeleton(){
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


export function About(){
    return(
        <div className="text-white select-none dark:bg-transparent mb-24 dark:text-slate-600 w-full min-h-screen overflow-x-hidden  bg-white">
            <div className="flex flex-col h-auto items-center w-full">
                <AboutIntro/>
                <AboutStory/>
                <AboutMission/>
                <AboutTeams/>
                <AboutOpportunities/>
            </div>
        </div>
    )
}

export function AboutIntro(){
    // on the intro section I'll introduce a revolving group of 6 plants that are revolving around the main pic here
    // remember that the pic itself will have no background as well as the illustrations revolving it.
    // create something like what I created in my portfolio but now for the illustrations give them no borders and hide the visibility of their containing div such that it will seem as if they are revolving in air.
    
    return(
        <div  className="w-full h-full flex select-none relative gap-12 py-10 px-3 mb-4 lg:mb-12 md:px-24 bg-transparent">
            <div className="hidden lg:block z-0 w-full lg:w-1/2 h-4/6 rounded-full">
                <Image src={logo} alt="great image" className="w-full rounded-full h-full object-cover object-center" width={1600} height={1600}/>
            </div>
            <div className="flex flex-col gap-4 z-3 dark:text-white mt-0 mb-0 mx-auto text-black w-full md:w-1/2 lg:w-1/3 h-auto py-12">
                <div className="text-5xl">Who <span class="text-green-600 font-bold">Are</span><span class="text-green-600 font-bold"> We?</span></div>
                <div className="text-md dark:text-slate-600 text-black dark:font-normal font-semibold">
                    I-Change is a non-profit organisation with a major focus on transformative environmental conservation and effective climatic change actions.
                    We make frequent visits to learning institutions in Kenya and local communities sensitizing and involving the youth on progressive environmental conservation actions.
                    Your contribution by service, funds or any other means goes a long way.
                </div>
                <div className="w-auto h-auto flex-wrap flex justify-between gap-4">
                    <Link href="#mission" className="text-xl dark:bg-green-600 dark:hover:bg-white bg-black dark:text-white dark:hover:text-green-600 hover:text-white text-green-600 rounded-xl py-2 px-3">mission</Link>
                    <Link href="#story" className="text-xl dark:bg-green-600 dark:hover:bg-white bg-black dark:text-white dark:hover:text-green-600 hover:text-white text-green-600 rounded-xl py-2 px-3">our story</Link>
                    <Link href="#team" className="text-xl dark:bg-green-600 dark:hover:bg-white bg-black dark:text-white dark:hover:text-green-600 hover:text-white text-green-600 rounded-xl py-2 px-3">our team</Link>
                </div>
            </div>
        </div>
    )
}

export function AboutStory(){
    return(
        <div id="story" className="w-full p-3 lg:p-12 mb-4 lg:mb-12 h-screen">
        <h1 className="text-2xl dark:text-white text-black pl-3 lg:text-3xl lg:font-bold lg:pl-12 mb-4 lg:mb-12">our story</h1>
        <div className="w-full h-full flex justify-between">
            <div className="hidden lg:block lg:w-1/2 h-full">
                <Image src={Wangari} alt="great image" className="w-full h-full object-cover object-center" width={1600} height={1600}/>
            </div>
            <div className="w-full lg:w-1/3 h-full">

            </div>
        </div>
        </div>
    )
}


// a row for the team
export function AboutMission(){
    return(
        <div id="mission" className="w-full p-3 lg:p-12 mb-4 lg:mb-12  h-screen">
        <h1 className="text-2xl dark:text-white text-black pl-3 lg:text-3xl lg:font-bold lg:pl-12 mb-4 lg:mb-12">mission and vision</h1> 
        <div className="w-full h-full flex justiy-between">
            <div className="w-full lg:w-1/3 h-full">
                
            </div>
            <div className="hidden lg:block lg:w-1/2 h-5/6">
                <Image src={studentPlanting} className="w-full h-full" width={1600} height={1600}/>
            </div>
        </div>
        </div>
    )
}

let fakeMembers = [
    {
        name:"Ivy",
        role: "CEO",
        Intro: "I'm passionate about The environment, I choose to make an impact.",
        blog: "",
        image: "",
        socials: [
            {facebook:"facebook.com"},
            {twitter: "twitter.com"},
            {instagram: "instagram.com"}
        ]
    },
    {
        name:"Ivy",
        role: "CEO",
        Intro: "I'm passionate about The environment, I choose to make an impact.",
        blog: "",
        image: "",
        socials: [
            {facebook:"facebook.com"},
            {twitter: "twitter.com"},
            {instagram: "instagram.com"}
        ]
    },
    {
        name:"Ivy",
        role: "CEO",
        Intro: "I'm passionate about The environment, I choose to make an impact.",
        blog: "",
        image: "",
        socials: [
            {facebook:"facebook.com"},
            {twitter: "twitter.com"},
            {instagram: "instagram.com"}
        ]
    },
    {
        name:"Ivy",
        role: "CEO",
        Intro: "I'm passionate about The environment, I choose to make an impact.",
        blog: "",
        image: "",
        socials: [
            {facebook:"facebook.com"},
            {twitter: "twitter.com"},
            {instagram: "instagram.com"}
        ]
    }
]


// thi  is the only unique one here
export function AboutTeams(){
    return(
        <div id="team" className="w-full transition-all-[0.5s] h-auto mb-4 lg:mb-12">
        <h1 className="text-2xl dark:text-white text-black pl-3 lg:text-3xl lg:font-bold lg:pl-12 mb-4 lg:mb-12">Team</h1> 
            <div className="w-full h-auto">
                <div className="w-full h-auto md:h-11/12 flex flex-col overflow-x-auto overflow-y-hidden sm:flex-row gap-8 sm:px-8 lg:px-12">
                {fakeMembers.map(function(member,index){
                    return <TeamCard key={index} member={member}/>
                })}        
                </div>                
            </div>
        </div>
    )
}


let fakeOpportunities = [
    {
        name: "Scholarships",
        opportunityLink: "",
        tag: "scholarship",
        detail: "Grab a chance to get a fully funded scholarship on environment related studies all over the world."
    },
    {
        name: "Internships",
        opportunityLink: "",
        tag: "internship",
        detail: "Annual opportunities for campus students to gain hands on experience on the matters pertaining the environment and how to go about it"
    },
    {
        name: "Planting Training",
        opportunityLink: "training",
        tag: "training",
        detail: "we educate you on the importance of environmental conservation, and what to do pertaining reafforestation"
    }
]

// the opportunities
export function AboutOpportunities(){
    return(
        <div className="w-full min-h-screen mb-4 lg:mb-12">
        <h1 className="text-2xl dark:text-white text-black pl-3 lg:text-3xl lg:font-bold lg:pl-12 mb-4 lg:mb-12">Opportunities</h1> 
        <div className="w-full justify-evenly lg:justify-evenly h-auto flex  flex-wrap px-12 gap-4 sm:px-2 md:px-2 lg:px-12   gap-y-5 bg-gradient-to-br">
            {fakeOpportunities.map(function(opportunity,index){
                return <OpportunityCard key={index} opportunity={opportunity}/>
            })}
        </div>        
        </div>
    )
}