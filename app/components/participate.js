"use client"

import { useEffect,useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Wangari from "../assets/1721508933469.jpg"


export function Participate(){
    const [actualActivityTitle,setActualActivityTitle] = useState() 
    const [programDetail,setProgramDetail] = useState() 

    useEffect(function(){
        const activityTitle = window.localStorage.getItem("activityTitle")
        const actualProgramDetail = window.localStorage.getItem("programDetail")
        setProgramDetail(actualProgramDetail)
        // the activity title is to be used at the top
        const activityNew = JSON.parse(activityTitle)    
        setActualActivityTitle(activityNew)
    },[])
    return(
        <div className="w-full min-h-screen flex flex-col items-center">
            {actualActivityTitle ? <JoinActivity programName={actualActivityTitle.programName} programDetail={programDetail}/> : "nothing yet" }            
        </div>
    )
}

export function JoinActivity({programName,programDetail}){
    
    let volunteerHandler = function(e){
        e.preventDefault()
    }
    return(
        <>
        <h1 className="dark:text-white flex flex-col md:flex-row text-black text-center md:text-left text-2xl sm:text-3xl mb-8 dark:font-normal font-bold"><span className="ml-0 md:ml-8 lg:ml-12 dark:text-green-500 text-2xl sm:text-3xl font-bold text-green-500">{programName}</span> </h1>
        <div className="w-5/6 h-auto rounded-lg md:h-[30rem] flex flex-col md:flex-row dark:bg-green-950 bg-green-300 overflow-hidden box-border mb-12">
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
        {/*here's where I can set the dangerously set inner html*/}
        <div className="w-5/6 h-auto text-center mb-12" dangerouslySetInnerHTML={{__html: programDetail}}>
            
        </div>
        </>
    )
}
