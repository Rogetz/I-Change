"use client";

import {useEffect,useState} from "react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram,FaTwitter,FaPen,FaClipboardCheck,FaAirbnb} from "react-icons/fa";
import studentPlanting from "../assets/studentPlanting.jpg"
import Ivy from "../assets/Ivy_cropped.PNG"
import plant from "../assets/plant.jpg"
import studentPlanting2 from "../assets/studentPlanting2.jpg"

// These loaders are good for cdn servers/ rather remote servers that serve images.
// If its for localhost it doesn't work well not unless you create an image server as well.
// // for localhost just use string tricks
// also when using the image loader always use the use client directive at the top.
/*const cardImageLoader = ({src,width,quality}) => {
    //note that this loader can return an imageUrl and is what we'll be using in later chapters.
    return `../assets/${src}?w=${width}&q=${quality || 75}` 

}*/


export function ProgramCard({program}){
    const programTitle = program.title
    // relative images must begin with a leading slash
    const programImage = `D:/nextProjects/AuthorsBlog/app/assets/${program.imageUrl}`
    const programDetails = program.details
    const linkUrl = program.link
    const donateLink = program.donateLink

    return(
        <div className="w-full sm:w-[23rem] lg:w-[23rem]  flex-shrink-0 flex-grow-1 h-5/6 dark:bg-gray-950 bg-black rounded-xl p-3">
            <div className="w-full h-3/5 overflow-hidden rounded-lg">
                <Image  src={studentPlanting} alt={programTitle} className="object-cover object-center w-full h-full rounded-lg" priority={true} width={500} height={500}/>
            </div>
            <div className="w-full h-2/5 flex flex-col gap-3">
            <p className="w-full line-clamp-1 dark:text-white text-green-600 dark:font-normal font-bold">{programTitle}</p>
            <p className="w-full line-clamp-2">{programDetails}...</p>
            <div className="w-full flex justify-between">
            <Link href={linkUrl} name="" className="dark:bg-black bg-white rounded-xl dark:text-green-600 text-green-600 dark:font-normal font-bold px-3 py-2">learn more</Link>
            <Link href={donateLink} name="" className="dark:bg-black bg-white rounded-xl dark:text-green-600 text-green-600 dark:font-normal font-bold px-3 py-2">Donate</Link>
            </div>

            </div>
        </div>
    )
}



export function TeamCard({member}){
    const name = member.name
    const role = member.role
    // relative images must begin with a leading slash
    const memberIntro = member.Intro
    const memberBlogs = member.blog
    const memberSocials = member.socials
    return(
        <div className="w-full flex flex-col items-center sm:w-[23rem] lg:w-[23rem]  flex-shrink-0 flex-grow-1 h-5/6 dark:bg-gray-950 bg-black rounded-xl px-4 py-8">
            <div className="w-[10rem] h-[10rem] lg:w-[12rem] lg:h-[12rem] overflow-hidden rounded-full">
                <Image  src={Ivy} alt={name} className="object-cover object-center w-full h-full rounded-full" priority={true} width={500} height={500}/>
            </div>
            <div className="w-full h-2/5 flex items-center flex-col gap-3">
                <p className="w-full line-clamp-1 dark:text-white text-green-600 dark:font-normal font-bold text-2xl text-center">{name}</p>
                <div className="dark:text-green-600 w-fit h-fit tracking-widest text-green-700 font-bold text-xl rounded-xl dark:bg-white bg-white py-1 lg:py-2 px-4 lg:px-3">{role}</div>
                <div className="flex text-3xl gap-3 text-green-600 font-bold">
                {memberSocials.map(function(social,index){
                        if(social.facebook != null){
                            return <Link key={index} href={social.facebook}>
                                <FaFacebook/>
                            </Link>        
                        }
                        else if(social.instagram != null){
                            return <Link key={index} href={social.instagram}>
                                <FaInstagram/>
                            </Link>             
                        }
                        else if(social.twitter != null){
                            return <Link key={index} href={social.twitter}>
                                <FaTwitter/>
                            </Link>                                 
                        }
                })
                }
                </div>
                <p className="w-full text-center">{memberIntro}</p>
                <div className="w-full flex justify-between">
            </div>

            </div>
        </div>
    )
}

export function OpportunityCard({opportunity}){
    // to be provided by the assigning cards wrapper and not directly from the opportunity list.
    const [iconState,setIconState] = useState()
    const tag = opportunity.tag
    const opportunityName = opportunity.name 
    const opportunityLink = opportunity.opportunityLink
    const opportunityDetail = opportunity.detail
    
    useEffect(function(){
        if(tag == "internship"){
            setIconState(<FaPen className="rounded-full text-4xl text-blue-600"/>)
        }
        else if(tag == "training"){
            setIconState(<FaClipboardCheck className="rounded-full text-green-600 text-4xl"/>)
        }
        else if(tag == "scholarship"){
            setIconState(<FaAirbnb className="rounded-full text-4xl dark:text-white text-black"/>)
        }
    },[])
    return(
        <div className="w-full flex flex-col gap-2  justify-end relative bg-center bg-cover bg-[url('../assets/studentPlanting2.jpg')] items-center sm:w-[23rem] lg:w-[23rem]  flex-shrink-0 flex-grow- h-[25rem] dark:bg-gray-950 bg-black rounded-xl px-4 py-8">
            <div className="dark:bg-black bg-white flex items-center justify-center rounded-full absolute top-4 left-4 w-[3.5rem] h-[3.5rem] lg:w-[4rem] lg:h-[4rem]">
                {iconState}
            </div>
            <div className="text-green-600 font-bold text-xl">
                {opportunityName}
            </div>
            <div className="line-clamp-2 text-white">{opportunityDetail}...</div>
            <div className="w-full h-12 flex justify-between">
                <Link className="text-green-600 dark:bg-white bg-white w-fit h-fit py-2 px-4 text-xl rounded-lg" href={opportunityLink}>
                    apply
                </Link>
                <Link className="text-white dark:bg-black bg-green-600 w-fit h-fit py-2 px-4 text-xl rounded-lg" href={opportunityLink}>
                    learn more...
                </Link>
            </div>
        </div>

    )
}

