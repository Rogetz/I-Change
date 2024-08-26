"use client"
import {useEffect,useState,useRef} from "react"

/*
window.speechSynthesis.onvoiceschanged = ()=>{
    speech.voice = window.speechSynthesis.getVoices()[0]
}*/

export function Voice({no}){
    const textRef = useRef()

    let speakHandler = function(e){
        const speech = new SpeechSynthesisUtterance()
        
        const text = textRef.current.innerText
        //const text = "hello, am speaking here"
        speech.text = text
        speech.voice = window.speechSynthesis.getVoices()[no]
        window.speechSynthesis.speak(speech)  

        window.speechSynthesis.onvoiceschanged = ()=>{
            speech.voice = window.speechSynthesis.getVoices()[no]
        }  
    }
    return(
        <>
        <button onClick={speakHandler} className="text-black p-3 bg-red-600 rounded-xl">speak</button>
        <div ref={textRef}>
            Hello, it's from the voice component, I am speaking
        </div>
        </>
    )  
}

// this is what I'll import for my blog posts pages for reading
export function TextReader({text}){
    const voiceNo = 4

    useEffect(function(){
        const speech = new SpeechSynthesisUtterance()
        speech.text = text
        speech.voice = window.speechSynthesis.getVoices()[voiceNo]
        window.speechSynthesis.speak(speech)  

        window.speechSynthesis.onvoiceschanged = ()=>{
            speech.voice = window.speechSynthesis.getVoices()[voiceNo]
        }
    },[])
    return(
        <></>
    )
}