"use client"

import {useRef} from 'react'
import Image from "next/image"
import tempImage1 from "../planting1.jpg"
import tempImage2 from "../studentPlanting.jpg"
import {FaPlayCircle} from "react-icons/fa";

export function ReaderButton({contentHtml}){
    const sectionRef = useRef()

    let textReaderHandler = function(e){
        e.preventDefault()
        const speech = new SpeechSynthesisUtterance()
        speech.text = sectionRef.current.innerText
        speech.voice = window.speechSynthesis.getVoices()[5] 
        window.speechSynthesis.speak(speech)
    }
    return(
        <>
        <button onClick={textReaderHandler} className="flex w-fit py-2 px-4 rounded-lg dark:bg-slate-600 bg-slate-800 dark:text-white text-green-200 gap-2 items-center"><FaPlayCircle className="text-green-600"/><span className="font-bold text-sm tracking-widest">listen</span></button>
        <div className="w-full h-96 rounded-lg">
        <Image src={tempImage1} className="w-full rounded-lg h-full object-cover object-center" width={500} height={500}/>
        </div>
        <section ref={sectionRef} dangerouslySetInnerHTML={{__html: contentHtml}}>
        </section>             
        </>
    )
}