export function SingleProgram({program,programPath}){
    const [iconState,setIconState] = useState()
    const tag = program.tag
    const programName = program.name 
    const programDetail = program.detail
    
    useEffect(function(){
        if(tag == "mentorship"){
            setIconState(<FaPen className="rounded-full text-4xl text-blue-600"/>)
        }
        else if(tag == "education"){
            setIconState(<FaClipboardCheck className="rounded-full text-green-600 text-4xl"/>)
        }
        else if(tag == "scholarship"){
            setIconState(<FaAirbnb className="rounded-full text-4xl dark:text-white text-black"/>)
        }
    },[])
    return(
        <div className="w-full flex flex-col gap-2  justify-end relative bg-center bg-cover bg-[url('../assets/studentPlanting2.jpg')] items-center sm:w-[23rem] lg:w-[23rem]  flex-shrink-0 flex-grow- h-[25rem] dark:bg-gray-950 bg-black rounded-xl px-4 py-8">
        <div className="dark:bg-black bg-white flex items-center justify-center rounded-full absolute top-4 left-4 w-[3.5rem] h-[3.5rem] lg:w-[4rem] lg:h-[4rem]">
            {iconState}
        </div>
        <div className="text-green-600 font-bold text-xl">
            {programName}
        </div>
        <div className="line-clamp-2 text-white">{programDetail}...</div>
        <div className="w-full h-12 flex justify-between">
            <Link className="text-green-600 dark:bg-white bg-white w-fit h-fit py-2 px-4 text-xl rounded-lg" href={`learn/${programPath}`}>
                apply
            </Link>
            <Link className="text-white dark:bg-black bg-green-600 w-fit h-fit py-2 px-4 text-xl rounded-lg" href={`learn/${programPath}`}>
                learn more...
            </Link>
        </div>
        </div>
    )
}

export function SingleEvent({program,programPath}){
    const [iconState,setIconState] = useState()
    const tag = program.tag
    const programName = program.name 
    const programDetail = program.detail
    
    useEffect(function(){
        if(tag == "mentorship"){
            setIconState(<FaPen className="rounded-full text-4xl text-blue-600"/>)
        }
        else if(tag == "education"){
            setIconState(<FaClipboardCheck className="rounded-full text-green-600 text-4xl"/>)
        }
        else if(tag == "scholarship"){
            setIconState(<FaAirbnb className="rounded-full text-4xl dark:text-white text-black"/>)
        }
    },[])
    return(
        <div className="w-full flex flex-col gap-2  justify-end relative bg-center bg-cover  items-center sm:w-[23rem] lg:w-[23rem]  flex-shrink-0 flex-grow-1 min-h-[25rem] dark:bg-gray-950 bg-black">
        <div className="dark:bg-black bg-white flex items-center justify-center absolute top-0 left-0 w-[3.5rem] h-[3.5rem] lg:w-[4rem] lg:h-[4rem]">
            {iconState}
        </div>
        <div className="w-full h-4/6">
            <Image src={studentPlanting2} className="w-full h-full object-cover object-center" width="600" height="600"/>
        </div>
        <div className="text-green-600 font-bold text-xl">
            {programName}
        </div>
        <div className="line-clamp-2 text-white">{programDetail}...</div>
        <div className="w-full h-12 flex justify-between mb-4">
            <Link className="text-green-600 dark:bg-white bg-white w-fit h-fit ml-4 py-2 px-4 text-xl rounded-lg" href={`learn/${programPath}`}>
                participate
            </Link>
            <Link className="text-white dark:bg-black bg-green-600 w-fit h-fit mr-4  py-2 px-4 text-xl rounded-lg" href={`learn/${programPath}`}>
                learn more...
            </Link>
        </div>
        </div>
    )
}



/*
export function ProgramCard(){
    
    return(
        <div className="w-full sm:w-[23rem] lg:w-[23rem]  flex-shrink-0 flex-grow-1 h-5/6 dark:bg-gray-950 bg-black rounded-xl p-3">
            <div className="w-full h-3/5 overflow-hidden">
            <Image loader={cardImageLoader} src="studentPlanting.jpg" alt="test alt" className="object-cover object-center" priority={true} width={200} height={200}/>
            </div>
        </div>
    )
}*/