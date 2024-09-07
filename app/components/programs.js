"use server"

import { SingleProgram } from "./programCard"
import { getAllPostsData} from  "../../lib/posts"


export async  function ProgramsSkeleton(){
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


export async function Programs(){
    return(
        <div className="w-full min-h-screen">
            <Mentorship/>
            <Education/>
            <Scholarships/>
        </div>
    )
}

let scholarshipPrograms = [
    {
        name: "scholarships",
        opportunityLink: "",
        tag: "scholarship",
        detail: "Grab a chance to get a fully funded scholarship on environment related studies all over the world."
    },
    {
        name: "scholarships",
        opportunityLink: "",
        tag: "scholarship",
        detail: "Grab a chance to get a fully funded scholarship on environment related studies all over the world."
    },
    {
        name: "scholarships",
        opportunityLink: "",
        tag: "scholarship",
        detail: "Grab a chance to get a fully funded scholarship on environment related studies all over the world."
    },
    {
        name: "scholarships",
        opportunityLink: "",
        tag: "scholarship",
        detail: "Grab a chance to get a fully funded scholarship on environment related studies all over the world."
    }

]

let mentorshipPrograms = [
    {
        name: "environment conservation",
        opportunityLink: "",
        tag: "internship",
        detail: "Annual opportunities for campus students to gain hands on experience on the matters pertaining the environment and how to go about it"
    },
    {
        name: "environment conservation",
        opportunityLink: "",
        tag: "internship",
        detail: "Annual opportunities for campus students to gain hands on experience on the matters pertaining the environment and how to go about it"
    },
    {
        name: "environment conservation",
        opportunityLink: "",
        tag: "internship",
        detail: "Annual opportunities for campus students to gain hands on experience on the matters pertaining the environment and how to go about it"
    },
    {
        name: "environment conservation",
        opportunityLink: "",
        tag: "internship",
        detail: "Annual opportunities for campus students to gain hands on experience on the matters pertaining the environment and how to go about it"
    },
]

let educationPrograms = [
    {
        name: "Forestation Training",
        opportunityLink: "training",
        tag: "training",
        detail: "we educate you on the importance of environmental conservation, and what to do pertaining reafforestation"
    },
    {
        name: "Forestation Training",
        opportunityLink: "training",
        tag: "training",
        detail: "we educate you on the importance of environmental conservation, and what to do pertaining reafforestation"
    },
    {
        name: "Forestation Training",
        opportunityLink: "training",
        tag: "training",
        detail: "we educate you on the importance of environmental conservation, and what to do pertaining reafforestation"
    }
]



export async function Mentorship(){
    const mentorshipPrograms = await getAllPostsData("programs/mentorship")
    return(
        <div id="mentorship" className="w-full min-h-screen mb-4 lg:mb-12"> 
        <h1 className="text-2xl dark:text-white text-black pl-3 lg:text-3xl lg:font-bold lg:pl-12 mb-4 lg:mb-12">Mentorship programs</h1> 
        <div className="w-full justify-evenly lg:justify-evenly h-auto flex  flex-wrap gap-4 sm:px-2 md:px-2 lg:px-12   gap-y-5 bg-gradient-to-br">
            {mentorshipPrograms.map(async function(program,index){
                const actualProgram = await program
                let mentorPath = `programs-mentorship-${actualProgram.id}`
                return <SingleProgram key={index} programPath={mentorPath} program={actualProgram}/>
            })}
        </div>        
        </div>
    )
}



export async function Education(){
    const educationPrograms = await getAllPostsData("programs/education")    
    return(
        <div id="education" className="w-full min-h-screen mb-4 lg:mb-12"> 
        <h1 className="text-2xl dark:text-white text-black pl-3 lg:text-3xl lg:font-bold lg:pl-12 mb-4 lg:mb-12">Educational innitiatives</h1> 
        <div className="w-full justify-evenly lg:justify-evenly h-auto flex  flex-wrap gap-4 sm:px-2 md:px-2 lg:px-12   gap-y-5 bg-gradient-to-br">
            {educationPrograms.map(async function(program,index){
                const actualProgram = await program
                let educatePath = `programs-education-${actualProgram.id}`
                return <SingleProgram key={index} programPath={educatePath} program={actualProgram}/>
            })}
        </div>        
        </div>
    )
}


export async function Scholarships(){
    const scholarshipPrograms = await getAllPostsData("programs/scholarship")
    return(
        <div id="scholarships" className="w-full min-h-screen mb-4 lg:mb-12"> 
        <h1 className="text-2xl dark:text-white text-black pl-3 lg:text-3xl lg:font-bold lg:pl-12 mb-4 lg:mb-12">scholarship opportunities</h1> 
        <div className="w-full justify-evenly lg:justify-evenly h-auto flex  flex-wrap gap-4 sm:px-2 md:px-2 lg:px-12   gap-y-5 bg-gradient-to-br">
            {scholarshipPrograms.map(async function(program,index){
                const actualProgram = await program
                let scholarPath = `programs-scholarship-${actualProgram.id}`
                return <SingleProgram key={index} programPath={scholarPath} program={actualProgram}/>
            })}
        </div>        
        </div>
    )
}

